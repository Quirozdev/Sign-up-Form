const form = document.querySelector("form");

const passwordField = document.querySelector("#password");

const confirmPasswordField = document.querySelector("#confirm-password");

const errorMessage = document.querySelector("#error-message");

form.addEventListener("submit", (e) => {
    if (passwordField.value !== confirmPasswordField.value) {
        e.preventDefault();
    } else {
        alert("Account created!!!");
    }
});

[passwordField, confirmPasswordField].forEach((field) => {
    field.addEventListener("input", (e) => {
        if (passwordField.value === confirmPasswordField.value) {
            passwordField.classList.remove("error");
            confirmPasswordField.classList.remove("error");
            errorMessage.textContent = "";
        } else {
            passwordField.classList.add("error");
            confirmPasswordField.classList.add("error");
            errorMessage.textContent = "* Passwords do not match";
        }
    });
})