
document.addEventListener("DOMContentLoaded", () => {
//  check login status
  const currentUser = getCurrentUser();
  if (!currentUser) {
    Swal.fire({
      icon: "info",
      title: "Login Required",
      text: "for payment, please log in first.",
      confirmButtonText: "Login",
      confirmButtonColor: "#fa4312",
    }).then(() => {
      window.location.href = "login.html";
    });
    return;
  }
// get element

  const payBtn       = document.getElementById("payBtn");
  const cardNumber   = document.getElementById("cardNumber");
  const cardHolder   = document.getElementById("cardHolder");
  const expiry       = document.getElementById("expiryDate");
  const cvv          = document.getElementById("cvv");
  const billing      = document.getElementById("billingAddress");
  const radios       = document.querySelectorAll('input[name="paymentMethod"]');

//  select payment

  radios.forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const index = Array.from(radios).indexOf(e.target);
      const methods = ["Card", "PayPal", "Apple Pay", "Google Pay"];
      console.log("Selected:", methods[index]);
    });
  });

//  format 
  if (cardNumber) {
    cardNumber.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "").substring(0, 16);
      val = val.replace(/(.{4})/g, "$1 ").trim();
      e.target.value = val;
    });
  }

// expiry format
  if (expiry) {
    expiry.addEventListener("input", (e) => {
      let val = e.target.value.replace(/\D/g, "").substring(0, 4);
      if (val.length >= 3) {
        val = val.substring(0, 2) + "/" + val.substring(2);
      }
      e.target.value = val;
    });
  }

  if (cvv) {
    cvv.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "").substring(0, 4);
    });
  }

// pay now

  if (payBtn) {
    payBtn.addEventListener("click", () => {
    
      const numValue = (cardNumber?.value || "").replace(/\s/g, "");
      if (!/^\d{16}$/.test(numValue)) {
        Swal.fire({
          icon: "error",
          title: "Invalid Card Number",
          text: "Card number must contain exactly 16 digits.",
          confirmButtonColor: "#fa4312",
        });
        return;
      }

      if (!cardHolder?.value.trim() || cardHolder.value.trim().length < 3) {
        Swal.fire({
          icon: "error",
          title: "Invalid Holder Name",
          text: "Please enter the card holder's full name ",
          confirmButtonColor: "#fa4312",
        });
        return;
      }

      if (!/^\d{2}\/\d{2}$/.test(expiry?.value || "")) {
        Swal.fire({
          icon: "error",
          title: "Invalid Expiry",
          text: "Please enter the expiry date in MM/YY format.",
          confirmButtonColor: "#fa4312",
        });
        return;
      }

      if (!/^\d{3,4}$/.test(cvv?.value || "")) {
        Swal.fire({
          icon: "error",
          title: "Invalid CVV",
          text: "CVV must be 3 or 4 digits.",
          confirmButtonColor: "#fa4312",
        });
        return;
      }

      /* --- loading stats--- */
      payBtn.disabled = true;
      payBtn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Processing...`;
/* API */
      setTimeout(() => {
        /* save transation*/
        const transactions = JSON.parse(localStorage.getItem("aw_transactions")) || [];
        const payment = {
          id: Date.now(),
          userId: currentUser.id,
          userName: currentUser.name,
          amount: 495,
          hotel: "Kabul Grand Hotel",
          roomType: "Deluxe Room",
          checkIn: "15 Oct 2025",
          checkOut: "18 Oct 2025",
          method: "Card",
          status: "Paid",
          date: new Date().toISOString(),
        };
        transactions.push(payment);
        localStorage.setItem("aw_transactions", JSON.stringify(transactions));

        /* success Message*/
        Swal.fire({
          icon: "success",
          title: "Payment Successful",
          text: `your booking has been confirmed successfully ${payment.id}`,
          confirmButtonText: "View My Bookings",
          confirmButtonColor: "#fa4312",
        }).then(() => {
          window.location.href = "my-booking.html";
        });
      }, 1800);
    });
  }

  /* ========================
     fill booking summary
     ======================== */
  const booking = JSON.parse(localStorage.getItem("aw_booking")) || null;
  if (booking) {
    
    const hotelEl   = document.querySelector(".description p:nth-child(1) span");
    const roomEl    = document.querySelector(".description p:nth-child(2) span");
    const checkIn   = document.querySelector(".description p:nth-child(3) span");
    const checkOut  = document.querySelector(".description p:nth-child(4) span");
    const guestsEl  = document.querySelector(".description p:nth-child(5) span");
    const totalEl   = document.querySelector(".total h6 span");

    if (hotelEl)  hotelEl.textContent  = booking.hotel    || "Kabul Grand Hotel";
    if (roomEl)   roomEl.textContent   = booking.room     || "Deluxe Room";
    if (checkIn)  checkIn.textContent  = booking.checkIn  || "15 Oct 2025";
    if (checkOut) checkOut.textContent = booking.checkOut || "18 Oct 2025";
    if (guestsEl) guestsEl.textContent = booking.guests   || "2 Adults, 1 Child";
    if (totalEl)  totalEl.textContent  = "$" + (booking.total || 495);
  }
});