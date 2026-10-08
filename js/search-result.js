(function () {
  const ITEMS_PER_PAGE = 3;
  let currentPage = 1;
  let filteredDestinations = [];

  const hotelResults = document.getElementById("hotelResults");
  const resultCount = document.getElementById("resultCount");
  const pagination = document.getElementById("destination-pagination");
  const sortHotels = document.getElementById("sortHotels");
  const priceRange = document.getElementById("priceRange");
  const clearFilters = document.getElementById("clearFilters");
  const applyFilters = document.querySelector(".apply-filter");

  const Hotels = [
    {
      id: 1,
      name: "Kabul Serena Hotel",
      city: "Kabul ,Afghanistan",
      location: "Shahr-Now Kabul",
      image: "images/kaubl-hotel.jpg",
      images: [
        "images/Kaubl-hotel.jpg",
        "images/room.jpg",
        "images/living1.jpg",
        "images/bathroom4.jpg",
      ],
      description:
        "Experience a comfortable and relaxing stay at Kabul Serena Hotel, offering modern rooms, excellent service, and convenient access to the city's popular attractions.",
      stars: 5,
      rating: 8.9,
      reviews: 452,
      price: 120,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 2,
      name: "Intercontinental Kabul",
      city: "Kabul ,Afghanistan",
      location: "Wazir Akbar Khan Kabul",
      image: "images/Burj Al Arab.jpg",
      images: [
        "images/Burj Al Arab.jpg",
        "images/room5.jpg",
        "images/rooms.jpg",
        "images/bathroom3.jpg",
      ],
      description:
        "A world-class hotel with elegant rooms, fine dining and beautiful views of the city and mountains.",
      stars: 5,
      rating: 8.7,
      reviews: 318,
      price: 150,
      discount: "",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 3,
      name: "Kabul Grand Hotel",
      city: "Kabul ,Afghanistan",
      location: "Dehmazand Kabul",
      image: "images/ciragan palace .jpg",
      images: [
        "images/ciragan palace .jpg",
        "images/room8.jpg",
        "images/San.jpg",
        "images/restaurant.jpg",
      ],
      description:
        "A comfortable stay with modern facilities, great service and a peaceful atmosphere.",
      stars: 4,
      rating: 8.3,
      reviews: 261,
      price: 95,
      discount: "15% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 4,
      name: "Park Hotel Kabul",
      city: "Kabul ,Afghanistan",
      location: "Taimani Kabul",
      image: "images/le meurice.jpg",
      images: [
        "images/le meurice.jpg",
        "images/room6.jpg",
        "images/room.jpg",
        "images/room10.jpg",
      ],
      description:
        "Modern rooms, friendly staff and a convenient location make Park Hotel a great choice for your stay.",
      stars: 4,
      rating: 8.1,
      reviews: 189,
      price: 80,
      discount: "",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 5,
      name: "Dubai UAE",
      city: "Dubai ,UAE",
      location: "Burj Al Arab",
      image: "images/hassler roma.jpg",
      images: [
        "images/hassler roma.jpg",
        "images/room9.jpg",
        "images/room12.jpg",
        "images/Yala.jpg",
      ],
      description: "The iconic 7-star sail-shaped hotel.",
      stars: 4,
      rating: 8.9,
      reviews: 400,
      price: 130,
      discount: "10% OFF",
      type: "Resort",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 6,
      name: "Dubai UAE",
      city: "Dubai ,UAE",
      location: "Atlantis The Palm",
      image: "images/savoy.jpg",
      images: [
        "images/savoy.jpg",
        "images/wive.jpg",
        "images/room4.jpg",
        "images/room6.jpg",
      ],
      description: "A massive luxury resort on the Palm Jumeirah.",
      stars: 4,
      rating: 8.3,
      reviews: 350,
      price: 120,
      discount: "",
      type: "Resort",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 7,
      name: "New York USA",
      city: "Plaza ,New York USA",
      location: "Plaza Hotel",
      image: "images/plaza.jpg",
      images: [
        "images/plaza.jpg",
        "images/room13.jpg",
        "images/rooms.jpg",
        "images/savoy.jpg",
      ],
      description: "A historic luxury hotel right next to Central Park.",
      stars: 4,
      rating: 8.8,
      reviews: 452,
      price: 150,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 8,
      name: "Singapore",
      city: "Marina , Singapor",
      location: "Marina Bay Sands",
      image: "images/park hyatt tokyo.jpg",
      images: [
        "images/park hyatt tokyo.jpg",
        "images/room11.jpg",
        "images/Riyadh.jpg",
        "images/room9.jpg",
      ],
      description: "Famous for its rooftop infinity pool and skyline views.",
      stars: 4,
      rating: 8.9,
      reviews: 222,
      price: 100,
      discount: "",
      type: "Resort",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },
    {
      id: 9,
      name: "The Savoy",
      city: "London , UK",
      location: "Strand London",
      image: "images/mandarin.jpg",
      images: [
        "images/mandarin.jpg",
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ],
      description: "One of the world's most famous and luxurious hotels.",
      stars: 4,
      rating: 8.9,
      reviews: 420,
      price: 200,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 10,
      name: "London UK",
      city: "London , UK",
      location: "Brown's Hotel",
      image: "images/majestic.jpg",
      images: [
        "images/majestic.jpg",
        "images/room3.jpg",
        "images/room4.jpg",
        "images/bathroaom1.jpg",
      ],
      description: "A classic historic luxury hotel in Mayfair.",
      stars: 5,
      rating: 8.9,
      reviews: 452,
      price: 500,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 11,
      name: "Paris France",
      city: "Paris ,France",
      location: "Four Seasons Hotel George V",
      image: "images/park hyatt sydney.jpg",
      images: [
        "images/park hyatt sydney.jpg",
        "images/room5.jpg",
        "images/room6.jpg",
        "images/bathroom3.jpg",
      ],
      description:
        "A palace-level hotel known for its Michelin-starred dining.",
      stars: 4,
      rating: 8.9,
      reviews: 452,
      price: 220,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 12,
      name: "Paris France",
      city: "Paris ,France",
      location: "Ritz Paris",
      image: "images/baur au lac.jpg",
      images: [
        "images/baur au lac.jpg",
        "images/room7.jpg",
        "images/room8.jpg",
        "images/bathroom4.jpg",
      ],
      description: "Legendary luxury on Place Vendome.",
      stars: 8,
      rating: 8.9,
      reviews: 452,
      price: 190,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 13,
      name: "Marrakech Morocco",
      city: "Us ,America",
      location: "La Mamounia",
      image: "images/majestic.jpg",
      images: [
        "images/majestic.jpg",
        "images/room9.jpg",
        "images/room10.jpg",
        "images/bedroom.jpg",
      ],
      description:
        "A legendary hotel blending Moorish architecture with modern luxury.",
      stars: 8,
      rating: 8.9,
      reviews: 452,
      price: 300,
      discount: "20% OFF",
      type: "Resort",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 14,
      name: "Hong Kong",
      city: "Toronto , Canada",
      location: "Peninsula Hong Kong",
      image: "images/hall.jpg",
      images: [
        "images/hall.jpg",
        "images/room12.jpg",
        "images/room13.jpg",
        "images/lobby.jpg",
      ],
      description: "The Grande Dame of Hong Kong hotels with harbour views.",
      stars: 7,
      rating: 8.5,
      reviews: 200,
      price: 150,
      discount: "",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 15,
      name: "Hong Kong",
      city: "Toronto , Canada",
      location: "Mandarin Oriental",
      image: "images/hamburg1.jpg",
      images: [
        "images/hamburg1.jpg",
        "images/room14.jpg",
        "images/Swimming pool.jpg",
        "images/spa.jpg",
      ],
      description:
        "A luxurious hotel famous for its exceptional service and views.",
      stars: 4,
      rating: 7.5,
      reviews: 190,
      price: 120,
      discount: "",
      type: "Apartment",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 16,
      name: "Tokyo Japan",
      city: "Tokyo ,Japan",
      location: "The Ritz-Carlton Tokyo",
      image: "images/tukya.jpg",
      images: [
        "images/tukya.jpg",
        "images/room15.jpg",
        "images/reception.jpg",
        "images/parking.jpg",
      ],
      description:
        "Located in the tallest building in Tokyo with stunning city views.",
      stars: 7,
      rating: 8.9,
      reviews: 452,
      price: 300,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Parking", "Pool"],
    },

    {
      id: 17,
      name: "Tokyo Japan",
      city: "Tokyo ,Japan",
      location: "Aman Tokyo",
      image: "images/hassler roma.jpg",
      images: [
        "images/hassler roma.jpg",
        "images/Punta.jpg",
        "images/receptions.jpg",
        "images/Park palace .jpg",
      ],
      description:
        "A minimalist, serene luxury hotel in the heart of the city.",
      stars: 3,
      rating: 8.7,
      reviews: 462,
      price: 400,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 18,
      name: "Venice Italy",
      city: "Sydeny , Australia",
      location: "Hotel Danieli",
      image: "images/stayora-hotel.png",
      images: [
        "images/Park palace .jpg",
        "images/Luxury room.jpeg",
        "images/Lima.png",
        "images/rooms.jpg",
      ],
      description: "A historic, palatial hotel overlooking the Grand Canal.",
      stars: 4,
      rating: 8.3,
      reviews: 362,
      price: 230,
      discount: "20% OFF",
      type: "Apartment",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },

    {
      id: 19,
      name: "Venice Italy",
      city: "Sydeny , Australia",
      location: "Belmond Hotel Cipriani",
      image: "images/Serena.jpg",
      images: [
        "images/plaza.jpg",
        "images/Riyadh.jpg",
        "images/pool1.jpg",
        "images/room4.jpg",
      ],
      description: "A luxurious resort on Giudecca Island with a famous pool.",
      stars: 4,
      rating: 8.5,
      reviews: 369,
      price: 330,
      discount: "20% OFF",
      type: "Resort",
      amenities: ["Wi-Fi", "Breakfast", "Pool"],
    },

    {
      id: 20,
      name: "Bangkok Thailand",
      city: "Us ,America",
      location: "Peninsula Bangkok",
      image: "images/dining area.jpg",
      images: [
        "images/US.jpg",
        "images/iving room.jpg",
        "images/gym.jpg",
        "images/guestroom.jpg",
      ],
      description: "A riverside luxury hotel with incredible service.",
      stars: 3,
      rating: 8.8,
      reviews: 469,
      price: 430,
      discount: "20% OFF",
      type: "Hotel",
      amenities: ["Wi-Fi", "Breakfast", "Parking", "Pool"],
    },
  ];

  function displayHotels(Hotels) {
    hotelResults.innerHTML = "";

    resultCount.textContent = Hotels.length;
    if (Hotels.length === 0) {
      hotelResults.innerHTML = `
            <div class = "no-result">
            <i class = "bi bi-search"></i>
            <h3>No hotel found</h3>
            <p>Try changing your filters.</p>
            </div>
            `;
      return;
    }

    // create hotel card

    Hotels.forEach((hotel) => {
      const card = document.createElement("div");
      card.className = "hotel-card";

      card.innerHTML = `
          <div class = "hotel-image">
<!-- Image -->
          <img src="${hotel.image}" alt = "${hotel.name}">
          ${
            hotel.discount
              ? `<span class = "discount">
            ${hotel.discount}
            </span>`
              : ""
          }

            <button class = "favorite-btn">
            <i class = "bi bi-heart"></i>
            </button>
          </div>
          
<!-- Content -->

     <div class = "hotel-content">
    <div> 
       <h3>${hotel.name}</h3>
    <div class = "location">
       <i class = "bi bi-geo-alt"></i>
       ${hotel.location}
    </div>
    <div class = "description">
       ${hotel.description}
    </div>
    <div class = "hotel-rating">
       <span>${"★".repeat(hotel.stars)}</span>
       <strong>
          ${hotel.rating}
        </strong>
        <small>
           ${hotel.reviews} Reviews
        </small>
        <small>
           Excellent
        </small>
         <small>
           ${hotel.type}
        </small>
    </div>
    <div class="amenities">
      ${
        hotel.amenities
          ? hotel.amenities
              .map(
                (item) => `
    <span>
        <i class = "bi ${
          item.toLowerCase() === "wi-fi"
            ? "bi-wifi"
            : item.toLowerCase() === "breakfast"
              ? "bi-cup-hot"
              : item.toLowerCase() === "parking"
                ? "bi-p-square"
                : item.toLowerCase() === "pool"
                  ? "bi-water"
                  : "bi-check-circle"
        }"></i>
        ${item}
    </span> `,
              )
              .join("")
          : ""
      }

 </div>
 </div>

<!-- Price -->

 
   <div class="hotel-bottom">
   <div class="price">
     <strong>
       $${hotel.price}
    </strong>
    <span>
      / night
    </span>
    </div>
    <a href="hotel-details.html?id=${hotel.id}" class="view-btn">
       View Details
    </a>
  </div>
  </div>
        `;
      hotelResults.appendChild(card);
    });
  }

  displayHotels(Hotels);

  sortHotels.addEventListener("change", function () {
    let sortedHotels = [...Hotels];
    if (this.value === "recommended") {
      sortedHotels = [...Hotels];
    }

    if (this.value === "low") {
      sortHotels.sort((a, b) => a.price - b.price);
    }

    if (this.value === "high") {
      sortHotels.sort((a, b) => b.price - a.price);
    }

    if (this.value === "rating") {
      sortHotels.sort((a, b) => b.rating - a.rating);
    }

    filteredDestinations = sortedHotels;
    currentPage = 1;
    getHotelsForPage();
  });

  applyFilters.addEventListener("click", function () {
    let filterdeHotels = [...Hotels];

    const maxPrice = Number(priceRange.value);
    filterdeHotels = filterdeHotels.filter((hotel) => hotel.price <= maxPrice);
    const selectedStars = [
      ...document.querySelectorAll('.filter-group input[type="checkbox"]'),
    ]
      .filter(
        (input) =>
          input.checked && ["3", "4", "5", "7", "8"].includes(input.value),
      )
      .map((input) => Number(input.value));

    if (selectedStars.length > 0) {
      filterdeHotels = filterdeHotels.filter((hotel) =>
        selectedStars.includes(Number(hotel.stars)),
      );
    }

    //    type
    const selectedTypes = [
      ...document.querySelectorAll('.filter-group input[type="checkbox"]'),
    ]
      .filter(
        (input) =>
          input.checked &&
          ["Hotel", "Resort", "Apartment"].includes(input.value),
      )
      .map((input) => input.value);

    if (selectedTypes.length > 0) {
      filterdeHotels = filterdeHotels.filter((hotel) =>
        selectedTypes.includes(hotel.type),
      );
    }

    //  amenities
    const selectedAmenities = [
      ...document.querySelectorAll('.filter-group input[type="checkbox"]'),
    ]
      .filter(
        (input) =>
          input.checked &&
          !["3", "4", "5", "7", "8", "Hotel", "Resort", "Apartment"].includes(
            input.value,
          ),
      )
      .map((input) => input.value);

    if (selectedAmenities.length > 0) {
      filterdeHotels = filterdeHotels.filter((hotel) => {
        if (!hotel.amenities) {
          return false;
        }
        return selectedAmenities.every((amenity) =>
          hotel.amenities.includes(amenity),
        );
      });
    }
    filteredDestinations = filterdeHotels;
    currentPage = 1;
    getHotelsForPage();
  });
  clearFilters.addEventListener("click", function () {
    priceRange.value = 500;
    document
      .querySelectorAll('.filter-group input[type="checkbox"]')
      .forEach((input) => {
        input.checked = false;
      });
    sortHotels.value = "recommended";
    currentPage = 1;
    filteredDestinations = [...Hotels];
    getHotelsForPage();
  });

  function getHotelsForPage() {
    const grid = hotelResults;
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const pageItems = filteredDestinations.slice(start, end);
    displayHotels(pageItems);
    renderPagination();
  }
  function renderPagination() {
    const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
    pagination.innerHTML = "";
    if (totalPages <= 1) {
      return;
    }
    const previousButton = document.createElement("button");
    previousButton.className = "pagination-btn";
    previousButton.innerHTML = `
            <i class="bi bi-chevron-left"></i>
        `;
    previousButton.disabled = currentPage === 1;
    previousButton.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        getHotelsForPage(Hotels);
      }
    });
    pagination.appendChild(previousButton);

    for (let page = 1; page <= totalPages; page++) {
      const button = document.createElement("button");
      button.className = "pagination-btn";
      button.textContent = page;
      if (page === currentPage) {
        button.classList.add("active");
      }
      button.addEventListener("click", () => {
        currentPage = page;
        getHotelsForPage(Hotels);
      });
      pagination.appendChild(button);
    }
    const nextButton = document.createElement("button");

    nextButton.className = "pagination-btn";
    nextButton.innerHTML = `
             <i class="bi bi-chevron-right"></i>
        `;

    nextButton.disabled = currentPage === totalPages;

    nextButton.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        getHotelsForPage(Hotels);
      }
    });
    pagination.appendChild(nextButton);
  }

  const saveResults = JSON.parse(localStorage.getItem("searchResults"));
  if (saveResults && saveResults.length > 0) {
    filteredDestinations = saveResults;
  } else {
    filteredDestinations = [...Hotels];
  }
  currentPage = 1;
  getHotelsForPage();
})();
