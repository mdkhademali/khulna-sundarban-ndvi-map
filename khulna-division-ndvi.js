//Md. Khadem Ali
//https://github.com/mdkhademali

// Load a public dataset for Sundarbans boundary (replace with your dataset if needed)
var sundarbans = ee.FeatureCollection('FAO/GAUL/2015/level1')
  .filter(ee.Filter.eq('ADM1_NAME', 'Khulna')); // Example: Khulna division (part of Sundarbans in Bangladesh)

// Visualize the boundary
Map.centerObject(sundarbans, 9);
Map.addLayer(sundarbans, {color: 'blue'}, 'Sundarbans Boundary');

// Load the Landsat 8 Image Collection
var landsat = ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
  .filterBounds(sundarbans)
  .filterDate('2022-01-01', '2022-12-31')
  .filter(ee.Filter.lt('CLOUD_COVER', 10)) // Filter images with less than 10% cloud cover
  .median(); // Create a median composite

// Calculate NDVI
var ndvi = landsat.normalizedDifference(['SR_B5', 'SR_B4']).rename('NDVI');

// Clip NDVI to the Sundarbans boundary
var ndviClipped = ndvi.clip(sundarbans);

// Add NDVI layer to the map with a color palette emphasizing yellow and darker green
Map.addLayer(ndviClipped, {
  min: 0,
  max: 1,
  palette: ['white', 'yellow', 'lightgreen', 'green', 'darkgreen', 'forestgreen'] // Even darker green for more contrast
}, 'NDVI');

// Print NDVI layer for reference
print('NDVI Layer:', ndviClipped);

// Display project information
print('This project is focused on the Sundarbans region, part of the Khulna division in Bangladesh.');
