import dish1 from './images/kebab.jpg';
import dish2 from './images/kebab2.jpg';
import dish3 from './images/kebab3.jpg';

function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Wyczyść istniejącą zawartość

    const menu = document.createElement('div');
    menu.classList.add('menu');

    const items = [
        { src: dish1, title: 'Dish 1', description: 'Description for Dish 1' },
        { src: dish2, title: 'Dish 2', description: 'Description for Dish 2' },
        { src: dish3, title: 'Dish 3', description: 'Description for Dish 3' },
    ];

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.title;

        const headline = document.createElement('h3');
        headline.textContent = item.title;

        const desc = document.createElement('p');
        desc.textContent = item.description;

        menuItem.appendChild(img);
        menuItem.appendChild(headline);
        menuItem.appendChild(desc);

        menu.appendChild(menuItem);
    });

    content.appendChild(menu);
}

export default loadMenu;
