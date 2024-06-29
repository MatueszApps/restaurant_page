import restaurantImage from './images/restaurant.jpg';



function loadHome(){
    const content = document.getElementById('content');

    const img = document.createElement('img');
    img.src = restaurantImage;
    img.alt = 'Restaurant Image';
    
    const headline = document.createElement('h2');
    headline.textContent = 'Welcome to our Kebab Restaurant';
    
    const text = document.createElement('p');
    text.textContent = 'Welcome to "Sizzling Skewers," a vibrant kebab restaurant where culinary traditions meet modern flair. Our cozy, welcoming atmosphere is perfect for family gatherings or casual outings with friends. We pride ourselves on serving a diverse menu of mouth-watering kebabs, freshly prepared with premium cuts of meat, marinated to perfection, and grilled over an open flame. Complement your meal with our selection of homemade dips, fresh salads, and warm, fluffy pita bread. At Sizzling Skewers, every dish is a celebration of rich flavors and authentic cooking techniques, ensuring a memorable dining experience every time.'

    content.appendChild(img);
    content.appendChild(headline);
    content.appendChild(text);
}

export default loadHome();