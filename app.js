const themeToggleButton = document.getElementById('theme-toggle');

const hamburgerMenu = document.getElementById('hamburger-menu');

const navbarList = document.getElementById('navbar-list');


// themeToggleButton.addEventListener('click', () => {

//     document.body.classList.toggle('dark-mode');

//     const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';

//     localStorage.setItem('theme', currentMode);

// });


// Dropdown toggle for mobile

const dropdowns = document.querySelectorAll('.dropdown > a');

dropdowns.forEach(dropdown => {

    dropdown.addEventListener('click', (event) => {

        event.preventDefault(); // Prevent default link behavior

        const parentDropdown = dropdown.parentElement;

        parentDropdown.classList.toggle('active'); // Toggle active class for dropdown

    });

});


// Check localStorage for theme preference on page load

window.onload = () => {

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {

        document.body.classList.add('dark-mode');

    }

};


// Hamburger menu toggle

hamburgerMenu.addEventListener('click', () => {

    navbarList.classList.toggle('active');

});





