const DOMSelectors = {
    form: document.querySelector('.form'),
    firstName: document.getElementById("firstName"),
    picture: document.getElementById("picture"),
    email: document.getElementById("email"),
    button: document.getElementById("button"),
    container: document.getElementById("container")
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault()
    create()
});

function create() {
    const thing = {
        names: DOMSelectors.firstName.value,
        pictures: DOMSelectors.picture.value,
        emails: DOMSelectors.email.value,
    };
    insert(thing, DOMSelectors);
}

function insert(thing, DOMSelectors) {
    DOMSelectors.container.insertAdjacentHTML("afterbegin", 
    ` <div class="card">
        <h2 class="card-title">${thing.names}</h2>
            <img src="${thing.pictures}" alt="picture" class="card-img">
        <h3 class="card-emails">${thing.emails}</h3>
    </div>`);
    clear(DOMSelectors);
};

function clear(DOMSelectors){
    DOMSelectors.name.value = DOMSelectors.picture.value = DOMSelectors.email.value = '';
};

//function pushDOM(DOMSelectors){}

//function removeObject(DOMSelectors){}