document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Animation au défilement (Scroll Reveal)
    // Ajoute une classe 'visible' aux éléments quand ils entrent dans l'écran
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
            }
        });
    }, observerOptions);

    // On cible les cartes et les titres pour l'animation
    const elementsToReveal = document.querySelectorAll('.card-intro, .spec-card, h1, h2, h3');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal'); // On prépare l'élément
        observer.observe(el);
    });

    // 2. Navigation fluide (Smooth Scroll) pour les liens internes
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80, // On laisse de la place pour le menu fixe
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Effet de scroll sur le header (ombre au défilement)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
            header.style.padding = '1rem 10%'; // Le menu rétrécit un peu
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1.5rem 10%';
        }
    });

});

