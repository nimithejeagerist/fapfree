document.getElementById('menu-icon').addEventListener('click', function() {
  var navLinks = document.getElementById('nav-links');
    if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

document.getElementById('color-mode').addEventListener('click', function() {
    document.documentElement.classList.toggle('light-mode');
})