
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      /* ========================
         گرفتن مقادیر
         ======================== */
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim().toLowerCase();
      const phone = document.getElementById("contactPhone").value.trim();
      const subject = document.getElementById("contactSubject").value;
      const message = document.getElementById("contactMessage").value.trim();

      if (!name || !email || !phone || !subject || !message) {
        Swal.fire({
          icon: "warning",
          title: "Missing Fields",
          text: "Please fill in all fields.",
          confirmButtonColor: "#fa4312",
        });
        return;
      }

      /*  ایمیل */
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        Swal.fire({
          icon: "error",
          title: "Invalid Email",
          text: "Please enter a valid email address.",
          confirmButtonColor: "#fa4312",
        });
        return;
      }

      /*  تلفن */
      const phoneRegex = /^(\+93|0)?7\d{8}$/;
      if (!phoneRegex.test(phone.replace(/\s/g, ""))) {
        Swal.fire({
          icon: "error",
          title: "Invalid Phone Number",
          text: "Please enter a valid phone number (e.g., 0700000000).",
          confirmButtonColor: "#fa4312",
        });
        return;
      }

      /* ========================
         localStorage
         ======================== */
      const messages = JSON.parse(localStorage.getItem("aw_messages")) || [];

      const newMessage = {
        id: Date.now(),
        name,
        email,
        phone,
        subject,
        message,
        date: new Date().toISOString(),
        status: "unread",
      };

      messages.push(newMessage);
      localStorage.setItem("aw_messages", JSON.stringify(messages));

      /* ========================
         پیام موفقیت
         ======================== */
      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "Thank you for contacting us. We'll get back to you shortly.",
        confirmButtonText: "OK",
        confirmButtonColor: "#fa4312",
      }).then(() => {
        contactForm.reset();
      });
    });
  }

  /* ========================
     Load Contact Info from Data
     ======================== */
  const contactInfo = {
    address: "123 Hotel Street, Kabul, Afghanistan",
    phone1: "+93 774 480 184",
    phone2: "+93 791 456 567",
    email1: "info@stayora.com",
    email2: "reservation@stayora.com",
  };

  const addressEl = document.getElementById("contactAddress");
  if (addressEl) addressEl.textContent = contactInfo.address;

  const phoneEl = document.getElementById("contactPhone1");
  if (phoneEl) phoneEl.textContent = contactInfo.phone1;

  const phoneEl2 = document.getElementById("contactPhone2");
  if (phoneEl2) phoneEl2.textContent = contactInfo.phone2;

  const emailEl1 = document.getElementById("contactEmail1");
  if (emailEl1) emailEl1.textContent = contactInfo.email1;

  const emailEl2 = document.getElementById("contactEmail2");
  if (emailEl2) emailEl2.textContent = contactInfo.email2;
});