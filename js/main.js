
loadItems()
.then(items => {
    const elements = items.map(createElement);
    const container = document.querySelector('.items');
    container.append(...elements);
    const buttons = document.querySelector('.buttons');
    buttons.addEventListener('click', event => onButtonClick(event, elements));
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", ()=>{
        elements.forEach(el => el.classList.remove("invisible"))
    });
});

function loadItems() {
    return fetch('data/data.json')
        .then(response => response.json())
        .then(json => json.items);
    }

function createElement(item) {
    const img = document.createElement('img');
    img.setAttribute('class', 'item_thumbnail');
    img.setAttribute('src', item.image);

    const span = document.createElement('span');
    span.setAttribute('class', 'item_description');
    span.innerText = `${item.gender}, ${item.size} size`;
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-type', item.type);
    li.setAttribute('data-color', item.color);
    li.append(img);
    li.append(span);
    return li;
}

function onButtonClick(event, items) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    if (key == null || value == null) {
        return;
    }
    updateItems(items, key, value);
}

function updateItems(items, key, value) {
    items.forEach(item => {
        if (item.dataset[key] === value) {
        item.classList.remove('invisible');
        } else {
        item.classList.add('invisible');
        }
    });
}