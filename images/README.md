# Images Directory

This directory is reserved for local car images. Currently, the website uses Unsplash images via URLs for demonstration purposes.

## Image Requirements

If you want to add local images instead of using Unsplash URLs:

1. **Image Format**: JPG, PNG, or WebP
2. **Recommended Size**: 400x250 pixels (16:10 aspect ratio)
3. **File Naming**: Use descriptive names like:
   - `1975-chevrolet-corvette-stingray.jpg`
   - `1976-bmw-2002.jpg`
   - `1981-delorean-dmc12.jpg`

## Folder Structure

You can organize images by year:

```
images/
├── 1975/
├── 1976/
├── 1977/
├── 1978/
├── 1979/
├── 1980/
├── 1981/
├── 1982/
├── 1983/
├── 1984/
└── 1985/
```

## How to Use Local Images

To switch from Unsplash URLs to local images:

1. Add your images to this directory
2. Update the `image` property in the `vintageCars` array in `js/script.js`
3. Change from URL to relative path:
   ```javascript
   // From:
   image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=250&fit=crop"
   
   // To:
   image: "images/1975/chevrolet-corvette-stingray.jpg"
   ```

## Image Sources

Current images are sourced from Unsplash.com and are used for demonstration purposes. 

For a production website, consider:
- Purchasing licensed stock photos
- Using your own photography
- Obtaining proper permissions for automotive images
- Crediting photographers appropriately

## Optimization Tips

- Compress images to reduce file size
- Use modern formats like WebP when possible
- Implement lazy loading for better performance
- Provide alt text for accessibility
