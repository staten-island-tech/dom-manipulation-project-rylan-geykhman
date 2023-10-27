const DOMSelectors = {
    form: document.querySelector('.form'),
    firstName: document.getElementById("firstName"),
    picture: document.getElementById("picture"),
    email: document.getElementById("email"),
    button: document.getElementById("button"),
    container: document.getElementById("container"),
    card: document.getElementById("card"),
    deletebutton:document.querySelector(".delete-button")
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
        <button type="button" class="delete-button" id="delete">Delete</button>
    </div>`);
    clear(DOMSelectors);
    remove();
};

function clear(DOMSelectors){
    DOMSelectors.firstName.value = DOMSelectors.picture.value = DOMSelectors.email.value = '';
};

function remove(){
    let buttons = document.querySelectorAll("button");
    buttons.forEach((btn)=> 
        btn.addEventListener("click", function (event) {
            event.target.parentElement.remove();
        })
    )
};