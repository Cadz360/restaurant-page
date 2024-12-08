const showMenu = () => {
    const createEl = document.createElement.bind(document);

    const mainDiv = document.querySelector('#content')
    const mainMenuHeader = createEl('h1')
    mainMenuHeader.textContent = 'Tapsilog-icious Menu';
    mainDiv.appendChild(mainMenuHeader)
    const bowlsHeader = createEl('h2');
    bowlsHeader.textContent = 'Tapsilog Bowls (Tapsilog - Tapa, Sinangag, Itlog)'
    mainDiv.appendChild(bowlsHeader)

    const bowlsList = createEl('ul');
    mainDiv.appendChild(bowlsList)

    createDishItem('Tapa-Twist Supreme', 'Classic tapa, marinated to perfection, served with garlic rice and a fried egg. Our special touch: a spicy vinegar dip!', bowlsList)
    createDishItem('Pork-tastic Tapsilog', "Crispy pork tapa, paired with garlicky rice and a perfectly sunny-side-up egg. The ultimate pork lover's dream!",bowlsList)
    createDishItem('Beefed Up Silog', 'Savory beef tapa grilled to smoky goodness, complemented by fluffy garlic rice and a soft, runny egg.',bowlsList)
    createDishItem("Chik'n Sizzle Silog", 'Tender chicken tapa, grilled golden-brown, with a mound of fragrant garlic rice and an egg cooked your way.',bowlsList)
    createDishItem('Bacon-Tapa Fiesta', 'A mash-up of crispy bacon and traditional beef tapa, served with garlic rice and an egg. Ultimate indulgence in every bite!',bowlsList)

}

function createDishItem(itemName, itemInfo, listEl) {
    const createEl = document.createElement.bind(document);

    const itemContainerEl = createEl('li');
    const itemNameEl = createEl('h3');
    itemNameEl.textContent = itemName;
    const itemInfoEl = createEl('p');
    itemInfoEl.textContent = itemInfo;
    listEl.appendChild(itemContainerEl);
    itemContainerEl.appendChild(itemNameEl);
    itemContainerEl.appendChild(itemInfoEl);
}

export default showMenu