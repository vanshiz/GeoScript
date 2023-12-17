const assert = require('assert');
const geoscript = require('../src/geoscript'); // Adjust the path based on your project structure

// Example tests
describe('Geoscript Module Tests', function () {
  it('should calculate distance correctly', function () {
    const distance = geoscript.calculateDistance(
      { latitude: 40.748817, longitude: -73.985428 }, // New York City
      { latitude: 34.052235, longitude: -118.243683 } // Los Angeles
    );
    assert.strictEqual(distance, 3933974); // Adjust the expected value based on your test data
  });

  it('should parse GeoJSON correctly', function () {
    const geoJSONString = '{"type":"Point","coordinates":[-73.985428,40.748817]}';
    const parsedGeoJSON = geoscript.parseGeoJSON(geoJSONString);
    assert.deepStrictEqual(parsedGeoJSON, { type: 'Point', coordinates: [-73.985428, 40.748817] });
  });

  // Add more tests for other functions...

  it('should convert coordinates to DMS format correctly', function () {
    const coordinate = { latitude: 37.7749, longitude: -122.4194 };
    const convertedCoordinate = geoscript.convertCoordinateFormat(coordinate, 'dms');
    assert.deepStrictEqual(convertedCoordinate, { lat: '37° 46\' 29.64" N', lng: '122° 25\' 9.84" W' });
  });
});
