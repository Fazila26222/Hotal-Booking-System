document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const hotelId = Number(params.get("id"));
    const finalHotelId = hotelId && !isNaN(hotelId) ? hotelId : 1;

   
    if (typeof Hotels === 'undefined') {
        console.error("The Hotels array is not defined. Please load the data.js file in your HTML.");
        return;
    }

    
    const selectedHotel = Hotels.find(hotel => hotel.id === finalHotelId);

    if (!selectedHotel) {
        console.error("this hotel does not exist in the Hotels array.");
        return;
    }

    console.log("Selected hotel:", selectedHotel);

  
    const hotelImageEl = document.getElementById("bookingHotelImage");
    const hotelNameEl = document.getElementById("bookingHotelName");
    const hotelStarsEl = document.getElementById("bookingHotelStars");

    if (hotelImageEl) hotelImageEl.src = selectedHotel.image;
    if (hotelNameEl) hotelNameEl.textContent = selectedHotel.name;

    if (hotelStarsEl) {
        let starsHTML = "";
        for (let i = 1; i <= 5; i++) {
            if (i <= selectedHotel.stars) {
                starsHTML +=`<i class="bi bi-star-fill" style="color: var(--warning);"></i>`;
            } else {
                starsHTML += `<i class="bi bi-star" style="color: var(--warning);"></i>`;
            }
        }
        starsHTML += `<br> Deluxe Room`;
        hotelStarsEl.innerHTML = starsHTML;
    }

   
    const nights = 3; 
    const roomPrice = selectedHotel.price;
    const taxes = 20; 
    const totalPrice = (roomPrice * nights) + taxes;

    const roomPriceEl = document.getElementById("bookingRoomPrice");
    const nightsEl = document.getElementById("bookingNights");
    const taxesEl = document.getElementById("bookingTaxes");
    const totalPriceEl = document.getElementById("bookingTotalPrice");

    if (roomPriceEl) roomPriceEl.textContent = `$${roomPrice.toFixed(2)}`;
    if (nightsEl) nightsEl.textContent = nights;
    if (taxesEl) taxesEl.textContent = `$${taxes.toFixed(2)}`;
    if (totalPriceEl) totalPriceEl.textContent = `$${totalPrice.toFixed(2)}`;

    // select hotel
    const hotelSelect = document.getElementById("hotelSelect");
    if (hotelSelect) {
        hotelSelect.innerHTML = ""; 
        Hotels.forEach(hotel => {
            const option = document.createElement("option");
            option.value = hotel.id;
            option.textContent = hotel.name;
            if (hotel.id === finalHotelId) {
                option.selected = true;
            }
            hotelSelect.appendChild(option);
        });

        hotelSelect.addEventListener("change", function () {
            window.location.href = `booking.html?id=${this.value}`;
        });
    }

    // type of room
    const roomTypeSelect = document.getElementById("roomType");
if (roomTypeSelect) {
        const roomTypes = ["Single Room", "Double Room", "Twin Room", "Deluxe Room", "King Room", "Suite"];
        roomTypeSelect.innerHTML = "";
        roomTypes.forEach(room => {
            const option = document.createElement("option");
            option.value = room;
            option.textContent = room;
            if (room === "Deluxe Room") option.selected = true;
            roomTypeSelect.appendChild(option);
        });
    }

    const minBtn = document.getElementById("min");
    const maxBtn = document.getElementById("max");
    const roomCountEl = document.getElementById("roomCount");
    let roomCount = 1;

    if (minBtn && maxBtn && roomCountEl) {
        minBtn.addEventListener("click", function () {
            if (roomCount > 1) {
                roomCount--;
                roomCountEl.textContent = roomCount;
            }
        });

        maxBtn.addEventListener("click", function () {
            if (roomCount < 10) {
                roomCount++;
                roomCountEl.textContent = roomCount;
            }
        });
    }

    
    // Confirm Booking
   
    const confirmBtn = document.getElementById("confirmBtn");
    if (confirmBtn) {
        confirmBtn.addEventListener("click", function () {
            // get form values
            const firstName = document.getElementById("firstName")?.value || "";
            const lastName = document.getElementById("lastName")?.value || "";
            const email = document.getElementById("email")?.value || "";
            const phone = document.getElementById("phone")?.value || "";
            const specialRequests = document.getElementById("specialRequests")?.value || "";
            const checkinDate = document.getElementById("checkinDate")?.value || "";
            const checkoutDate = document.getElementById("checkoutDate")?.value || "";

            
            if (!firstName || !lastName || !email || !phone) {
                alert("please fill in all required fields.");
                return;
            }

            // save localStorage
            const bookingData = {
                hotelId:selectedHotel.id,
                hotelName:selectedHotel.name,
                hotelImage: selectedHotel.image,
                hotelPrice: selectedHotel.price,
                roomType: roomTypeSelect?.value || "Deluxe Room",
                nights: nights,
                totalPrice: totalPrice,
                rooms: roomCount,
                checkinDate: checkinDate,
                checkoutDate: checkoutDate,
                guest: {
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phone: phone,
                    specialRequests: specialRequests
                }
            };

            localStorage.setItem("currentBooking", JSON.stringify(bookingData));
            console.log("Booking data saved:", bookingData);

           
            window.location.href = "confirm.html";
        });
    }

});
