function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Wyczyść istniejącą zawartość

    const about = document.createElement('div');
    about.classList.add('about');

    const headline = document.createElement('h1');
    headline.textContent = 'About Us';

    const paragraph = document.createElement('p');
    paragraph.textContent = 'We are a restaurant dedicated to serving the best food in town. Our chefs are renowned for their culinary expertise and passion for creating delicious dishes. Come and enjoy a wonderful dining experience with us.';

    about.appendChild(headline);
    about.appendChild(paragraph);

    content.appendChild(about);
}

export default loadAbout;
