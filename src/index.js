import "./styles.css";
import showMenu from "./menu";

const mainDiv = document.querySelector('#content');
const buttons = document.querySelector('nav')
let currentTab = 'Home';

// Page main header
const restaurantNameDiv = document.createElement('div');
const restaurantName = document.createElement('h1')
restaurantName.textContent = 'Tapsilog Corner'
mainDiv.appendChild(restaurantNameDiv)
restaurantNameDiv.appendChild(restaurantName)

// Welcome message section
const welcomeMessageDiv = document.createElement('div');
const welcomeMessage = document.createElement('p')
mainDiv.appendChild(welcomeMessageDiv)
welcomeMessageDiv.appendChild(welcomeMessage)
welcomeMessage.textContent = "Welcome to Tapsilog Corner, where every bite brings you closer to the heart of Filipino flavors! Indulge in our authentic, mouthwatering tapsilog – a perfect combination of tender, marinated beef, savory garlic rice, and a perfectly fried egg, all served with a side of love and tradition. Whether you're a long-time tapsilog lover or new to Filipino cuisine, we promise an unforgettable taste experience in every meal. Come and discover the true essence of Filipino comfort food, only at Tapsilog Corner. Mabuhay!"

// Hours section
const restaurantHoursDiv = document.createElement('div');
const restaurantHoursHeader = document.createElement('h3');
const restaurantHours = document.createElement('p');
restaurantHoursHeader.textContent = 'Hours'
restaurantHours.textContent = 'Open 8:30 AM - 8:30 PM Tuesday to Sunday'
mainDiv.appendChild(restaurantHoursDiv)
restaurantHoursDiv.appendChild(restaurantHoursHeader)
restaurantHoursDiv.appendChild(restaurantHours)

// Location section
const restaurantLocationDiv = document.createElement('div');
const restaurantLocationHeader = document.createElement('h3')
const restaurantLocation = document.createElement('p')
restaurantLocationHeader.textContent = 'Location'
restaurantLocation.textContent = 'We will announce it soon!'
mainDiv.appendChild(restaurantLocationDiv)
restaurantLocationDiv.appendChild(restaurantLocationHeader)
restaurantLocationDiv.appendChild(restaurantLocation)

buttons.addEventListener('click', function(e) {

    if (e.target.className !== "btn") {
        return; 
    }

    if (e.target.textContent !== currentTab) {
        currentTab = e.target.textContent;
        console.log(e.target)
        console.log(currentTab)
    }

    while(mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild)
    }

    showMenu()

})