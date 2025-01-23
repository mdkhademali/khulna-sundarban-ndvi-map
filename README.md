# Sundarbans NDVI Analysis

This project focuses on analyzing the **Normalized Difference Vegetation Index (NDVI)** for the **Sundarbans region**, located in the **Khulna Division** of Bangladesh. The analysis uses **Landsat 8** satellite imagery to evaluate vegetation health and land cover dynamics.

### Project Overview
The goal of this project is to calculate NDVI values over the year 2022 to understand the vegetation health in the Sundarbans. By analyzing NDVI, we can assess vegetation density, detect forest areas, and identify regions affected by environmental stressors such as drought or deforestation.

### Data Source
The data used in this project is from **Landsat 8** satellite imagery available through **Google Earth Engine** (GEE). The imagery is filtered for the year 2022 and processed to calculate NDVI, which is a standard index for analyzing vegetation.

- **Data Provider:** NASA, USGS (Landsat 8)
- **Google Earth Engine (GEE):** The analysis is performed using GEE scripts.
  
### Project Objectives
- To analyze vegetation health in the Sundarbans using Landsat 8 data.
- To visualize NDVI values with a color palette emphasizing vegetation, including shades of green and yellow.
- To identify regions with high vegetation (forests) and low vegetation (water bodies or barren land).

### Steps Involved
1. **Data Collection:**
   - Landsat 8 imagery for the year 2022 is collected using Google Earth Engine.
   
2. **NDVI Calculation:**
   - NDVI is calculated using the formula:
     \[
     \text{NDVI} = \frac{\text{NIR} - \text{RED}}{\text{NIR} + \text{RED}}
     \]
   - The Near-Infrared (NIR) band (Band 5) and Red band (Band 4) are used from the Landsat 8 dataset.

3. **Data Processing and Visualization:**
   - The NDVI values are clipped to the **Sundarbans** region and visualized using a custom color palette, highlighting areas of dense vegetation in darker greens and areas with less vegetation in yellow or white.
  
4. **Final Output:**
   - The NDVI map is generated and analyzed to observe vegetation trends and conditions.

   # Sundarbans NDVI Analysis

This project focuses on analyzing the **Normalized Difference Vegetation Index (NDVI)** for the **Sundarbans region**.

## Screenshots
![NDVI Map](Images/ndvi-image%20(1).png)
![NDVI Map](Images/ndvi-image%20(2).png)