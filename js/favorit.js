document.addEventListener("DOMContentLoaded", function(){
const container = document.getElementById("favoritContainer");

//read data from local storage
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
// null check
if (favorites.length === 0) {
    container.innerHTML = `<div class="col-12" text-center py-5>
       <i class="bi bi-heart" style="font-size: 3rem; color: #dc3545;"></i>
       <h3 class="mt-3">No favorite items found</h3>
       <p class="text-muted">You haven't added any items to your favorites yet.</p>
         <a href="index.html" class="btn btn-primary mt-3">
         <i class="bi bi-search"></i> Go to Home</a>
    </div>`;
    return;
}
// show favorit hotel
favorites.forEach(hotel => {
    const card = document.createElement("div");
    card.className = "col-lg-4 col-md-6";

    card.innerHTML = `
           <div class="favorite-card">
                <div class="favorite-image">
                    <img src="${hotel.image}" alt="${hotel.name}">
                    <button class="heart-btn remove-fav-btn" data-id="${hotel.id}">
                        <i class="bi bi-heart-fill"></i>
                    </button>
                </div>
                <div class="favorite-content">
                    <div class="d-flex justify-content-between">
                        <h3>${hotel.name}</h3>
                        <span class="rating">
                            <i class="bi bi-star-fill"></i>
                            ${hotel.rating || "4.5"}
                        </span>
                    </div>
                    <p class="location">
                        <i class="bi bi-geo-alt"></i>
                        ${hotel.location || hotel.city}
                    </p>
                    <div class="favorite-bottom">
                        <div>
                            <strong>$${hotel.price}</strong>
                            <span>/ Night</span>
                        </div>
                        <a href="hotel-details.html?id=${hotel.id}" class="view-btn">
                            View Hotel
                        </a>
                    </div>
                </div>
            </div>
       ` ;

        container.appendChild(card);
    });

    // remove favorit hotel
    document.querySelectorAll(".remove-fav-btn").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.stopPropagation();
            const hotelId = Number(this.getAttribute("data-id"));
            
            // remove list
            favoritData = favoritData.filter(h => h.id !== hotelId);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            
        
            location.reload();
        });
    }); 
});
