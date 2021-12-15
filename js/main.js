
loadItems()
.then(items => {
    displayItems(items);
    setEventListener(items);
})

function loadItems(){
    return fetch('../data/data.json')
    .then(response => response.json())
    .then(json => json.items)
}

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

function setEventListener(items){
    const buttons = document.querySelector(".buttons");
    const logo = document.querySelector(".logo");

    logo.addEventListener("click", () => displayItems(items));
    buttons.addEventListener("click", event => onButtonClick(event, items));
}

function onButtonClick(event, items){
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if(key == null || value == null) return;

    displayItems(items.filter(item => item[key] === value));
}