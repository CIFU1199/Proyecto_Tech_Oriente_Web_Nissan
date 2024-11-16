// assets/js/SelectCars.js
import { cars } from './db.js';
const categorySelect = document.getElementById("categorySelect");
const carList = document.getElementById("carList");

// Verifica que los elementos existan antes de continuar
if (!categorySelect || !carList) {
    console.error("Los elementos 'categorySelect' o 'carList' no se encontraron en el DOM.");
}

// Función para mostrar los vehículos según la categoría seleccionada
function displayCars(category) {
    // Limpia la lista antes de agregar nuevos elementos
    carList.innerHTML = '';

    // Selecciona los vehículos de la categoría
    const categoryCars = category === "todos" ? cars.todos : cars.categorias[category];

    // Verifica si la categoría tiene vehículos
    if (!categoryCars || categoryCars.length === 0) {
        const noData = document.createElement("p");
        noData.textContent = "No hay vehículos disponibles en esta categoría.";
        noData.style.color = "#333";
        carList.appendChild(noData);
        return;
    }

    // Recorre y renderiza cada vehículo
    categoryCars.forEach(car => {
        const li = document.createElement("li");
        li.classList.add("car-item");

        const img = document.createElement("img");
        img.src = car.image;
        img.alt = car.name;

        // Manejador de errores de imagen
        img.onerror = () => {
            img.src = "./assets/img/default-car.jpg"; // Imagen por defecto si no se encuentra la original
        };

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