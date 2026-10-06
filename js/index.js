const Hotels = [
  {
    id: 1,
    name: "Kabul Serena Hotel",
    city: "Kabul ,Afghanistan",
    location: "Shahr-Now Kabul",
    image: "images/kaubl-hotel.jpg",
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
    name: "London UK",
    city: "London , UK",
    location: "Ritz London",
    image: "images/mandarin.jpg",
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
// ========== Destination  ==============
const destinationItem = document.getElementById("destinationItem");
const destinationValue = document.getElementById("destinationValue");
const destinationList = document.getElementById("destinationList");

const destinations = document.querySelectorAll("#destinationList li");
destinationItem.addEventListener("click", function () {
  destinationList.classList.toggle("show");
});

// Open Dropdown
function dropdownDestinations() {

  const uniqueCities = [];
  Hotels.forEach(function (hotel) {
    const cityName = hotel.city.split(",")[0].trim();

    if (!uniqueCities.includes(cityName)) {
      uniqueCities.push(cityName);
    }
  });

  uniqueCities.sort();
  uniqueCities.forEach(function (city) {
    const li = document.createElement("li");
    li.textContent = city;
    li.dataset.value = city;
    destinationList.appendChild(li);
  });
}
dropdownDestinations();

// Seclect country
destinationList.addEventListener("click", function (e) {
  const li = e.target.closest("li");

  if (li) {
    e.stopPropagation();
    const selectedValue = li.dataset.value || li.textContent.trim();
    destinationValue.textContent = selectedValue;

    destinationList.classList.remove("show");
  }
});

// ======= formatDate ==========

function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
// ====== Check in =========

const checkinItem = document.getElementById("checkinItem");
const checkinValue = document.getElementById("checkinValue");
const checkinInput = document.getElementById("checkinInput");

checkinItem.addEventListener("click", () => {
  checkinInput.showPicker?.();
});

checkinInput.addEventListener("change", () => {
  if (!checkinInput.value) return;
  const date = new Date(checkinInput.value);
  checkinValue.textContent = formatDate(date);

  //====== date check in befor date check out=======

  checkoutInput.min = checkinInput.value;
  if (checkoutInput.value && checkinInput.value <= checkinInput.value) {
    checkinInput.value = "";
    checkoutValue.textContent = "Select date";
  }
});

// ======= check out =========

const checkoutItem = document.getElementById("checkoutItem");
const checkoutValue = document.getElementById("checkoutValue");
const checkoutInput = document.getElementById("checkoutInput");

checkoutItem.addEventListener("click", () => {
  checkoutInput.showPicker?.();
});

checkoutInput.addEventListener("change", () => {
  if (!checkoutInput.value) return;
  const date = new Date(checkoutInput.value);
  checkoutValue.textContent = formatDate(date);
});

// ======== Guests =========
const guestsItem = document.getElementById("guestsItem");
const guestsValue = document.getElementById("guestsValue");
const guestsPanel = document.getElementById("guestsPanel");
const guestDone = document.getElementById("guestDone");

guestsItem.addEventListener("click", (e) => {
  if (e.target.closest(".guest-btn") || e.target.closest(".guests-panel"))
    return;
  e.stopPropagation();
  guestsPanel.classList.toggle("show");
});

// bouttns

let guests = {
  adults: 2,
  rooms: 1,
  children: 0,
};
const adultsCount = document.getElementById("adultsCount");
let adults = 2;
const roomsCount = document.getElementById("roomsCount");
let rooms = 1;
const childrenCount = document.getElementById("childrenCount");
let children = 0;

document.querySelectorAll(".guest-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.dataset.action;
    const type = button.dataset.type;

    // ======= Adults
    if (type === "adults") {
      if (action === "plus") {
        adults++;
      } else if (action === "minus" && adults > 1) {
        adults--;
      }
    }
    // ========= Children
    if (type === "children") {
      if (action === "plus") {
        children++;
      } else if (action === "minus" && children > 1) {
        children--;
      }
    }

    // ======= Rooms

    if (type === "rooms") {
      if (action === "plus") {
        rooms++;
      } else if (action === "minus" && rooms > 1) {
        rooms--;
      }
    }
    adultsCount.textContent = adults;
    childrenCount.textContent = children;
    roomsCount.textContent = rooms;
  });
  guestDone.addEventListener("click", () => {
    guestsValue.textContent = `${adults} Adults  
  ${children} Children  ${rooms} Rooms`;
    guestsPanel.classList.remove("show");
  });
});


// =====Search ======
const search = document.getElementById("search");

search.addEventListener("click", function () {
  const destinationValue = document.getElementById("destinationValue").textContent.trim();

  console.log("Destination value:", destinationValue);
  if (destinationValue === "where are you going?" || destinationValue === "") {
    alert("please select a destination");
    return;
  }
  const result = Hotels.filter(function (hotel) {
    const hotelCity = hotel.city.split(",")[0].trim().toLocaleLowerCase();
    const searchCity = destinationValue.toLocaleLowerCase();
    return hotelCity.includes(searchCity);
  });
  console.log("Destination:", destinationValue);
  console.log(result);

  if (result.length === 0) {
    console.log("hotel is not fount");
    return;
  }

  localStorage.setItem("searchResults", JSON.stringify(result));
  console.log("search");
  localStorage.getItem("searchResults");

  window.location.href = "search-result.html";

});

// offer book now

const bookBtns = document.querySelectorAll("#bookBtn");

bookBtns.forEach(button => {
  button.addEventListener("click", (e) => {

    const hotelCard = button.closest(".hotel-card");
    if(hotelCard){
      const hotelId = hotelCard.getAttribute("data-id");
      if(hotelId){
        window.location.href = `hotel-details.html?id=${hotelId}`;
      }
    }
    
    window.location.href = "hotel-details.html?id=1";
  });
});

