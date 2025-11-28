// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.card, .table, .accordion').forEach(el => {
    observer.observe(el);
});

// Simple image carousel for gallery
let currentIndex = 0;
const images = document.querySelectorAll('.gallery-img');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

// Auto-play carousel
setInterval(nextImage, 3000);

// News ticker
const newsItems = [
    "Upcoming: December 2024 Monthly Contest",
    "NASA Space Apps Challenge Wins",
    "Fall Fest 2024 Sponsorship"
];
let newsIndex = 0;
const newsTicker = document.querySelector('.news-ticker');

function updateNews() {
    if (newsTicker) {
        newsTicker.textContent = newsItems[newsIndex];
        newsIndex = (newsIndex + 1) % newsItems.length;
    }
}

setInterval(updateNews, 5000);
updateNews();

// Load events dynamically
async function loadEvents() {
    try {
        const response = await fetch('events.json');
        const events = await response.json();
        const container = document.getElementById('events-container');
        if (container) {
            let html = '<h2>Upcoming Events</h2><table class="table"><thead><tr><th>Date</th><th>Event</th><th>Description</th></tr></thead><tbody>';
            events.forEach(event => {
                html += `<tr><td>${event.date}</td><td>${event.event}</td><td>${event.description}</td></tr>`;
            });
            html += '</tbody></table>';
            container.innerHTML = html;
        }
    } catch (error) {
        console.error('Error loading events:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadEvents);

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.className = 'btn btn-primary position-fixed bottom-0 end-0 m-4';
backToTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopButton.style.display = 'none';
backToTopButton.style.zIndex = '1000';
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact form validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert('Please enter a valid email.');
            return;
        }

        // Simulate form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Dynamic theme toggle with persistence
const toggleButton = document.createElement('button');
toggleButton.innerHTML = '<i class="fas fa-moon"></i>';
toggleButton.className = 'btn btn-secondary position-fixed bottom-0 start-0 m-3';
toggleButton.style.zIndex = '1000';
toggleButton.title = 'Toggle Dark Mode';
document.body.appendChild(toggleButton);

// Check for saved theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleButton.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    toggleButton.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Dark theme styles
const style = document.createElement('style');
style.textContent = `
.dark-theme {
    background: linear-gradient(135deg, #2c3e50, #34495e);
    color: #ecf0f1;
}
.dark-theme .hero, .dark-theme .card, .dark-theme .table, .dark-theme .navbar {
    background: rgba(0, 0, 0, 0.3);
    color: #ecf0f1;
}
.dark-theme .navbar-brand, .dark-theme .nav-link {
    color: #ecf0f1 !important;
}
.dark-theme footer {
    background: rgba(0, 0, 0, 0.8);
}
`;
document.head.appendChild(style);