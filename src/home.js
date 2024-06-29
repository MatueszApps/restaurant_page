import restaurantImage from './images/restaurant_photo.jpg';

function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Wyczyść istniejącą zawartość

    const home = document.createElement('div');
    home.classList.add('home');

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.alt = 'Restaurant Image';

    const headline = document.createElement('h1');
    headline.textContent = 'Welcome to Our Restaurant';

    const para = document.createElement('p');
    para.textContent = 'We serve the best food in town. Come and enjoy a wonderful dining experience with us.';

    home.appendChild(img);
    home.appendChild(headline);
    home.appendChild(para);

    content.appendChild(home);
}

export default loadHome;
