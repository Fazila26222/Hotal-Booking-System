document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("bookingContainer");
  const filterButtons = document.querySelectorAll(".booking-tabs button");
  let bookings = JSON.parse(localStorage.getItem("myBookings")) || [];

  if (bookings.length === 0) {
    container.innerHTML = `<div class="empty-state text-center py-5">
                <i class="bi bi-calendar-x" style="font-size: 4rem; color: #ccc;"></i>
                <h3 class="mt-3">No Bookings Yet</h3>
                <p class="text-muted">You haven't made any reservations. Start exploring hotels!</p>
                <a href="hotels.html" class="btn btn-primary mt-2">
                    <i class="bi bi-search"></i> Explore Hotels
                </a>
            </div>
            `;
    return;
  }

  function displayBookings(bookingsToShow) {
    container.innerHTML = "";

    if (bookingsToShow.length === 0) {
      container.innerHTML = `
                <div class="empty-state text-center py-5">
                    <i class="bi bi-inbox" style="font-size: 3rem; color: #ccc;"></i>
                    <h4 class="mt-3">No bookings in this category</h4>
                </div>
                `;
      return;
    }

    bookingsToShow.forEach((booking, index) => {
      const card = document.createElement("div");
      card.className = "col-lg-3 col-md-6 col-12 mb-4";

      const status = booking.status || "Confirmed";
      const statusIcon =
        status === "Confirmed" ? "bi-check-circle" : "bi-x-circle";
      const statusClass = status === "Confirmed" ? "confirmed" : "cancelled";

      card.innerHTML = `
             <div class = "booking-card-vertical">
        <div class="booking-card-image">
            <img src="${booking.hotelImage || "images/stayora-hotel.png"}" 
                 alt="${booking.hotelName}">
            <span class="status-badge ${statusClass}">
                <i class="bi ${statusIcon}"></i> ${status}
            </span>
        </div>
        <div class="booking-card-body">
            <h3>${booking.hotelName}</h3>
            <p class="location">
                <i class="bi bi-geo-alt"></i>
                ${booking.hotelLocation || "Location not specified"}
            </p>
            
            <div class="booking-info-grid">
                <div class="info-item">
                    <i class="bi bi-calendar-check"></i>
                    <div>
                        <span>Check-in</span>
                        <strong>${booking.checkinDate || "N/A"}</strong>
                    </div>
                </div>
                <div class="info-item">
                    <i class="bi bi-calendar-x"></i>
                    <div>
                        <span>Check-out</span>
                        <strong>${booking.checkoutDate || "N/A"}</strong>
                    </div>
                </div>
                <div class="info-item">
                    <i class="bi bi-people"></i>
                    <div>
                        <span>Guests</span>
                        <strong>${booking.guest?.firstName || "Guest"}</strong>
                    </div>
                </div>
                <div class="info-item">
                    <i class="bi bi-house"></i>
                    <div>
                        <span>Room</span>
                        <strong>${booking.roomType}</strong>
                    </div>
                </div>
            </div>
            
            <div class="booking-card-footer">
                <div>
                    <small>Total Price</small>
                    <h4>$${booking.totalPrice ? booking.totalPrice.toFixed(2) : "0.00"}</h4>
                </div>
                <div class="booking-buttons">
                    <a href="booking-details.html?id=${index}" class="details-btn">
                        View Details
                    </a>
                    <button class="cancel-btn" data-index="${index}">
                        Cancel Booking
                    </button>
                </div>
            </div>
        </div>
        </div>
   `;

      container.appendChild(card);
    });
    document.querySelectorAll(".cancel-btn").forEach((btn) => {
      btn.addEventListener("click", function () {
        const index = Number(this.getAttribute("data-index"));

        if (confirm("Are you sure you want to cancel this booking?")) {
          // deled for list
          bookings.splice(index, 1);
          localStorage.setItem("myBookings", JSON.stringify(bookings));

          location.reload();
        }
      });
    });
  }

  displayBookings(bookings);

  // active tab
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      filterButtons.forEach((b) => b.classList.remove("active"));
      this.classList.add("active");

      const filter = this.getAttribute("data-filter");

      if (filter === "all") {
        displayBookings(bookings);
      } else if (filter === "upcoming") {
        const today = new Date();
        const upcoming = bookings.filter((b) => {
          const checkin = new Date(b.checkinDate);
          return checkin >= today;
        });
        displayBookings(upcoming);
      } else if (filter === "completed") {
        // filter complet
        const today = new Date();
        const completed = bookings.filter((b) => {
          const checkout = new Date(b.checkoutDate);
          return checkout < today;
        });
        displayBookings(completed);
      } else if (filter === "cancelled") {
        // filter cancel
        const cancelled = bookings.filter((b) => b.status === "Cancelled");
        displayBookings(cancelled);
      }
    });
  });
});
