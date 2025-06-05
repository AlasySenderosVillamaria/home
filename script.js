// Desplazamiento suave para los enlaces de la navbar y el botón del hero
document.addEventListener("DOMContentLoaded", function () {
  // Ajusta el offset para la navbar fija (64px o 56px en móvil)
  const getOffset = () => window.innerWidth <= 600 ? 56 : 64;

  // Selecciona todos los enlaces internos de la navbar + botón hero
  document.querySelectorAll('.navbar-links a, .hero-btn').forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          const y =
            targetElem.getBoundingClientRect().top +
            window.scrollY -
            getOffset();
          window.scrollTo({ top: y, behavior: 'smooth' });
          // Cierra el menú móvil si está abierto
          document.getElementById('menu-toggle').checked = false;
        }
      }
    });
  });
});