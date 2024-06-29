import loadHome from './home';
import loadMenu from './menu';
import loadAbout from './about';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    const homeButton = document.querySelector('button:nth-child(1)');
    const menuButton = document.querySelector('button:nth-child(2)');
    const aboutButton = document.querySelector('button:nth-child(3)');

    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    aboutButton.addEventListener('click', loadAbout);
});

console.log('Webpack is working!');
