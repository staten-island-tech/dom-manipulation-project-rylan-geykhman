DOMSelectors = {
    form: document.querySelector("form"),
    firstName: document.querySelector("first-name"),
    ssn: document.querySelector("ssn"),
    address: document.querySelector("address"),
    credit_card: document.querySelector("credit-card"),
    object: document.querySelector("object"),
};

DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    DOMSelectors.object.forEach((obj)=> obj.Content = DOMSelectors.form.value = "yes");
});