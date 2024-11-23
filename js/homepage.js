function toggleMenu(isOpen) {
    const navLinks = document.querySelector('.nav-links');
    const menuIcons = document.querySelector('.menu-icons');
  
    if (isOpen) {
      navLinks.classList.add('show'); // Show menu
      menuIcons.classList.add('open'); // Switch to close icon
    } else {
      navLinks.classList.remove('show'); // Hide menu
      menuIcons.classList.remove('open'); // Switch to open icon
    }
  }