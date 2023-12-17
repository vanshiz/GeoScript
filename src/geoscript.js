const geolib = require('geolib');
const axios = require('axios');

function calculateDistance(pointA, pointB) {
  return geolib.getDistance(pointA, pointB);
}

function parseGeoJSON(geoJSONString) {
  try {
    return JSON.parse(geoJSONString);
  } catch (error) {
    throw new Error('Invalid GeoJSON format');
  }
}

function geocodeLocation(location, apiKey) {
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${apiKey}`;

  return axios.get(apiUrl)
    .then((response) => {
      const data = response.data;
      if (data.results && data.results.length > 0) {
        return data.results[0].geometry;
      } else {
        throw new Error('Location not found');
      }
    })
    .catch((error) => {
      throw error;
    });
}

function calculateArea(polygon) {
  return geolib.getArea(polygon);
}

function calculateBoundingBox(coordinates) {
  const bounds = geolib.getBounds(coordinates);
  return {
    northeast: { latitude: bounds.maxLat, longitude: bounds.maxLng },
    southwest: { latitude: bounds.minLat, longitude: bounds.minLng },
  };
}

function isPointInPolygon(point, polygon) {
  return geolib.isPointInside(point, polygon);
}

function convertCoordinateFormat(coordinate, targetFormat) {
  if (targetFormat === 'dms') {
    return geolib.useDecimal(coordinate);
  } else if (targetFormat === 'decimal') {
    return geolib.useDecimal(coordinate, true);
  } else {
    throw new Error('Unsupported coordinate format');
  }
}

module.exports = {
  calculateDistance,
  parseGeoJSON,
  geocodeLocation,
  calculateArea,
  calculateBoundingBox,
  isPointInPolygon,
  convertCoordinateFormat,
};
