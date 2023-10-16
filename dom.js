DOMSelectors = {
    form: document.querySelector(".form"),
    firstName: document.querySelector(".firstName"),
    ssn: document.querySelector("ssn"),
    address: document.querySelector("address"),
    credit_card: document.querySelector("credit-card"),
    object: document.querySelector("object"),
};

DOMSelectors.firstName.addEventListener("click", function () {
    DOMSelectors.firstName.innerHTML = Rylan
});
console.log(DOMSelectors.firstName)
