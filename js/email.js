emailjs.init("c25whRwKbdE5pN6KJ");

function sendMail() {

    const name = document.getElementById("nameInput").value.trim();
    const email = document.getElementById("emailInput").value.trim();
    const subject = document.getElementById("subjectInput").value.trim();
    const message = document.getElementById("massageInput").value.trim();

    if (!name || !email || !subject || !message) {

        Swal.fire({
            icon: "warning",
            title: "Missing Information",
            text: "Please fill in all the fields."
        });

        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

        Swal.fire({
            icon: "error",
            title: "Invalid Email",
            text: "Please enter a valid email address."
        });

        return;
    }

    const button = document.querySelector(".contact-form button");

    button.disabled = true;
    button.innerHTML = "Sending...";

    const params = {

        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        reply_to: email

    };

    emailjs.send("service_8a5anin", "template_gghma2b", params)

    .then(function () {

        Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent."
        });

        document.getElementById("contactForm").reset();

    })

    .catch(function (error) {

        console.error(error);

        Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Unable to send your message."
        });

    })

    .finally(function () {

        button.disabled = false;
        button.innerHTML = "Send Message";

    });

}