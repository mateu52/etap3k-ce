const menu = document.getElementById("Menu");
const showMenuBtn = document.getElementById("ShowMenuBtn");
const hideMenuBtn = document.getElementById("CloseMenuBtn");

const showMenu = () => {
    menu.classList.add("menuOn");
}
const hideMenu = () => {
    menu.classList.remove("menuOn");
}
const toggleMenu =() => {
    menu.classList.toggle("menuOn");
}

showMenuBtn.addEventListener("click", showMenu);
hideMenuBtn.addEventListener("click", hideMenu);

//console.log(menu, showMenu);