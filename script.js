function sendMail(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let mailtoLink = `mailto:your-email@example.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    
    window.location.href = mailtoLink;
}
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    }
    });
});
    
