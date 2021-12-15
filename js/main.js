
function loadItems(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(json => json.items)
}

loadItems()
.then(items => {
    displayItems(items);

})


function displayItems(items){
    const container = document.querySelector(".items");
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

function createHTMLString(item){
    return `<li>
                <img src="${item.image}" class="item_thumbnail" alt="${item.type}">
                <span class="item_description">${item.gender}, ${item.size}</span>
            </li>`
}