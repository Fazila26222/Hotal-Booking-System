

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

const results = JSON.parse(localStorage.getItem("searchResults")) || [];
console.log("Saved Results:", results);

const hoteLCards = document.querySelectorAll(".hotel-card");
hoteLCards.forEach(function (card) {
  const cardcity = (card.dataset.city || "").split(",")[0].trim().toLowerCase();

  const found = results.some(function (hotel) {
    const hotelcity = (hotel.city || "").split(",")[0].trim().toLowerCase();
    return hotelcity === cardcity;
  });
  console.log("Card:", cardcity, "Found:", found);
});
// offer book now

const bookBtns = document.querySelectorAll(".bookBtn");

bookBtns.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();

      const hotelId = button.getAttribute("data-id");
      if (hotelId) {
        window.location.href = `hotel-details.html?id=${hotelId}`;
      } else {
        console.log("Hotel ID not found for this card.");
      }

        window.location.href = `hotel-details.html?id=${direcId}`;
      
  });
});

