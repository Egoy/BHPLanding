const toggle = document.getElementById('toggle');
const navBar = document.getElementById('navbar');

document.onclick = function(e) {
    if(e.target.id !== 'sidebar' && e.target.id !== 'toggle')
    {
        toggle.classList.remove('active');
        navBar.classList.remove('active')
    }
}

toggle.addEventListener('click', (e) => {
    e.preventDefault();
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
});
navBar.addEventListener("click", () => {
    toggle.classList.toggle('active');
    navBar.classList.toggle('active');
});
