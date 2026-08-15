// location
const locationBtn = document.getElementById("locationBtn");
const locationCard = document.getElementById("locationCard");
const locationInput = document.getElementById("locationInput");
// Locatin open and close
locationBtn .addEventListener("click", function(){
    locationCard.classList.toggle("active");
});
// select countries

const countries = document.querySelectorAll(".country");
countries.forEach(function(country){
    country.addEventListener("click",function(){
        const countryName = country.querySelector("span").textContent;
        locationInput.value = countryName;
        locationCard.classList.remove("active");
    });
});

// guests

const guestBtn = document.getElementById("guestBtn");
const guestCard = document.getElementById("guestCard");
// guests open and close
guestBtn.addEventListener("click",function(){
    guestCard.classList.toggle("active");
})

// select guests and rooms
const counter = document.querySelectorAll(".counter");
const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");

minus.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        let number = parseInt(counter[index].textContent);
        if (number > 1){
            counter[index].textContent = number -1
        }
    });
});

plus.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        let number = parseInt(counter[index].textContent);
        counter[index].textContent = number + 1;
    })
})