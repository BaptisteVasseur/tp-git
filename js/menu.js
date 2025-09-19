document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('#nav-menu');
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    // Configuration des seuils de détection des gestes
    const SWIPE_THRESHOLD = 50;
    const SWIPE_RATIO_THRESHOLD = 0.3;

    // Fonction pour basculer le menu
    function toggleMenu(force = null) {
        const isExpanded = burgerMenu.getAttribute('aria-expanded') === 'true';
        const newState = force !== null ? force : !isExpanded;
        
        burgerMenu.setAttribute('aria-expanded', newState);
        navMenu.classList.toggle('active', newState);
        
        // Empêcher le défilement du body quand le menu est ouvert
        document.body.style.overflow = newState ? 'hidden' : '';
    }

    // Gestionnaire de clic pour le bouton burger
    burgerMenu.addEventListener('click', () => toggleMenu());

    // Gestionnaires d'événements tactiles
    navMenu.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
    }, { passive: true });

    navMenu.addEventListener('touchmove', (e) => {
        if (!navMenu.classList.contains('active')) return;
        
        const touch = e.touches[0];
        const diffX = touchStartX - touch.clientX;
        const diffY = Math.abs(touchStartY - touch.clientY);
        
        // Si le mouvement est plus horizontal que vertical
        if (diffX > 0 && diffX > diffY) {
            e.preventDefault();
            navMenu.style.transform = `translateX(-${diffX}px)`;
        }
    }, { passive: false });

    navMenu.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        touchEndY = e.changedTouches[0].clientY;
        
        const diffX = touchStartX - touchEndX;
        const diffY = Math.abs(touchStartY - touchEndY);
        
        // Vérifier si le swipe est suffisamment horizontal
        const isHorizontalSwipe = diffX > diffY;
        
        // Vérifier si le swipe est assez long
        const isLongEnough = diffX > SWIPE_THRESHOLD;
        
        // Calculer le ratio du swipe par rapport à la largeur du menu
        const swipeRatio = diffX / navMenu.offsetWidth;
        
        if (isHorizontalSwipe && (isLongEnough || swipeRatio > SWIPE_RATIO_THRESHOLD)) {
            toggleMenu(false);
        }
        
        // Réinitialiser la transformation
        requestAnimationFrame(() => {
            navMenu.style.transform = '';
        });
    });

    // Fermer le menu lors d'un clic sur un lien
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu(false);
            }
        });
    });

    // Fermer le menu lors d'un clic en dehors
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !burgerMenu.contains(e.target)) {
            toggleMenu(false);
        }
    });

    // Gérer l'accessibilité clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            toggleMenu(false);
        }
    });
});