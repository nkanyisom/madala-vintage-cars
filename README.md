# Madala Vintage Cars

A showcase website for vintage cars from the golden era of 1975-1985, featuring classic automobiles with detailed specifications and beautiful imagery.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Interactive Gallery**: Browse vintage cars with year-based filtering
- **Comprehensive Car Database**: 30+ classic cars from 1975-1985 with detailed specifications
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **Contact Form**: Functional contact form for inquiries
- **Smooth Navigation**: Seamless scrolling between sections

## Car Collection

Our curated collection includes iconic vehicles from:

### Years Covered: 1975-1985
- **1975**: Chevrolet Corvette Stingray, Ford Mustang II, Porsche 911 Turbo
- **1976**: Cadillac Eldorado, BMW 2002, Pontiac Trans Am
- **1977**: Chevrolet Camaro Z28, Lincoln Continental Mark V, Datsun 280Z
- **1978**: Chevrolet Corvette 25th Anniversary, Ford Bronco, Porsche 928
- **1979**: Ford Mustang Fox Body, Buick Grand National, Mazda RX-7
- **1980**: Chevrolet Citation, Ford Thunderbird, AMC Eagle
- **1981**: DeLorean DMC-12, BMW 3 Series (E30), Chrysler Imperial
- **1982**: Chevrolet Camaro Z28, Pontiac Firebird Trans Am, Cadillac Cimarron
- **1983**: Ford Mustang SVO, Chevrolet Monte Carlo SS, Nissan 300ZX
- **1984**: Chevrolet Corvette C4, Dodge Daytona, Pontiac Fiero
- **1985**: Buick Grand National, Ford Mustang GT, Chevrolet IROC-Z Camaro, Porsche 944

## Technology Stack

- **HTML5**: Semantic markup with modern structure
- **CSS3**: 
  - Flexbox and Grid layouts
  - CSS animations and transitions
  - Responsive design with media queries
  - Custom properties and modern CSS features
- **JavaScript (ES6+)**:
  - Modular code structure
  - DOM manipulation
  - Event handling
  - Dynamic content filtering
- **Google Fonts**: Typography enhancement
- **Unsplash Images**: High-quality car photography

## File Structure

```
madala-vintage-cars/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
└── README.md           # Project documentation
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nkanyisom/madala-vintage-cars.git
   cd madala-vintage-cars
   ```

2. **Open the website**:
   - Simply open `index.html` in your web browser
   - Or use a local development server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View the website**:
   - Open your browser and navigate to `http://localhost:8000` (if using a server)
   - Or simply double-click `index.html` to open directly

## Features in Detail

### Interactive Car Gallery
- Filter cars by year (1975-1985)
- Responsive card layout
- Hover effects and animations
- Detailed car specifications
- High-quality images with fallback placeholders

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Flexible grid layouts
- Optimized typography scaling

### Performance Optimizations
- Optimized images with proper sizing
- Efficient CSS with minimal redundancy
- Vanilla JavaScript for fast loading
- Semantic HTML for accessibility

## Customization

### Adding New Cars
To add more vintage cars, edit the `vintageCars` array in `js/script.js`:

```javascript
{
    year: 1975,
    name: "Car Name",
    specs: "Engine • Power • Transmission",
    description: "Car description...",
    image: "image-url"
}
```

### Styling Changes
Modify `css/styles.css` to customize:
- Colors and themes
- Typography
- Layout and spacing
- Animations and effects

### Adding Features
The JavaScript in `js/script.js` is modular and can be extended with:
- Search functionality
- More filter options
- Car comparison features
- Favorites system

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Car images provided by [Unsplash](https://unsplash.com)
- Google Fonts for typography
- Inspiration from classic car museums and collections
- Historical car data from automotive archives

## Contact

For questions or suggestions about this project:
- Email: info@madalavintage.com
- GitHub: [@nkanyisom](https://github.com/nkanyisom)

---

**Note**: This is a demonstration website showcasing vintage cars from 1975-1985. Car images are sourced from Unsplash and are for educational/demonstration purposes only.
