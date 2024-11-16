
//Submenus 
document.querySelectorAll('.submenu > a').forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        const subMenu = menu.nextElementSibling;
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    });
});


/*
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    // Cambia la diapositiva automáticamente cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount; // Incrementa el índice y reinicia si llega al final
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 5000); // 5000ms = 5 segundos
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    const updateSlide = () => {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Botones de control
    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateSlide();
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlide();
    });

    // Cambia la diapositiva automáticamente cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateSlide();
    }, 5000);
});
