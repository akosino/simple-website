const drawerToggle = document.getElementById('drawer-toggle');
const drawer = document.getElementById('genre-drawer');
const closeDrawer = document.getElementById('close-drawer');

// BUKAS
drawerToggle.addEventListener('click', () => {
    drawer.classList.add('open');
});

// SARA
closeDrawer.addEventListener('click', () => {
    drawer.classList.remove('open');
});