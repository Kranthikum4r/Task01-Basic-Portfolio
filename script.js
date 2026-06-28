const roles = [
    "Computer Science Undergraduate",
    "Tech Enthusiast",
    "Competitive Programmer",
    "DSA Enthusiast",
    "Aspiring ML Engineer"
];

const textElement = document.getElementById("changing-text");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        // Typing
        textElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500); // Pause after typing
            return;
        }
    }
    else {
        // Deleting
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
        }
    }

    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
}

typeEffect();

// skills


function showSkills(id, element){

    // Hide all skill groups
    document.querySelectorAll(".skills-group").forEach(group => {
        group.classList.add("hidden");
    });

    // Show selected group
    document.getElementById(id).classList.remove("hidden");

    // Remove active class from all buttons
    document.querySelectorAll(".category").forEach(button => {
        button.classList.remove("active");
    });

    // Add active class to clicked button
    element.classList.add("active");
}
