document.querySelectorAll('.submenu > a').forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        const subMenu = menu.nextElementSibling;
        subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
    });
});
