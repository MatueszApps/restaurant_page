import dish1 from './images/dish1.jpg';
import dish2 from './images/dish2.jpg';
import dish3 from './images/dish3.jpg';

function createMenuItem(imageSrc, title, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = title;

    const headline = document.createElement('h3');
    headline.textContent = title;

    const desc = document.createElement('p');
    desc.textContent = description;

    menuItem.appendChild(img);
    menuItem.appendChild(headline);
    menuItem.appendChild(desc);

    return menuItem;
}

function loadMenu() {
    const content = document.getElementById('content');
    content.textContent = ''; // Clear existing content

    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(createMenuItem(dish1, 'Dish 1', 'Description for Dish 1'));
    menu.appendChild(createMenuItem(dish2, 'Dish 2', 'Description for Dish 2'));
    menu.appendChild(createMenuItem(dish3, 'Dish 3', 'Description for Dish 3'));

    content.appendChild(menu);
}

export default loadMenu;
