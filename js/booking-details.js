document.addEventListener("DOMContentLoaded", function () {

    const bookingDetailsContainer = document.getElementById("bookingDetailsContainer");
    const params = new URLSearchParams(window.location.search);
    const bookingIndex = Number(params.get("id"));

    
    const bookings = JSON.parse(localStorage.getItem("myBookings")) || [];

    if (!bookings[bookingIndex]) {
        bookingDetailsContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-exclamation-circle" style="font-size: 4rem; color: #dc3545;"></i>
                <h3 class="mt-3">Booking Not Found</h3>
                <p class="text-muted">The booking you are looking for does not exist.</p>
                <a href="my-booking.html" class="btn btn-primary mt-2">Back to My Bookings</a>
            </div>
        `;
        return;
    }

    const booking = bookings[bookingIndex];
    console.log("Booking details:", booking);

    bookingDetailsContainer.innerHTML = `
        <!-- ===== left ===== -->
        <div class="col-lg-8 col-md-6">
            <div class="row g-3">
                <div class="col-lg-8 col-12">
                    <div class="big-room-img">
                        <img src="${booking.hotelImage || 'images/room2.jpg'}" class="img-fluid" alt="${booking.hotelName}">

                        <!--add view gallery -->

                        <a href="gallery.html?id=${booking.hotelId || 1}" class= "gallery-btn">
                        <i class = "bi bi-images"></i>
                        View Gallery
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="row g-3">
                        <div class="col-6">
                            <div class="small-room-img">
                                <img src="${booking.hotelImage || 'images/bedroom.jpg'}" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="small-room-img">
                                <img src="images/garden1.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="small-room-img">
                                <img src="images/guestroom.jpg" class="img-fluid" alt="">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="small-room-img last-img">
                                <a href="gallery.html">
                                    <img src="images/restaurant.jpg" class="img-fluid" alt="">
                                    <span>+57 Photos</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="room-information">
                <div class="room-info-header">
                    <div>
                        <span class="room-category">${booking.roomType || "Deluxe Room"}</span>
                        <h1>${booking.roomType || "Deluxe Kind Room"}</h1>
                        <p class="room-location">
                            <i class="bi bi-geo-alt-fill"></i>
                            ${booking.hotelLocation || "Location not specified"}
                        </p>
                    </div>
                    <div class="room-rating">
                        <i class="bi bi-star-fill"></i>
                        <strong>4.9</strong>
                        <span>128 Reviews</span>
                    </div>
                </div>
                <p class="room-description">
Enjoy a comfortable and luxurious stay in our ${booking.roomType || "room"}. 
                    This spacious room features modern furniture and all the facilities you need for a relaxing stay.
                </p>
            </div>
            
            <!-- Room Features -->
            <div class="room-features">
                <h2>Room Features</h2>
                <div class="features-row">
                    <div class="features-item">
                        <div class="feature-icon"><i class="bi bi-moon-stars"></i></div>
                        <div><h4>King Bed</h4><span>Bed Type</span></div>
                    </div>
                    <div class="features-item">
                        <div class="feature-icon"><i class="bi bi-rulers"></i></div>
                        <div><h4>35 m²</h4><span>Room Size</span></div>
                    </div>
                    <div class="features-item">
                        <div class="feature-icon"><i class="bi bi-people"></i></div>
                        <div><h4>2 Guests</h4><span>Capacity</span></div>
                    </div>
                    <div class="features-item">
                        <div class="feature-icon"><i class="bi bi-droplet"></i></div>
                        <div><h4>Private</h4><span>Bathroom</span></div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- ===== right===== -->
        <div class="col-lg-4 col-md-6">
            <div class="booking-card">
                <span class="room-label">${booking.roomType || "Deluxe Room"}</span>
                <h2>${booking.hotelName}</h2>
                <div class="rating">
                    <i class="bi bi-star-fill"></i>
                    <strong>4.9</strong>
                    <span>(128 Reviews)</span>
                </div>
                <p class="location">
                    <i class="bi bi-geo-alt"></i>
                    ${booking.hotelLocation || "Location not specified"}
                </p>
                <hr>
                <div class="price">
                    <strong>$${booking.hotelPrice || 120}</strong>
                    <span>/ Night</span>
                </div>
                <div class="discount">20% OFF</div>
                
                <label>Check-in</label>
                <div class="input-box">
                    <i class="bi bi-calendar-check"></i>
                    <input type="date" value="${booking.checkinDate || ''}" readonly>
                </div>
                
                <label>Check-out</label>
                <div class="input-box">
                    <i class="bi bi-calendar-x"></i>
                    <input type="date" value="${booking.checkoutDate || ''}" readonly>
                </div>
                
                <label>Guests</label>
                <div class="input-box">
                    <i class="bi bi-people"></i>
                    <input type="text" value="${booking.rooms || 1} Room(s)" readonly>
                </div>
                
                <div class="total">
                    <span>Total</span>
                    <strong>$${booking.totalPrice ? booking.totalPrice.toFixed(2) : "0.00"}</strong>
                </div>
                
                <button class="book-now" onclick="window.location.href='my-booking.html'">
                    Back to My Bookings
                    <i class="bi bi-arrow-right"></i>
                </button>
                
                <div class="guarantee">
                    <p><i class="bi bi-check-circle"></i> Free Cancellation</p>
                    <p><i class="bi bi-shield-check"></i> Best price guarantee</p>
                </div>
            </div>
        </div>
    `;

});