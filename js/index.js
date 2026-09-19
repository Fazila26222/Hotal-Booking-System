const destinationItem = document.getElementById("destinationItem");
const destinationValue = document.getElementById("destinationValue");
const destinationList = document.getElementById("destinationList");

const checkinItem = document.getElementById("checkinItem");
const checkinValue = document.getElementById("checkinValue");
const checkinInput = document.getElementById("checkinInput");

const checkoutItem = document.getElementById("checkoutItem");
const checkoutValue = document.getElementById("checkoutValue");
const checkoutInput = document.getElementById("checkoutInput");

const guestsItem = document.getElementById("guestsItem");
const guestsValue = document.getElementById("guestsValue");
const guestsPanel = document.getElementById("guestsPanel");
const guestDone = document.getElementById("guestDone");

const search = document.getElementById("search");

let guests = {adults: 2, children: 0, rooms: 1};

// open and colse dropdown
destinationItem.addEventListener("click",(e)=>{
e.stopPropagation();
closeAllDropdowns();
destinationList.classList.toggle("show");
});

// seclect
destinationList.querySelectorAll("li").forEach(li =>{
    li.addEventListener("click",() =>{
        
    })
})

