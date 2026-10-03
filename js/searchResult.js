const results = JSON.parse(localStorage.getItem("searchResults")) || [];
console.log("Saved Results:",results);

const hoteLCards = document.querySelectorAll(".hotel-card");
hoteLCards.forEach(function (card) {
    const cardcity = (card.dataset.city || "").split(",")[0].trim().toLowerCase();

    const found = results.some(function (hotel) {
        const hotelcity = (hotel.city || "").split(",")[0].trim().toLowerCase();
        return hotelcity === cardcity;
    });
    console.log("Card:", cardcity, "Found:",found);

        card.style.display = found ? "" : "none";
    
       
});


