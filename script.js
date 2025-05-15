
document.getElementById("contactForm").addEventListener("submit", function (event) {
  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const message = event.target.message.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    event.preventDefault();
  } else if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
  } else {
    alert("Message sent successfully!");
  }
});
