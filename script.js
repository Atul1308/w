document.addEventListener("DOMContentLoaded", () => {
    const learnMoreBtn = document.getElementById("learnMoreBtn");
    const contactForm = document.getElementById("contactForm");

    learnMoreBtn.addEventListener("click", () => {
        alert("Thank you for your interest! Here is more information about our services.");
    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        alert(`Thank you for contacting us, ${name}! We will respond to your inquiry at ${email} soon.`);
        contactForm.reset();
    });
});
