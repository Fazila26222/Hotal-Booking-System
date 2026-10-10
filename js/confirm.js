document.addEventListener("DOMContentLoaded", function () {

    const bookingData = JSON.parse(localStorage.getItem("currentBooking"));

    //if bookingData is null or undefined, redirect to index.html
    if (!bookingData) {
        console.error("invalid booking data:", bookingData);
        alert("No booking information found. Please make a booking first.");
        window.location.href = "index.html";
        return;
    }

    console.log("Booking data:", bookingData);

    //random booking ID generation
    const bookingId = "#STY" + Math.floor(100000 + Math.random() * 900000);

   
    const bookingIdEl = document.getElementById("confirmBookingId");
    const hotelNameEl = document.getElementById("confirmHotelName");
    const checkinEl = document.getElementById("confirmCheckin");
    const checkoutEl = document.getElementById("confirmCheckout");
    const guestsEl = document.getElementById("confirmGuests");
    const totalPriceEl = document.getElementById("confirmTotalPrice");

    if (bookingIdEl) bookingIdEl.textContent = bookingId;
    if (hotelNameEl) hotelNameEl.textContent = bookingData.hotelName;
    if (checkinEl) checkinEl.textContent = bookingData.checkinDate || "Not specified";
    if (checkoutEl) checkoutEl.textContent = bookingData.checkoutDate || "Not specified";
    if (guestsEl) guestsEl.textContent = `${bookingData.rooms} Room(s)`;
    if (totalPriceEl) totalPriceEl.textContent = `$${bookingData.totalPrice.toFixed(2)}`;

   
    
    // download PDF functionality
    const downloadPdfBtn = document.getElementById("downloadPdfBtn");
    
    if(downloadPdfBtn) {
        downloadPdfBtn.addEventListener("click", function () {
            window.print();
        });
    }else{
        console.error("download is fild.")
    }
});
