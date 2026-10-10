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
// sort
  sortHotels.addEventListener("change", function () {
    let sortedHotels = [...Hotels];
    if (this.value === "recommended") {
      sortedHotels = [...Hotels];
    }

    if (this.value === "low") {
      sortedHotels.sort((a, b) => a.price - b.price);
    }

    if (this.value === "high") {
      sortedHotels.sort((a, b) => b.price - a.price);
    }

    if (this.value === "rating") {
      sortedHotels.sort((a, b) => b.rating - a.rating);
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
//   clear
  clearFilters.addEventListener("click", function () {
    priceRange.value = 500;
    document
      .querySelectorAll('.filter-group input[type="checkbox"]')
      .forEach((input) => {
        input.checked = false;
      });
    sortHotels.value = "recommended";
    currentPage = 1;
    
// clear localstorage

    localStorage.removeItem("destination");
    localStorage.removeItem("searchResults");
    
    filteredDestinations = [...Hotels];
    getHotelsForPage();
  });
// pagenation
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
        getHotelsForPage();
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
        getHotelsForPage();
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
        getHotelsForPage();
      }
    });
    pagination.appendChild(nextButton);
  }
  
  const searchedDestanition = localStorage.getItem("destination");
  const saveResults = JSON.parse(localStorage.getItem("searchResults"));
  if (saveResults && saveResults.length > 0) {
    filteredDestinations = saveResults;
  }else if(searchedDestanition){
    const searchTerm = searchedDestanition.toLocaleLowerCase().trim();
    filteredDestinations = Hotels.filter(hotel =>
        hotel.city.toLocaleLowerCase().includes(searchTerm) ||
        hotel.name.toLocaleLowerCase().includes(searchTerm) ||
        hotel.location.toLocaleLowerCase().includes(searchTerm)
    );
        if(filteredDestinations.length === 0){
            filteredDestinations = [...Hotels];
        }
    }
  
   else {
    filteredDestinations = [...Hotels];
  }
  currentPage = 1;
  getHotelsForPage();
})();
