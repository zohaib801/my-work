let loginContainer = document.querySelector(".login-container");
let loginBtn = document.querySelector(".login-btn");
let closeLogin = document.querySelector(".close-login");
let menu = document.querySelector("#menu-icon");
let navlinks = document.querySelector(".nav-links");

loginBtn.onclick = () => {
    loginContainer.classList.add("open-login");
    navlinks.classList.remove("open-menu"); // Close the navigation menu when opening the login container
};

closeLogin.onclick = () => {
    loginContainer.classList.remove("open-login");
};

menu.onclick = () => { // Corrected event name
    menu.classList.toggle("bx-x");
    navlinks.classList.toggle("open-menu");
};




// Select the Bikes link in the navbar
let bikesLink = document.querySelector('.nav-links .nav-link:nth-child(2)');

// Select the section with the most popular bikes
let popularBikesSection = document.querySelector('.bike');

// Add event listener to the Bikes link
bikesLink.addEventListener('click', () => {
    // Scroll to the popular bikes section smoothly
    popularBikesSection.scrollIntoView({ behavior: 'smooth' });
});

