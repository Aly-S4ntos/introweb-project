document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in all required fields.");
            return;
        }

        alert("Thank you for visiting Anteiku Cafe, " + name + "!");
        
        form.reset();
    });

});