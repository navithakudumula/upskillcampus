// ================================
// Multi-Client Website Script
// ================================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ================================
// Sticky Navbar Shadow
// ================================

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shadow");
    } else {
        navbar.classList.remove("shadow");
    }

});

// ================================
// Back To Top Button
// ================================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#0d6efd";
topButton.style.color = "#fff";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ================================
// Search Services
// ================================

const searchBox = document.querySelector("input[type='text']");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let value = searchBox.value.toLowerCase();

        let cards = document.querySelectorAll(".card");

        cards.forEach(card => {

            if (card.innerText.toLowerCase().includes(value)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

}

// ================================
// Card Hover Animation
// ================================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px)";

    });

});

// ================================
// Button Click Animation
// ================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.95)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 150);

    });

});

// ================================
// Welcome Message
// ================================

window.onload = function () {

    console.log("Welcome to Multi-Client Website Offering Client Services");

};

// ================================
// Contact Form Validation
// ================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been submitted successfully.");

        form.reset();

    });

}