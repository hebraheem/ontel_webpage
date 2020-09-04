let menuList = document.querySelector('.menu');
let btnToggle = document.querySelector('.menuBtn');
    btnToggle.addEventListener('click', dropdownMenu);

function dropdownMenu(){
    menuList.classList.toggle('menuItem')
}