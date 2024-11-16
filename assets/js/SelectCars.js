// assets/js/SelectCars.js

// assets/js/SelectCars.js

import { cars } from './db.js';

const categorySelect = document.getElementById("categorySelect");
const carList = document.getElementById("carList");

// Función para mostrar los vehículos según la categoría seleccionada
function displayCars(category) {
    carList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos elementos

    const categoryCars = category === "todos" ? cars.todos : cars.categorias[category];
    
    categoryCars.forEach(car => {
        const li = document.createElement("li");
        li.classList.add("car-item");

        const img = document.createElement("img");
        img.src = car.image;
        img.alt = car.name;

        const text = document.createElement("span");
        text.textContent = car.name;

        li.appendChild(img);
        li.appendChild(text);
        carList.appendChild(li);
    });
}

// Evento cuando el usuario selecciona una categoría
categorySelect.addEventListener("change", (e) => {
    const selectedCategory = e.target.value;
    displayCars(selectedCategory);
});

// Mostrar los vehículos al cargar la página
displayCars("todos");
