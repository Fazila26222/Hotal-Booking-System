const citiesData = [
    // ===== Europe =====
    {
        name: "London",
        country: "europe",
        image:"images/London1.jpg",
        things: "4214"
    },
    {
        name: "Istanbul",
        country: "europe",
        image: "images/istanbul1.jpg",
        things: "2572"
    },
    {
        name: "Paris",
        country: "europe",
        image: "images/paris.jpg",
        things: "3814"
    },
    {
        name: "Hamburg",
        country: "europe",
        image: "images/hamburg1.jpg",
        things: "383"
    },

    // ===== North America =====
    {
        name: "New York",
        country: "north america",
        image: "images/newyork.jpg",
        things: "1850"
    },
    {
        name: "Toronto",
        country: "north america",
        image: "images/toronto.jpg",
        things: "920"
    },
    {
        name: "Los Angeles",
        country: "north america",
        image: "images/la.jpg",
        things: "1420"
    },
    {
        name: "Vancouver",
        country: "north america",
        image: "images/vancouver.jpg",
        things: "750"
    },

    // ===== Asia =====
    {
        name: "Tokyo",
        country: "asia",
        image: "images/tokyo.jpg",
        things: "1950"
    },
    {
        name: "Dubai",
        country: "asia",
        image: "images/Dubai-UAE.jpg",
        things: "1100"
    },
    {
        name: "Bangkok",
        country: "asia",
        image: "images/Bangkok.jpg",
        things: "1350"
    },
    {
        name: "Seoul",
        country: "asia",
        image: "images/Seoul.jpg",
        things: "1250"
    },

    // ===== Africa =====
    {
        name: "Cairo",
        country: "africa",
        image: "images/cairo.jpg",
        things: "800"
    },
    {
        name: "Cape Town",
        country: "africa",
        image: "images/capetown.jpg",
        things: "950"
    },
    {
        name: "Marrakech",
        country: "africa",
        image: "images/marrakech.jpg",
        things: "600"
    },
    {
        name: "Nairobi",
        country: "africa",
        image: "images/nairobi.jpg",
        things: "550"
    },


    // ===== Oceania =====
    {
        name: "Sydney",
        country: "oceania",
        image: "images/Sydney.jpg",
        things: "1850"
    },
    {
        name: "Melbourne",
        country: "oceania",
        image: "images/Melbourne.jpg",
        things: "1420"
    },
    {
        name: "Auckland",
        country: "oceania",
        image: "images/Auckland.jpg",
        things: "980"
    },
    {
        name: "Brisbane",
        country: "oceania",
        image: "images/Brisbane.jpg",
        things: "850"
    },

    // ===== Middle East =====
    {
        name: "Dubai",
        country: "middle east",
        image: "images/Dubai2.jpg",
        things: "2100"
    },
    {
        name: "Abu Dhabi",
        country: "middle east",
        image: "images/Abu Dhabi.jpg",
        things: "1250"
    },
    {
        name: "Doha",
        country: "middle east",
        image: "images/Doha.jpg",
        things: "950"
    },
    {
        name: "Riyadh",
        country: "middle east",
        image: "images/Riyadh.jpg",
        things: "780"
    },

    // ===== South America =====
    {
        name: "Rio de Janeiro",
        country: "south america",
        image: "images/Rio de Janeiro.jpg",
        things: "1650"
    },
    {
        name: "Buenos Aires",
        country: "south america",
        image: "images/Buenos Aires.jpg",
        things: "1350"
    },
    {
        name: "Lima",
        country: "south america",
        image: "images/Lima.png",
        things: "1100"
    },
    {
        name: "Santiago",
        country: "south america",
        image: "images/Santiago.jpg",
        things: "920"
    },

    // ===== Carribbean =====
    {
        name: "Cancun",
        country: "caribbean",
        image: "images/Cancun.jpg",
        things: "1500"
    },
    {
        name: "Punta Cana",
        country: "caribbean",
        image: "images/Punta.jpg",
        things: "1100"
    },
    {
        name: "Montego Bay",
        country: "caribbean",
        image: "images/Montego.jpg",
        things: "850"
    },
    {
        name: "Nassau",
        country: "caribbean",
        image: "images/Nassau.jpg",
        things: "780"
    },

    // ===== Central America =====
    {
        name: "Panama City",
        country: "central america",
        image: "images/Panama.jpg",
        things: "1200"
    },
    {
        name: "San Jose",
        country: "central america",
        image: "images/San.jpg",
        things: "950"
    },
    {
        name: "Guatemala City",
        country: "central america",
        image: "images/Guatemala.jpg",
        things: "820"
    },
    {
        name: "Belize City",
        country: "central america",
        image: "images/Belize.jpg",
        things: "650"
    },
];


const cityContainer = document.getElementById("city-container");
const filterBtn = document.querySelectorAll(".filter-btn");

function renderCities(filterValue = "europe") {
    cityContainer.innerHTML = "";
    const filteredCities = citiesData.filter(city => city.country === filterValue);

    filteredCities.forEach(city => {

        const cardHTML = `
        <div class = "col-lg-3 col-md-4"  ${city.country}>
        <div class = "image-city">
        <img src = "${city.image}" class = "img-fluid" alt = "${city.name}">
        <div class = "image-name">
        <h6>${city.name}</h6>
        <p>${city.things} things to do</p>
        </div>
        </div>
        </div>
        `;

        cityContainer.innerHTML += cardHTML;
    });
}

renderCities("europe");
filterBtn.forEach(button => {
    button.addEventListener("click", () => {
       
        filterBtn.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        const filterValue = button.getAttribute("data-filter").toLowerCase();
        
        renderCities(filterValue);
    });
});
