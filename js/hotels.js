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
(function () {
    const ITEMS_PER_PAGE = 4;
    let currentPage = 1;
    let filteredDestinations = []; 

    
    const hotelListContainer = document.getElementById("hotelListContainer");
    const paginationContainer = document.getElementById("paginationContainer");
    const sortSelect = document.getElementById("sortHotels");
    const applyFilterBtn = document.getElementById("applyFilterBtn");
    const tabButtons = document.querySelectorAll(".HotelBtn");
    const clearAllBtn = document.querySelector(".filter-card .heading span:last-child");

   
    function displayHotels(hotels) {
        hotelListContainer.innerHTML = "";

        if (hotels.length === 0) {
            hotelListContainer.innerHTML = `
                <div class="no-result text-center py-5">
                    <i class="bi bi-search" style="font-size: 3rem; color: #ccc;"></i>
                    <h3 class="mt-3">No hotel found</h3>
                    <p>Try changing your filters.</p>
                </div>
            `;
            return;
        }

        hotels.forEach(hotel => {
            const card = document.createElement("div");
            card.className = "hotel-card";
            card.setAttribute("data-city", hotel.city);

            card.innerHTML = `
                <div class="row g-3">
                    <!-- Image -->
                    <div class="col-lg-4 image-hotel">
                        <img src="${hotel.image}" class="img-fluid" alt="${hotel.name}">
                    </div>
                    <!-- Hotel Information -->
                    <div class="col-lg-5 hotel-info">
                        <div class="hotel-information">
                            <h3>${hotel.name}</h3>
                            <p>
                                ${'<i class="bi bi-star-fill" style="color: var(--warning);"></i>'.repeat(hotel.stars)}
                                ${'<i class="bi bi-star" style="color: var(--warning);"></i>'.repeat(5 - hotel.stars)}
                                ${hotel.rating} <span style="color: blue;">(${hotel.reviews} Reviews)</span>
                            </p>
                            <p><i class="bi bi-geo-alt-fill" style="color: #0f2d3d;"></i> ${hotel.location}</p>
                            <p>${hotel.description}</p>
                            <p class="d-flex gap-3 flex-wrap">
                                ${hotel.amenities.map(amenity => {
                                    let icon = "bi-check-circle";
                                    if (amenity === "Wi-Fi") icon = "bi-wifi";
                                    if (amenity === "Breakfast") icon = "bi-cup-hot";
                                    if (amenity === "Parking") icon = "bi-p-square";
                                    if (amenity === "Pool") icon = "bi-water";
                                    return `<span><i class="bi ${icon}" style="color: #0f2d3d;"></i> ${amenity}</span>`;
                                }).join("")}
                            </p>
                        </div>
                    </div>
                    <!-- Price -->
                    <div class="col-lg-3 hotel-price">
                        <span style="font-weight: bold;">$${hotel.price}</span>
                        <span>/night</span>
                        <h6>Taxes & fees included</h6>
                        <button class="btn viewBtn" data-id="${hotel.id}">view Details</button>
                        <button class="btn bookBtn" data-id="${hotel.id}">Book Now</button>
                    </div>
                </div>
            `;

            hotelListContainer.appendChild(card);
        });
// active viewBtn and bookBtn
        document.querySelectorAll(".viewBtn").forEach(button => {
            button.addEventListener("click", function () {
                const hotelId = this.getAttribute("data-id");
                if (hotelId) {
                    window.location.href = `hotel-details.html?id=${hotelId}`;
                }
            });
        });

        document.querySelectorAll(".bookBtn").forEach(button => {
            button.addEventListener("click", function () {
                const hotelId = this.getAttribute("data-id");
                if (hotelId) {
                    window.location.href = `booking.html?id=${hotelId}`;
                }
            });
        });
    }

    // pagenation
    function renderPagination() {
        const totalPages = Math.ceil(filteredDestinations.length / ITEMS_PER_PAGE);
        paginationContainer.innerHTML = "";

        if (totalPages <= 1) return;

        // Previous button
        const prevBtn = document.createElement("button");
        prevBtn.className = "pagination-btn";
        prevBtn.innerHTML = `<i class="bi bi-chevron-left"></i>`;
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                getHotelsForPage();
            }
        });
        paginationContainer.appendChild(prevBtn);

        
        for (let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement("button");
            pageBtn.className = "pagination-btn";
            pageBtn.textContent = i;
            if (i === currentPage) pageBtn.classList.add("active");
            pageBtn.addEventListener("click", () => {
                currentPage = i;
                getHotelsForPage();
            });
            paginationContainer.appendChild(pageBtn);
        }

        // Next button
        const nextBtn = document.createElement("button");
        nextBtn.className = "pagination-btn";
        nextBtn.innerHTML = `<i class="bi bi-chevron-right"></i>`;
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                getHotelsForPage();
            }
        });
        paginationContainer.appendChild(nextBtn);
    }

    // function pagenation

    function getHotelsForPage() {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageItems = filteredDestinations.slice(start, end);
        displayHotels(pageItems);
        renderPagination();
    }

    //  function filter

    function applyFilters() {
        let result = [...Hotels];

        // Destination
        const selectedDestinations = Array.from(document.querySelectorAll(".head input[type='checkbox']:checked"))
            .map(input => input.nextElementSibling.textContent.trim());
        
        if (selectedDestinations.length > 0 && !selectedDestinations.includes("All Destination")) {
            result = result.filter(hotel => 
                selectedDestinations.some(dest => 
                    hotel.city.toLowerCase().includes(dest.toLowerCase())
                )
            );
        }

        // Price Range
        const selectedPrice = document.querySelector(".head1 input[type='radio']:checked");
        if (selectedPrice) {
            const priceText = selectedPrice.nextElementSibling.textContent.trim();
            if (priceText.includes("$50 - $100")) {
                result = result.filter(h => h.price >= 50 && h.price <= 100);
            } else if (priceText.includes("$100 - $200")) {
result = result.filter(h => h.price > 100 && h.price <= 200);
            } else if (priceText.includes("$200 - $300")) {
                result = result.filter(h => h.price > 200 && h.price <= 300);
            } else if (priceText.includes("$300 - $400")) {
                result = result.filter(h => h.price > 300 && h.price <= 400);
            } else if (priceText.includes("$500")) {
                result = result.filter(h => h.price > 400);
            }
        }

        //Hotel Type
        const selectedTypes = Array.from(document.querySelectorAll(".head2 input[type='checkbox']:checked"))
            .map(input => input.nextElementSibling.textContent.trim());
        
        if (selectedTypes.length > 0 && !selectedTypes.includes("All Type")) {
            result = result.filter(hotel => 
                selectedTypes.some(type => 
                    hotel.type.toLowerCase().includes(type.toLowerCase())
                )
            );
        }

        // Amenities
        const selectedAmenities = Array.from(document.querySelectorAll(".head3 input[type='checkbox']:checked"))
            .map(input => input.nextElementSibling.textContent.trim());
        
        if (selectedAmenities.length > 0) {
            result = result.filter(hotel => 
                selectedAmenities.every(amenity => 
                    hotel.amenities.includes(amenity)
                )
            );
        }

        filteredDestinations = result;
        currentPage = 1;
        getHotelsForPage();
    }

// function sort

    function applySort(sortValue) {
        let sorted = [...filteredDestinations];

        if (sortValue === "price-Low") {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortValue === "price-High") {
            sorted.sort((a, b) => b.price - a.price);
        } else if (sortValue === "rating") {
            sorted.sort((a, b) => b.rating - a.rating);
        }

        filteredDestinations = sorted;
        currentPage = 1;
        getHotelsForPage();
    }
    // Apply Filter
    if (applyFilterBtn) {
        applyFilterBtn.addEventListener("click", applyFilters);
    }

    // Clear All
    if (clearAllBtn) {
        clearAllBtn.addEventListener("click", function () {
            document.querySelectorAll(".filter-card input[type='checkbox']").forEach(i => i.checked = false);
            document.querySelectorAll(".filter-card input[type='radio']").forEach(i => i.checked = false);
            filteredDestinations = [...Hotels];
            currentPage = 1;
            getHotelsForPage();
        });
    }

    // sort
    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            applySort(this.value);
        });
    }

    // button tab
    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filterValue = this.getAttribute("data-filter");
            
            // active
            tabButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            if (filterValue === "all") {
                filteredDestinations = [...Hotels];
            } else {
                filteredDestinations = Hotels.filter(hotel => 
                    hotel.city.toLowerCase().includes(filterValue.toLowerCase())
                );
            }
            currentPage = 1;
            getHotelsForPage();
        });
    });

    filteredDestinations = [...Hotels];
    currentPage = 1;
    getHotelsForPage();

})();
