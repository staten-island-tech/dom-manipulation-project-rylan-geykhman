DOMSelectors = {
    form: document.querySelector(".form"),
    firstName: document.querySelector(".firstName"),
    h2: document.getElementById("h2"),
};

DOMSelectors.firstName.addEventListener("submit", function () {
    DOMSelectors.firstName.insertAdjacentHTML("name")
});
console.log(DOMSelectors.firstName)

//const ... = make...()
//function ...()
//remove button