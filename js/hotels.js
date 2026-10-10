
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
