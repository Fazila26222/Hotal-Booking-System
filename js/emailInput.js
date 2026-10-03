const emailInput = document.getElementById("subEmail");
const subBtn = document.getElementById("subBtn");

subBtn.addEventListener("click",function(){
    const eamil = emailInput.value.trim();

    if(eamil === ""){
        alert("Please enter your email");
        return;
    }
    localStorage.setItem("subEmail",eamil);

    alert("Your email has been saved");
    emailInput.value = "";
})