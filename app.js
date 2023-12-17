// app.js

const geoscript = require('./src/geoscript');

// Example usage
const distance = geoscript.calculateDistance(
  { latitude: 40.748817, longitude: -73.985428 }, // New York City
  { latitude: 34.052235, longitude: -118.243683 } // Los Angeles
);

console.log(`Distance between NYC and LA: ${distance} meters`);

const geoJSONString = '{"type":"Point","coordinates":[-73.985428,40.748817]}';
const parsedGeoJSON = geoscript.parseGeoJSON(geoJSONString);
console.log('Parsed GeoJSON:', parsedGeoJSON);

const locationToGeocode = 'San Francisco, CA';
const apiKey = 'YOUR_OPENCAGE_API_KEY'; // Replace with your API key
geoscript.geocodeLocation(locationToGeocode, apiKey)
  .then((geometry) => console.log('Geocoded Location:', geometry))
  .catch((error) => console.error('Geocoding error:', error));

const area = geoscript.calculateArea([
  { latitude: 0, longitude: 0 },
  { latitude: 0, longitude: 1 },
  { latitude: 1, longitude: 1 },
  { latitude: 1, longitude: 0 },
]);

console.log('Area of the polygon:', area);

const boundingBox = geoscript.calculateBoundingBox([
  { latitude: 0, longitude: 0 },
  { latitude: 0, longitude: 1 },
  { latitude: 1, longitude: 1 },
  { latitude: 1, longitude: 0 },
]);

console.log('Bounding box:', boundingBox);

const pointInPolygon = geoscript.isPointInPolygon(
  { latitude: 0.5, longitude: 0.5 },
  [{ latitude: 0, longitude: 0 }, { latitude: 1, longitude: 0 }, { latitude: 1, longitude: 1 }]
);

console.log('Is point in polygon?', pointInPolygon);

const convertedCoordinate = geoscript.convertCoordinateFormat(
  { latitude: 37.7749, longitude: -122.4194 },
  'dms'
);

console.log('Converted coordinate (DMS):', convertedCoordinate);
