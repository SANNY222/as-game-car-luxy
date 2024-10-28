// script.js

// Sélectionner le corps du document
const body = document.body;

// Créer un bouton de changement de thème
const themeToggle = document.createElement('button');
themeToggle.textContent = "Changer de thème";
themeToggle.style.position = "fixed";
themeToggle.style.bottom = "20px";
themeToggle.style.right = "20px";
themeToggle.style.padding = "10px";
themeToggle.style.cursor = "pointer";

// Ajouter le bouton au document
document.body.appendChild(themeToggle);

// Fonction pour changer le thème
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

// CSS pour le thème sombre
const darkThemeStyles = `
.dark-theme {
    background-color: #333;
    color: #fff;
}
.dark-theme header, .dark-theme footer {
    background-color: #111;
}
.dark-theme .car-item {
    background-color: #444;
}
.dark-theme nav ul li a {
    color: #ccc;
}
`;

// Ajouter les styles pour le thème sombre
const styleSheet = document.createElement("style");
styleSheet.innerText = darkThemeStyles;
document.head.appendChild(styleSheet);