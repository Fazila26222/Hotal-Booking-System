
// ========== Destination  ==============
const destinationItem = document.getElementById("destinationItem");
const destinationValue = document.getElementById("destinationValue");
const destinationList = document.getElementById("destinationList");

const destinations = document.querySelectorAll("destinationList li");
destinationItem.addEventListener("click", function () {
  destinationList.classList.toggle("show");
});
// Open Dropdown
destinations.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    destinationValue.textContent = item.textContent;
    destinationList.classList.remove("show");
  });
});
// Seclect country
destinationList.querySelectorAll("li").forEach((li) => {
  li.addEventListener("click", () => {
    destinationValue.textContent = li.dataset.value;
    destinationList.classList.remove("show");
  });
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
search.addEventListener("click" , function (){
  
  console.log("search");
   window.location.href = "search-reslut.html";
});