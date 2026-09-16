const button = document.getElementById("darkBtn");
const body = document.body;


button.addEventListener("click",function(){
    body.classList.toggle("darkBtn");

    if (body.classList.contains("darktBtn")){
        button.textContent ="☀"
    }else{
        button.textContent="☀";
    }
});