// Select DOM Items
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const menuNav = document.querySelector('.menu-nav');
  const menuBranding = document.querySelector('.menu-branding');
  const navItems = document.querySelectorAll('.nav-item');

  // Set Initial state of Menu
  // We will create a variable that represents whether the overlay is opened or closed. We want it false by default.

  let showMenu = false;

  menuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    if(!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    // Loop through all the items then add the 'show' class to each one
    navItems.forEach( item => item.classList.add('show'));
    
    // Set the Menu state
    showMenu = true;
    }else {
      menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    // Loop through all the items then add the 'show' class to each one
    navItems.forEach( item => item.classList.remove('show'));
    
    // Set the Menu state
    showMenu = false;

    }
  }
