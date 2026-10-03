// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent the form from opening contact.php
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const product = document.getElementById("product").value.trim();
        const message = document.getElementById("message").value.trim();

        // Check if all fields are completed
        if (name === "" || email === "" || product === "" || message === "") {

            alert("Please complete all the fields before sending your message.");
            return;

        }

        // Show success message
        alert(
            "Thank you, " +
            name +
            "! Your message has been sent successfully."
        );

        // Clear the form after submission
        contactForm.reset();

    });

}


// =========================
// PRODUCT HEART BUTTONS
// =========================

const heartButtons = document.querySelectorAll(".product-icons .fa-heart");

heartButtons.forEach(function (heart) {

    heart.addEventListener("click", function (event) {

        event.preventDefault();

        heart.classList.toggle("liked");

        if (heart.classList.contains("liked")) {

            alert("Added to favorites!");

        } else {

            alert("Removed from favorites.");

        }

    });

});


// =========================
// ORDER BUTTONS
// =========================

const orderButtons = document.querySelectorAll(".cart-btn");

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Please fill out the contact form to place your order."
        );

    });

});









