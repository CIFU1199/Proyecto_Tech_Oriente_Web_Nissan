import { cars } from './db2.js';

const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Render initial cars
function renderCars() {
    track.innerHTML = '';
    const visibleCars = cars.slice(currentIndex, currentIndex + 3);
    visibleCars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.className = 'carousel-item';
        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <a href="${car.url}" target="_blank">Ver más</a>
        `;
        track.appendChild(carItem);
    });

    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + 3 >= cars.length;
}

renderCars();

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= 3;
        renderCars();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex + 3 < cars.length) {
        currentIndex += 3;
        renderCars();
    }
});
