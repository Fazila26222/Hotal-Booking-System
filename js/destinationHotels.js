const hotelsData = {
  Paris: [
    {
      name: "Louvre Hotel Paris",
      desc: "Close to the Louvre Museum, free breakfast included",
      price: "$280 / night",
      img: "images/paris.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
        "images/Hotel7.jpg",
        "images/Hotel8.jpg",
        "images/Hotel9.jpg",
        "images/Hotel10.jpg",
      ]
    },
      {
      name: "Louvre Hotel Paris",
      desc: "Close to the Louvre Museum, free breakfast included",
      price: "$280 / night",
      img: "images/paris.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
        "images/Hotel7.jpg",
        "images/Hotel8.jpg",
        "images/Hotel9.jpg",
        "images/Hotel10.jpg",
      ]
    },
      {
      name: "Louvre Hotel Paris",
      desc: "Close to the Louvre Museum, free breakfast included",
      price: "$280 / night",
      img: "images/paris.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
        "images/Hotel7.jpg",
        "images/Hotel8.jpg",
        "images/Hotel9.jpg",
        "images/Hotel10.jpg",
      ]
    },
    {
      name: "Eiffel Tower Hotel",
      desc: "Direct view of the Eiffel Tower",
      price: "$450 / night",
      img: "images/paris1.jpg",
      images: [
        "images/Hotel7.jpg",
        "images/Hotel8.jpg",
        "images/Hotel9.jpg",
        "images/room.jpg",
        "images/room1.jpg",
      ]
    },
    {
      name: "Champs-Elysees Hotel",
      desc: "Located in the heart of Champs-Elysees",
      price: "$380 / night",
      img: "images/paris-France.jpg",
      images: [
        "images/Hotel10.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
  ],

  'Kabul': [
    {
      name: "Kabul Serena Hotel",
      desc: "5 star hotel with full security",
      price: "$150 / night",
      img: "images/kabul.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
         "images/room2.jpg",
        "images/room1.jpg",

      ]
    },
    {
      name: "Kabul Star Hotel",
      desc: "Colse to the city center",
      price: "$80 / night",
      img: "images/Kabul1.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
         "images/room2.jpg",
        "images/room3.jpg",
        "images/room4.jpg",
      ]
    },
  ],

  'Istanbul': [
    {
      name: "Taksim Istanbul Hotel",
      desc: "Close to Taksim Square",
      price: "$120 / night",
      img: "images/istanbul1.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
    {
      name: "Sultanahmet Hotel",
      desc: "View of the Blue Mosque",
      price: "$200 / night",
      img: "images/lstanbul-Turkey.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
  ],

  'Canada': [
    {
      name: "Toronto Downtown Hotel",
      desc: "In the center of Toronto",
      price: "$220 / night",
      img: "images/canada.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
    {
      name: "Vancouver Mountain Hotel",
      desc: "View of the Rocky Mountains",
      price: "$300 / night",
      img: "images/canada1.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
  ],

  'Australia': [
    {
      name: "Sydney Open House Hotel",
      desc: "Overlooking the Sydney Open House and Harbour Bridge",
      price: "$350 / night",
      img: "images/Australia.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
    {
      name: "Great Barrier Reef Resort",
      desc: "Beachfront resort near the Great Barrier Reef",
      price: "$420 / night",
      img: "images/Australia1.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
  ],

  'London': [
    {
      name: "The Ritz London",
      desc: "Luxuty 5-star hotel in Piccadilly",
      price: "$600 / night",
      img: "images/london.jpg",
    },
    {
      name: "Tower Bridge Hotel",
      desc: "Stunning views of Tower Bridge and the Thames",
      price: "$320 / night",
      img: "images/London1.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
  ],

  'US': [
    {
      name: "New York Times Square Hotel",
      desc: "In the heartof Times Square, Manhayyan",
      price: "$400 / night",
      img: "images/US.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
    {
      name: "Los Angeles Beverly Hills Hotel",
      desc: "Luxury stay in Beverly Hills, LA",
      price: "$550 / night",
      img: "images/le meurice.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
  ],

  'Maldives': [
    {
      name: "Maldives Overwater Villa",
      desc: "Private overwater villa with crystal clear lagoon",
      price: "$800 / night",
      img: "images/maldives.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
    {
      name: "Maldives Beach Resort",
      desc: "All-inclusive beach resort with spa",
      price: "$650 / night",
      img: "images/mandarin.jpg",
      images: [
        "images/Hotel4.jpg",
        "images/Hotel5.jpg",
        "images/Hotel6.jpg",
      ]
    },
  ],

};

let currenCity = "";
let currentHotelIndex = 0;

// Show Hotels Page


function showHotels(cityName) {
  const hotelPage = document.getElementById("hotelPage");
  const hotelPageTitle = document.getElementById("hotelPageTitle");
  const hotelListContainer = document.getElementById("hotelListContainer");

  hotelPageTitle.innerText = cityName + "Hotels";
  hotelListContainer.innerHTML = "";

  const hotels = hotelsData[cityName] || [];
  if (hotels.length === 0) {
    hotelListContainer.innerHTML = "<p>No hotels found for this destinayion.</p>";
  } else {
    hotels.forEach((hotel, index) => {

      const card = document.createElement("div");

      card.className = "hotel-card";

      card.onclick = function () {
        showGallery(cityName, index);
      };

      card.innerHTML = `
            <img src = "${hotel.img}" alt = "${hotel.name}">
            <div class= "hotelInfo">
            <h3>${hotel.name}</h3>
            <p>${hotel.desc}</p>
            <div class = "hotel-price">Price: ${hotel.price} </div>
            </div>
            `;

      hotelListContainer.appendChild(card);
    });
  }
  hotelPage.style.display = "block";
  document.body.style.overflow = "hidden"
}

function closeHotelPage() {
  document.getElementById("hotelPage").style.display = "none";
  document.body.style.overflow = "auto";
}

// Gallery

function showGallery(cityName, hotelIndex) {
  currentHotelIndex = hotelIndex;

  const galleryPage = document.getElementById("galleryPage");
  const galleryPageTitle = document.getElementById("galleryPageTitle");
  const galleryContainer = document.getElementById("galleryContainer");

  const hotel = hotelsData[cityName][hotelIndex];

  galleryPageTitle.innerText = hotel.name + "- Gallery";
  galleryContainer.innerHTML = "";

  const images = hotel.images || [];

  if (images.length === 0) {
    galleryContainer.innerHTML = "<p>No images found for this hotel.</p>"
  } else {
    images.forEach(imgSrc => {
      const img = document.createElement("img");
      img.src = imgSrc;
      img.alt = hotel.name;
      img.className = "img-fluid rounded shadow-sm";
      img.style.width = "100%";
      img.style.height = "200px";
      img.style.objectFit = "cover";

      galleryContainer.appendChild(img);
    });
  }
  galleryPage.style.display = "block";
  document.body.style.overflow = "hidden";
}

function closeGalleryPage() {
  document.getElementById("galleryPage").style.display = "none";
  document.getElementById("hotelPage").style.display = "block";
}
