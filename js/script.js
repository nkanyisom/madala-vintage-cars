// Vintage Cars Data (1975-1985)
const vintageCars = [
    // 1975 Cars
    {
        year: 1975,
        name: "Chevrolet Corvette Stingray",
        specs: "5.7L V8 • 165 HP • Manual/Auto",
        description: "The last year of the C3 generation Corvette, featuring the iconic Stingray design with distinctive body lines and pop-up headlights.",
        image: "images/Chevrolet_Corvette_Stingray_1975.jpg"
    },
    {
        year: 1975,
        name: "Ford Mustang II",
        specs: "2.3L I4 • 88 HP • Manual/Auto",
        description: "A compact redesign of the Mustang, built on the Pinto platform during the oil crisis era, focusing on fuel efficiency over performance.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1975,
        name: "Porsche 911 Turbo",
        specs: "3.0L Flat-6 Turbo • 260 HP • Manual",
        description: "The first production 911 Turbo, introducing forced induction to the iconic sports car with distinctive whale tail spoiler.",
        image: "images/Porsche_911_Turbo_1975.jpg"
    },

    // 1976 Cars
    {
        year: 1976,
        name: "Cadillac Eldorado",
        specs: "8.2L V8 • 215 HP • Automatic",
        description: "A luxurious personal luxury coupe featuring Cadillac's distinctive styling and the largest production V8 engine ever made.",
        image: "images/Porsche_911_Turbo_1975.jpg"
    },
    {
        year: 1976,
        name: "BMW 2002",
        specs: "2.0L I4 • 100 HP • Manual",
        description: "The compact sports sedan that established BMW's reputation in America, featuring excellent handling and European engineering.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1976,
        name: "Pontiac Trans Am",
        specs: "7.5L V8 • 200 HP • Manual/Auto",
        description: "The iconic Firebird variant with distinctive graphics and handling package, popularized by movies and TV shows.",
        image: "images/ford_1975.jpg"
    },

    // 1977 Cars
    {
        year: 1977,
        name: "Chevrolet Camaro Z28",
        specs: "5.7L V8 • 185 HP • Manual/Auto",
        description: "High-performance version of the second-generation Camaro with improved aerodynamics and sport-tuned suspension.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1977,
        name: "Lincoln Continental Mark V",
        specs: "7.5L V8 • 161 HP • Automatic",
        description: "Luxurious personal luxury coupe with distinctive Continental styling and premium interior appointments.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1977,
        name: "Datsun 280Z",
        specs: "2.8L I6 • 170 HP • Manual/Auto",
        description: "Japanese sports car that offered European-style performance at an affordable price, featuring fuel injection.",
        image: "images/ford_1975.jpg"
    },

    // 1978 Cars
    {
        year: 1978,
        name: "Chevrolet Corvette 25th Anniversary",
        specs: "5.7L V8 • 185 HP • Manual/Auto",
        description: "First year of the C3's distinctive fastback rear window and 25th anniversary edition with special Silver Anniversary paint.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1978,
        name: "Ford Bronco",
        specs: "5.8L V8 • 156 HP • Manual/Auto",
        description: "Full-size SUV that helped establish the recreational vehicle market with rugged capability and distinctive styling.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1978,
        name: "Porsche 928",
        specs: "4.5L V8 • 219 HP • Manual/Auto",
        description: "Porsche's grand touring coupe featuring a front-mounted V8 engine and advanced technology for its era.",
        image: "images/ford_1975.jpg"
    },

    // 1979 Cars
    {
        year: 1979,
        name: "Ford Mustang Fox Body",
        specs: "5.0L V8 • 140 HP • Manual/Auto",
        description: "Third-generation Mustang built on the Fox platform, marking a return to more compact dimensions and lighter weight.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1979,
        name: "Buick Grand National",
        specs: "3.8L V6 Turbo • 200 HP • Automatic",
        description: "High-performance variant of the Regal featuring turbocharged V6 power and distinctive blacked-out styling.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1979,
        name: "Mazda RX-7",
        specs: "1.1L Rotary • 100 HP • Manual",
        description: "Revolutionary sports car featuring Mazda's rotary engine technology in a lightweight, well-balanced chassis.",
        image: "images/ford_1975.jpg"
    },

    // 1980 Cars
    {
        year: 1980,
        name: "Chevrolet Citation",
        specs: "2.5L I4 • 90 HP • Manual/Auto",
        description: "GM's first front-wheel-drive compact car, representing a significant shift in American automotive design philosophy.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1980,
        name: "Ford Thunderbird",
        specs: "4.2L V8 • 115 HP • Automatic",
        description: "Downsized personal luxury coupe featuring more aerodynamic styling and improved fuel efficiency.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1980,
        name: "AMC Eagle",
        specs: "4.2L I6 • 110 HP • Manual/Auto",
        description: "One of the first crossover vehicles, combining car comfort with four-wheel-drive capability.",
        image: "images/ford_1975.jpg"
    },

    // 1981 Cars
    {
        year: 1981,
        name: "DeLorean DMC-12",
        specs: "2.85L V6 • 130 HP • Manual/Auto",
        description: "Iconic stainless steel sports car with gull-wing doors, designed by Giorgetto Giugiaro and later featured in Back to the Future.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1981,
        name: "BMW 3 Series (E30)",
        specs: "1.8L I4 • 90 HP • Manual",
        description: "First generation of BMW's compact executive car that would become one of the most successful model lines in automotive history.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1981,
        name: "Chrysler Imperial",
        specs: "5.2L V8 • 140 HP • Automatic",
        description: "Chrysler's flagship luxury sedan featuring distinctive formal styling and premium interior appointments.",
        image: "images/ford_1975.jpg"
    },

    // 1982 Cars
    {
        year: 1982,
        name: "Chevrolet Camaro Z28",
        specs: "5.0L V8 • 145 HP • Manual/Auto",
        description: "Third-generation Camaro featuring more modern styling with improved aerodynamics and handling characteristics.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1982,
        name: "Pontiac Firebird Trans Am",
        specs: "5.0L V8 • 145 HP • Manual/Auto",
        description: "Redesigned F-body featuring the iconic Knight Rider styling with distinctive front spoiler and ground effects.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1982,
        name: "Cadillac Cimarron",
        specs: "1.8L I4 • 88 HP • Manual/Auto",
        description: "Cadillac's attempt at a compact luxury car, based on the GM J-body platform with premium appointments.",
        image: "images/ford_1975.jpg"
    },

    // 1983 Cars
    {
        year: 1983,
        name: "Ford Mustang SVO",
        specs: "2.3L I4 Turbo • 175 HP • Manual",
        description: "High-performance turbocharged Mustang featuring advanced aerodynamics and sophisticated suspension tuning.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1983,
        name: "Chevrolet Monte Carlo SS",
        specs: "5.0L V8 • 180 HP • Automatic",
        description: "High-performance variant of the Monte Carlo featuring sport suspension and aerodynamic improvements.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1983,
        name: "Nissan 300ZX",
        specs: "3.0L V6 • 160 HP • Manual/Auto",
        description: "Successor to the 280Z featuring more modern styling, advanced electronics, and improved performance.",
        image: "images/ford_1975.jpg"
    },

    // 1984 Cars
    {
        year: 1984,
        name: "Chevrolet Corvette C4",
        specs: "5.7L V8 • 205 HP • Manual/Auto",
        description: "All-new fourth-generation Corvette featuring modern styling, improved handling, and advanced technology.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1984,
        name: "Dodge Daytona",
        specs: "2.2L I4 Turbo • 142 HP • Manual/Auto",
        description: "Sporty front-wheel-drive coupe featuring distinctive wedge styling and turbocharged performance.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1984,
        name: "Pontiac Fiero",
        specs: "2.5L I4 • 92 HP • Manual/Auto",
        description: "Mid-engine sports car featuring plastic body panels and space-frame construction - America's first mass-produced mid-engine car.",
        image: "images/ford_1975.jpg"
    },

    // 1985 Cars
    {
        year: 1985,
        name: "Buick Grand National",
        specs: "3.8L V6 Turbo • 200 HP • Automatic",
        description: "Legendary turbocharged muscle car known as one of the fastest cars of the 1980s, featuring all-black styling.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1985,
        name: "Ford Mustang GT",
        specs: "5.0L V8 • 210 HP • Manual/Auto",
        description: "High-performance Fox Body Mustang featuring the return of the legendary 5.0L V8 engine with significant power increases.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1985,
        name: "Chevrolet IROC-Z Camaro",
        specs: "5.0L V8 • 190 HP • Manual/Auto",
        description: "Special edition Camaro named after the International Race of Champions, featuring performance upgrades and distinctive styling.",
        image: "images/ford_1975.jpg"
    },
    {
        year: 1985,
        name: "Porsche 944",
        specs: "2.5L I4 • 143 HP • Manual/Auto",
        description: "Front-engine sports car featuring excellent balance and handling, representing Porsche's move toward more accessible performance.",
        image: "images/ford_1975.jpg"
    }
];

// DOM Elements
const carsGrid = document.getElementById('carsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayCars(vintageCars);
    initializeFilters();
    initializeContactForm();
    initializeSmoothScrolling();
});

// Display cars function
function displayCars(cars) {
    carsGrid.innerHTML = '';
    
    cars.forEach((car, index) => {
        const carCard = createCarCard(car, index);
        carsGrid.appendChild(carCard);
    });
}

// Create car card element
function createCarCard(car, index) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    card.innerHTML = `
        <div class="car-image">
            <img src="${car.image}" alt="${car.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; background: #f5f5f5; color: #666;">
                🚗 ${car.name}
            </div>
        </div>
        <div class="car-info">
            <div class="car-year">${car.year}</div>
            <h3 class="car-name">${car.name}</h3>
            <div class="car-specs">${car.specs}</div>
            <p class="car-description">${car.description}</p>
        </div>
    `;
    
    return card;
}

// Initialize filter functionality
function initializeFilters() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter year
            const filterYear = this.getAttribute('data-year');
            
            // Filter cars
            let filteredCars;
            if (filterYear === 'all') {
                filteredCars = vintageCars;
            } else {
                filteredCars = vintageCars.filter(car => car.year.toString() === filterYear);
            }
            
            // Display filtered cars
            displayCars(filteredCars);
        });
    });
}

// Initialize contact form
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Simulate form submission
        alert('Thank you for your message! We\'ll get back to you soon.');
        this.reset();
    });
}

// Initialize smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-menu a, .cta-button');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(44, 62, 80, 0.95) 0%, rgba(52, 73, 94, 0.95) 100%)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Car statistics
function getCarStatistics() {
    const stats = {
        totalCars: vintageCars.length,
        yearRange: '1975-1985',
        manufacturers: [...new Set(vintageCars.map(car => car.name.split(' ')[0]))].length,
        averageHP: Math.round(vintageCars.reduce((sum, car) => {
            const hp = parseInt(car.specs.match(/(\d+)\s*HP/)?.[1] || 0);
            return sum + hp;
        }, 0) / vintageCars.length)
    };
    
    return stats;
}

// Update statistics in the about section
document.addEventListener('DOMContentLoaded', function() {
    const stats = getCarStatistics();
    const statElements = document.querySelectorAll('.stat');
    
    if (statElements.length >= 3) {
        statElements[0].querySelector('h3').textContent = `${stats.totalCars}+`;
        statElements[1].querySelector('h3').textContent = '11';
        statElements[2].querySelector('h3').textContent = `${stats.manufacturers}+`;
    }
});

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { vintageCars, getCarStatistics };
}
