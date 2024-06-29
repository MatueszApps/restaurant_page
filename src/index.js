import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    loadHome(); // Załaduj stronę główną przy pierwszym załadowaniu

    const homeButton = document.getElementById('homeButton');
    const menuButton = document.getElementById('menuButton');
    const aboutButton = document.getElementById('aboutButton');

    homeButton.onclick = () => loadHome();
    menuButton.onclick = () => loadMenu();
    aboutButton.onclick = () => loadAbout();

});

console.log('Webpack is working!');
