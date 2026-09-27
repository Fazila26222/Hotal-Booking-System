const results = JSON.parse(localStorage.getItem("searchResults"));
const hotelCards = document.querySelectorAll(".hotel-card");
hotelCards.forEach(function (card) {
    const city = card.dataset.city;
    const found = results.some(function (hotel) {
        return hotel.city === city;
    });
    if (!found) {
        card.style.display = "none";
    }
});