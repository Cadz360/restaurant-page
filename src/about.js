const showAbout = () => {
    const createEl = document.createElement.bind(document);

    const mainDiv = document.querySelector('#content');
    const aboutHeader = createEl('h1');
    aboutHeader.textContent = 'About Tapsilog Corner';
    mainDiv.appendChild(aboutHeader);

    createParagraph('<b>Tapsilog Corner</b> was founded with the goal of sharing the authentic flavors of Filipino comfort food with our community. Born out of a deep appreciation for the traditional <em>tapsilog</em> dish, we wanted to create a space where friends and families can gather to enjoy the simple yet flavorful meals that define Filipino culture. Our mission is to bring a piece of the Philippines to every plate, sharing the warmth, hospitality, and rich culinary traditions that make Filipino food so special.', 'Our Story')
    createParagraph('At <b>Tapsilog Corner</b>, we believe that Filipino food is more than just a meal—it’s an experience. From the moment you step into our restaurant, you’ll be greeted with the inviting aroma of freshly prepared dishes. We take pride in offering an authentic Filipino dining experience with every dish we serve. Whether you’re a first-time visitor or a seasoned lover of Filipino cuisine, our goal is to make you feel right at home.', 'A Taste of the Philippines')
    createParagraph('Our specialty at <b>Tapsilog Corner</b> is, of course, tapsilog—a beloved Filipino breakfast dish that has become a favorite among locals and visitors alike. This hearty combination of <em>tapa</em> (marinated meat), <em>sinangag</em> (garlic fried rice), and <em>itlog</em> (fried egg) offers a satisfying meal that’s perfect any time of day. At Tapsilog Corner, we offer several variations of this classic dish, each made with the finest ingredients and served with a side of warmth and care.', 'What We Serve')
}

function createParagraph(paragraph, header) {
    const createEl = document.createElement.bind(document);
    const mainDiv = document.querySelector('#content');
    
    if(header) {
        const paragraphHeaderEl = createEl('h3')
        paragraphHeaderEl.textContent = header
        mainDiv.appendChild(paragraphHeaderEl)
    }

    const paragraphEl = createEl('p')
    paragraphEl.innerHTML = paragraph
    mainDiv.appendChild(paragraphEl)

}

export default showAbout