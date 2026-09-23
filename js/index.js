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
 destinationList.querySelectorAll("li").forEach(li => {
    li.addEventListener("click", () =>{
        destinationValue.textContent = li.dataset.value;
        destinationList.classList.remove("show");
    });
  });

// ======= formatDate ==========

  function formatDate(date){
    const day = date.getDate();
    const month = date.toLocaleString("en-US", {month: "short"});
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
  if(!checkinInput.value) return;
const date = new Date(checkinInput.value);
checkinValue.textContent = formatDate(date);


//====== date check in befor date check out=======

checkoutInput.min = checkinInput.value;
 if(checkoutInput.value &&  checkinInput.value <= checkinInput.value){
  checkinInput.value = "" ;
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
  if(!checkoutInput.value) return;
const date = new Date(checkoutInput.value);
checkoutValue.textContent = formatDate(date);
});

// ======== Guests =========
const guestsItem = document.getElementById("guestsItem");
const guestsValue = document.getElementById("guestsValue");
const guestsPanel = document.getElementById("guestsPanel");
const guestDone = document.getElementById("guestDone");

let adults = 2;
let rooms = 1;
let children = 0;

guestsItem.addEventListener("click",(e)=> {
  if(e.target.closest(".guest-btn") || e.target.closest(".guests-panel"))return;
  e.stopPropagation();
  closeAllDropdowns();
  guestsPanel.classList.toggle("show");
});

// bouttns
document.querySelectorAll(".guest-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const type = btn.dataset.type;
    const action = btn.dataset.action;

    if(action === "plus") guests[type]++;
    if(action === "minus" && guests[type] > 0) guests[type]--;
    if(type === "adults" && guests.adults < 1) guests.adults = 1;
    if(type === "rooms" && guests.rooms < 1) guests.rooms = 1;
  })
})
// =====Search ======
const search = document.getElementById("search");
