   var menubar = document.querySelector('.hamburger');
    var navlinks = document.querySelector('.nav-bar ul');
    menubar.addEventListener('click', () => {
        navlinks.classList.toggle("show");
    });