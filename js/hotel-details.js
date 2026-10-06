
// Get hotel id from URL
const params = new URLSearchParams(window.location.search);
let hotelId = Number(params.get("id"));

if(!hotelId || isNaN(hotelId)){
    hotelId= 1;
}
// Find selected hotel
const selectedHotel = Hotels.find(hotel => hotel.id === hotelId);

if (!selectedHotel) {
    console.log("Hotel not found");
} else {

    // =========================
    // Hotel Images
    // =========================

    document.getElementById("mainHotelImage").src = selectedHotel.image;

    document.getElementById("galleryImage1").src = selectedHotel.image;

    document.getElementById("galleryImage2").src =selectedHotel.image;

    document.getElementById("galleryImage3").src =selectedHotel.image;


    // =========================
    // Hotel Information
    // =========================

    document.getElementById("hotelName").textContent =
        selectedHotel.name;

    document.getElementById("hotelLocation").textContent =
        selectedHotel.city;

    document.getElementById("hotelDistance").textContent =
        selectedHotel.location;

    document.getElementById("hotelDescription").textContent =
        selectedHotel.description;

    document.getElementById("hotelPrice").textContent =
        selectedHotel.price;


    // =========================
    // Rating & Stars
    // =========================

    const ratingContainer =
        document.getElementById("hotelRating");

    ratingContainer.innerHTML = "";

    for (let i = 1; i <= selectedHotel.stars; i++) {
        ratingContainer.innerHTML += 
          `  <i class="bi bi-star-fill"
               style="color: var(--warning);"></i>
               `
        ;
    }

    ratingContainer.innerHTML += `
        <span>
            ${selectedHotel.rating}
            (${selectedHotel.reviews} Reviews)
        </span>`
    ;


    // =========================
    // Amenities
    // =========================

    const amenitiesContainer =
        document.getElementById("amenitiesContainer");

    amenitiesContainer.innerHTML = "";

    selectedHotel.amenities.forEach(amenity => {

        let icon = "bi-check-circle";

        if (amenity === "Wi-Fi") {
            icon = "bi-wifi";
        }

        if (amenity === "Breakfast") {
            icon = "bi-cup-hot";
        }

        if (amenity === "Parking") {
            icon = "bi-car-front";
        }

        if (amenity === "Pool") {
            icon = "bi-water";
        }

        amenitiesContainer.innerHTML += `
            <div class="amenity">
                <i class="bi ${icon}"
                   style="color: #694404;"></i>
                <span>${amenity}</span>
            </div>
       ` ;
    });


    // =========================
    // Premium Button
    // =========================

    const premiumBtn =
        document.getElementById("premiumBtn");

    if (selectedHotel.stars >= 5) {
        premiumBtn.style.display = "inline-block";
    } else {
        premiumBtn.style.display = "none";
    }
    const sampleRooms = [
        {
            name: "Deluxe Room",
            price: 120 ,
            guests: 2,
            bed: "1 King Bed",
            desc: "Spacious room with city view.",
            img: "images/room.jpg"  
        },
        {
            name: "Executive Room",
            price: 160 ,
            guests: 2,
            bed: "1 King Bed",
            desc: "Larger room with lounge area.",
            img: "images/room1.jpg"  
        },
        {
            name: "Suite Room",
            price: 220 ,
            guests: 2,
            bed: "1 King Bed",
            desc: "Luxury suite with separte living room.",
            img: "images/room2.jpg"  
        }
    ];

    sampleRooms.forEach(room =>{
        roomsContainer.innerHTML += `
        <div class = "col-lg-4 col-md-6">
           <div class = "cart-room">
              <img src = "${room.img}" class = "img-fluid" alt = "${room.name}">
              <h3>${room.name}</h3>
              <div class = "room-info d-flex align-items-center gap-3">
                 <span><i class = "bi bi-person"></i>${room.guests} Guests</span>
                 <span><i class = "bi bi-car-front"></i>${room.bed}</span>
              </div>
              <p>${room.desc}</p>
              <div class = "room-info d-flex align-items-center gap-2">
                <span style = "font-weight: bold;">$${room.price}</span><span>/night</span>
                <button class = "selectBtn" id = "selectBtn">Select Room</button>
              </div>
           </div>
        </div>
        `;
    });
    const reviews = [
        {
            name: "Fazila Ahmadi",
            date: "May 10, 2024",
            rating: 5,
            Text: "Amazing stay! The staff was very friendly and the rooms were clean and comfortable. Highly recommended.",
            initials: "AA",
            color: "linear-gradient(135deg, #2563eb, #7c3aed)"
        },
         {
            name: "Ali Ahmadi",
            date: "April 15, 2024",
            rating: 4,
            Text: "Great location and very clean. The breakfast was delicious. Will definitely come back again.",
            initials: "AA",
            color: "linear-gradient(135deg, #059669, #10b981)"
        },
         {
            name: "Shayan Ahmadi",
            date: "March 10, 2024",
            rating: 5,
            Text: "Perfect service and beautiful view. The staff went above and beyond to make our stay special.",
            initials: "SA",
            color: "linear-gradient(135deg, #d97706, #f59e0b)"
        },
    ];
     const reviewsContainer = document.getElementById("reviewsContainer");

     reviewsContainer.innerHTML = "";
     reviews.forEach(review =>{
        let starsHTML = "";
        for(let i = 1; i <= 5; i++){
            if(i <= review.rating){
                starsHTML += `<i class = "bi bi-star-fill" style = "color: var(--warning);"></i>`;
            }else{
                starsHTML += `<i class = "bi bi-star" style = "color: #ccc;"></i>`;
            }
        }
        reviewsContainer.innerHTML += `
        <div class = "reviews-info mb-4 p-3 border rounded">
        <div class = "d-flex align-items-center gap-3 mb-2">
        <div class = "t-avatar" style = "background: ${review.color};">
        ${review.initials}
        </div>
          <div>
             <h5>${review.name}</h5>
             <small class = "text-muted">${review.date}</small>
          </div>
        </div>
        <div class= "mb-2">
         ${starsHTML}
        </div>
        <p class = "mb-0" style = "color: #555;">"${review.Text}"</p>
        </div>
        `;
     });
}
