
// https://vscode.dev/editor/liveshare/5CAF4E8EF6954DD290E2B1FFD80740F6033E
// 1.Закрытие меню по оклику
// 2.Добавить подпункты меню таким образом, 
// чтобы при клике на любой пункт меню снизу появились 
// еще два - три подраздела

const navMenu = document.querySelector(".navMenu");
const openNavMenuBtn = document.querySelector("#openButton");
const closeNavMenuBtn = document.querySelector("#closeButton");
const navMenuItem = document.querySelectorAll(".navMenuItem");

const toggleMenu = (event) => {
    navMenu.classList.toggle("navMenuOpen");

}

openNavMenuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
});
closeNavMenuBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    toggleMenu();
});

navMenuItem.forEach((item) => {
    item.addEventListener("click", () => {
        const submenu = item.querySelector(".submenu");
        if (submenu) {
            submenu.classList.toggle("open");
        }
    });
});