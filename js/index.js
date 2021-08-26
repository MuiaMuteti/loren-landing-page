// show current year at copyright
let curr_yr = document.querySelector('.footer .year');
curr_yr.textContent = new Date().getFullYear();

// navigation bar functionality

// reference navbar elements
let menu = document.querySelector('.menu');
let menuIcon = document.querySelector('.menu-icon');
let nav = document.querySelector('.nav');

// icon paths
const showMenuIcon = "./images/menu.svg";
const closeMenuIcon = "./images/cross.svg";

// hide or show menu
// hidden by default
let showMenu = false;

menu.addEventListener('click', handleMenuClick);

function handleMenuClick() {
    showMenu = !showMenu;
    menuIcon.src = showMenu? closeMenuIcon : showMenuIcon;
    
    if (showMenu) {
        nav.classList.add('menu-open');
    } else {
        nav.classList.remove('menu-open');
    }
}

// end navigation bar functionality