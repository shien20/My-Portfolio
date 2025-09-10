// Built using EmailJS

// Replace with your EmailJS credentials
const PUBLIC_KEY = "1SwRXRb1ph71XKYC9";      
const SERVICE_ID = "service_uddbdpd";      
const TEMPLATE_ID = "template_rxx2e0r";    

// Initialize EmailJS
(function() {
  emailjs.init(PUBLIC_KEY);
})();

// Select form
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect data from form fields
  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Send email via EmailJS
  emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert("❌ Failed to send message. Please try again later.");
    });
});
