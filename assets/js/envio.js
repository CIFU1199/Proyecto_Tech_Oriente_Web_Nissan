document.addEventListener('DOMContentLoaded', function () {
    // Obtener el formulario y la notificación
    const form = document.querySelector('.form-container');
    const notification = document.getElementById('notification');

    if (!form) {
        console.error("Formulario no encontrado. Asegúrate de que el elemento con la clase 'form-container' existe en el HTML.");
        return;
    }
    if (!notification) {
        console.error("Elemento de notificación no encontrado. Asegúrate de que el elemento con el id 'notification' existe en el HTML.");
        return;
    }

    // Función para simular el envío de la cita
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Obtener los valores de los campos
        const vehiclePlatePart1 = document.getElementById('vehicle-plate-part1').value;
        const vehiclePlatePart2 = document.getElementById('vehicle-plate-part2').value;
        const idNumber = document.getElementById('id-number').value;

        // Validar que ambos campos de placa estén completos
        if (vehiclePlatePart1 && vehiclePlatePart2 && idNumber) {
            console.log("Campos validados correctamente.");

            // Crear un objeto con los datos
            const cita = {
                placa: `${vehiclePlatePart1}-${vehiclePlatePart2}`,
                identificacion: idNumber,
                fecha: new Date().toLocaleString()
            };

            // Obtener citas existentes de localStorage
            const citasExistentes = JSON.parse(localStorage.getItem('citas')) || [];
            
            // Añadir la nueva cita a la lista de citas
            citasExistentes.push(cita);

            // Guardar la lista actualizada de citas en localStorage
            localStorage.setItem('citas', JSON.stringify(citasExistentes));

            // Mostrar la notificación de éxito
            notification.classList.add('show');
            console.log("Notificación mostrada.");
            
            // Ocultar la notificación después de 3 segundos
            setTimeout(function() {
                notification.classList.remove('show');
            }, 3000);

            // Limpiar el formulario después de enviarlo
            form.reset();
        } else {
            // Si los campos no están completos, no hacer nada
            alert("Por favor, completa todos los campos requeridos.");
        }
    });
});
