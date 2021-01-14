/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Returns element position from top of viewport
const domRect = element => {
    return Math.floor(element.getBoundingClientRect().top);
};

// Adds active class to element
const addClass = element => {
    element.classList.add('your-active-class');
};

// Removes active class to element
const removeClass = element => {
    element.classList.remove('your-active-class');
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const navBuild = () => {
    for (section of sections) {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${section.getAttribute('id')}" class="menu__link">${section.getAttribute('data-nav')}</a>`;
        navList.append(li);
    }
}

navBuild();

// Add class 'active' to section when near top of viewport

// Adds active class when near center of viewport and removes when away
const nearTop = () => {
    for (section of sections) {
        if (domRect(section) < 100 && domRect(section) >= -100) {
            addClass(section);
        } else if (domRect(section) < 200 && domRect(section) >= -200) {
            removeClass(section);
        };
    };   
};




// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


