function getMenuItemTemplate(item) {
    return /*html*/ `
        <div class="item">
            <h4>${item.dish} - ${item.price.toFixed(2)}€</h4>
            <p>Zutaten: ${item.ingredients.join(', ')}</p>
            <p>Likes: ${item.likes}</p>
            <p>Kommentare:</p>
            ${item.comments.map(comment => `
                <p class="comment">${comment.name}: "${comment.comment}"</p>
            `).join('')}
            <button>hinzufügen</button>
        </div>
    `;
}

function getMenuCategoryTemplate(category) {
    return /*html*/`
        <div class="category"></div>
            <h3>${category.category}</h3>
            ${category.items.map( item => getMenuItemTemplate(item)).join('')}
    `    
}