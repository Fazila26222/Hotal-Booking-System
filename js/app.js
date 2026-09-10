const hotelContainer = document.getElementById("hotelContainer");
const noResult = document.getElementById("noResult");


function displayhotels(hotelList) {
  hotelContainer.innerHTML = "";

  if (hotelList.length === 0) {
    hotelContainer.appendChild(noResult);
    noResult.style.display = "block";
    resultCount.textContent = "0 products found";

    return;
  }

  noResult.style.display = "none";

  hotelList.forEach(function (hotel) {
    const hotelCard = document.createElement("div");
    const discountedPrice = hotel.price - (hotel.price * hotel.discount /100);
    hotelCard.classList.add("hotel-card");


    hotelCard.innerHTML = `
        <div class= "discount">
        ${hotel.discount}% OFF
        </div>
        <img src="${hotel.image}" alt="${hotel.name}" class = "hotel-image">
        <div class = "hotel-info">
        <span class = "hotel-category">
        ${hotel.city}, ${hotel.country}
        </span>
        <h3 class ="hotel-name">
        ${hotel.name}
        </h3>
        <p class = "hotel-description">
        ${hotel.description} (${hotel.reviews}Reviews)
        </p>
        <div class="price">
        <span class="new-price">
        $${discountedPrice.toFixed(0)}
        </span>
        <span class="old-price">
        $${hotel.price}
        </span>
        </div>
        <button class="viewBtn" data-id= "${hotel.id}">View Details</button>
        </div>
        `;

         hotelContainer.appendChild(hotelCard);
  });
  document.querySelectorAll(".viewBtn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const hotelId = parseInt(this.dataset.id);
      const selectHotel = hotels.find((h) => h.id === hotelId);
      if (selectHotel) {
        localStorage.setItem("selectHotle", JSON.stringify(selectHotel));
        alert("You selected: ${selectHotel.name}");
      }
    });
   
  });
}
displayhotels(hotels);
