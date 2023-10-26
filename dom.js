const DOMSelectors = {
    form: document.querySelector('.form'),
    firstName: document.getElementById("firstName"),
    button: document.getElementById("button"),
    container: document.getElementById("container")
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    create()
});

function create() {
    const thing = {
        name: DOMSelectors.firstName.value
    };
    insert(thing)
}

function insert(thing) {
    thing.container.insertAdjacentHTML(
        "afterbegin",
        `
        <div class="card">
            <h2 class="h2">${DOMSelectors.firstName}</h2>
        </div>
        `
    );
}



//const ... = make...()
//function ...()
//remove button