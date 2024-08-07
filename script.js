function init(){
    renderMenu();
    renderShoppingBasket();
}

function renderMenu() {
    let menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = menu.map(category => getMenuCategoryTemplate(category)).join('');
}

function renderShoppingBasket() {
    let basketContainer = document.getElementById('shoppingBasket');
    basketContainer.textContent = 'Der Einkaufswagen ist leer.';
}

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    renderShoppingBasket();
});