/* ============================================================
   UTOPIA POLICE DEPARTMENT — utopiatx.org
   Minimal traditional government site scripts
   ============================================================ */
(function () {
    'use strict';

    // Mobile menu toggle
    var menuBtn = document.getElementById('mobile-menu-btn');
    var navList = document.getElementById('nav-list');

    if (menuBtn && navList) {
        menuBtn.addEventListener('click', function () {
            navList.classList.toggle('open');
            var expanded = navList.classList.contains('open');
            menuBtn.setAttribute('aria-expanded', expanded);
            menuBtn.textContent = expanded ? '\u2715' : '\u2630';
        });
    }

    // Active nav link highlight
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(function (link) {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Footer year
    var yearEl = document.getElementById('footer-year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
})();
