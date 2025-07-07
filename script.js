// Simple contact form submission handler (no backend, just demo)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value.trim();
  const email = e.target.email.value.trim();
  const subject = e.target.subject.value.trim();
  const message = e.target.message.value.trim();

  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all required fields.";
    formMessage.style.color = "red";
    formMessage.classList.remove("hidden");
    return;
  }

  // Here you can add code to send data to your backend server

  formMessage.textContent =
    "Thank you, " + name + "! Your message has been received.";
  formMessage.style.color = "green";
  formMessage.classList.remove("hidden");

  // Reset form
  e.target.reset();
});
