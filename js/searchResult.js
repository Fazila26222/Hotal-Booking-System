const results = JSON.parse(localStorage.getItem("searchResults")) || [];
console.log("Saved Results:",results);

const hotelCards = document.querySelectorAll(".hotel-card");
hotelCards.forEach(function (card) {
    const cardCity = card.dataset.city;
    const found = results.some(function (hotel) {
        const hotelCity =hotel.city.split(",")[0].trim();
        return hotelCity === cardCity;
    });
    console.log("Card:", cardCity, "Found:",found);
  
    if (found) {
        card.style.display = "";

        }else{
        card.style.display = "none";
    }
       
});