// script.js

// 1. Esperar a que el DOM esté completamente cargado
// Esto asegura que podemos acceder a todos los elementos HTML de forma segura.
document.addEventListener('DOMContentLoaded', () => {
    console.log('El DOM ha sido cargado completamente.');

    // 2. Seleccionar elementos de los botones de las cartas
    // Usamos los IDs únicos que definimos en el HTML para cada botón de carta
    const botonCard1 = document.getElementById('botonCard1');
    const botonCard2 = document.getElementById('botonCard2');
    const botonCard3 = document.getElementById('botonCard3');

    // 3. Añadir "event listeners" a cada botón de carta
    // Cuando cada botón es clickeado, se ejecuta una función específica.

    if (botonCard1) {
        botonCard1.addEventListener('click', () => {
            alert('¡Has hecho clic en "Más Información" del Servicio de Consultoría!');
            // Aquí podrías redirigir a una página de detalles del servicio,
            // mostrar un modal con más info, etc.
            console.log('Botón "Más Información" de la Card 1 clickeado.');
        });
    }

    if (botonCard2) {
        botonCard2.addEventListener('click', () => {
            alert('¡Has hecho clic en "Ver Productos" del Desarrollo de Software!');
            // Aquí podrías llevar al usuario a una sección de productos,
            // o cargar una lista de software.
            console.log('Botón "Ver Productos" de la Card 2 clickeado.');
        });
    }

    if (botonCard3) {
        botonCard3.addEventListener('click', () => {
            alert('¡Has hecho clic en "Contáctanos" del Soporte y Mantenimiento!');
            // Aquí podrías abrir un formulario de contacto,
            // o desplazarte a la sección del formulario de contacto.
            console.log('Botón "Contáctanos" de la Card 3 clickeado.');
            // Podemos usar el scroll suave que ya teníamos si movemos el formulario aquí:
            const seccion3 = document.getElementById('seccion3'); // Asumiendo que el formulario está en seccion3
            if (seccion3) {
                seccion3.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // 4. Ejemplo de interacción más avanzada: Navegación suave (Scroll suave)
    // Seleccionar todos los enlaces de navegación (esto se mantiene igual)
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el salto instantáneo

            const targetId = event.target.getAttribute('href'); // Obtener el ID del objetivo (ej. #seccion1)
            const targetSection = document.querySelector(targetId); // Seleccionar la sección

            if (targetSection) {
                // Realizar el scroll suave hasta la sección
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 5. Ejemplo: Función para cambiar el color de fondo de una sección al pasar el mouse
    // Mantenemos esta funcionalidad para demostrar interacción si quieres.
    const seccion1 = document.getElementById('seccion1');
    if (seccion1) {
        seccion1.addEventListener('mouseenter', () => {
            seccion1.style.backgroundColor = '#e0f7fa'; // Un azul claro
        });

        seccion1.addEventListener('mouseleave', () => {
            seccion1.style.backgroundColor = ''; // Volver al color original (o el definido en CSS)
        });
    }

    // 6. Manejo del formulario (si lo mantuviste en el HTML)
    // Si el formulario ya no está en el HTML (porque lo reemplazamos con cartas),
    // esta parte del código ya no sería necesaria, o se adaptaría.
    // Para este ejercicio, asumiremos que si quieres un formulario, lo pondrías en otra sección
    // o fuera del layout de las cartas.
    const miFormulario = document.getElementById('miFormulario');
    const campoNombre = document.getElementById('nombre');

    if (miFormulario && campoNombre) {
        miFormulario.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevenir el comportamiento por defecto

            const nombreUsuario = campoNombre.value;

            if (nombreUsuario) {
                alert(`Formulario enviado. ¡Hola, ${nombreUsuario}!`);
                console.log(`Nombre enviado: ${nombreUsuario}`);
                miFormulario.reset();
            } else {
                alert('Por favor, ingresa tu nombre antes de enviar el formulario.');
            }
        });
    }
}); // Fin de DOMContentLoaded