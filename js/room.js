 const Rooms = [
        {
            id: 1,
            name: "Standard Room",
            category: "Standard Rooms",
            price: 80,
            discount: "20% OFF",
            guests: 2,
            beds: 1,
            size: "18 m²",
            view: "City View",
            image: "images/Standard Room.png",
            images: [
                "images/Standard Room.png",
                "images/Bathroom.jpg",
                "images/hall.jpg",
                "images/iving room.jpg"
            ],
            description: "A cozy room with modern amenities perfect for solo travelers or couples.",
            amenities: ["Wi-Fi", "Air Conditioning", "TV", "Coffee Maker"]
        },
        {
            id: 2,
            name: "Deluxe Room",
            category: "Deluxe Rooms",
            price: 120,
            discount: "15% OFF",
            guests: 2,
            beds: 1,
            size: "24 m²",
            view: "City View",
            image: "images/Delax.jpg",
            images: [
                "images/Delax.jpg",
                "images/Bathroom.jpg",
                "images/hall.jpg",
                "images/iving room.jpg"
            ],
            description: "Spacious room with city view and extra comfort for a relaxing stay.",
            amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar", "Coffee Maker"]
        },
        {
            id: 3,
            name: "Suite Room",
            category: "Suite Rooms",
            price: 180,
            discount: "10% OFF",
            guests: 2,
            beds: 1,
            size: "40 m²",
            view: "Lake View",
            image: "images/Suite.jpg",
            images: [
                "images/Suite.jpg",
                "images/Bathroom.jpg",
                "images/hall.jpg",
                "images/iving room.jpg"
            ],
            description: "Enjoy a luxurious space with a separate living area and premium facilities.",
            amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar", "Safe Box", "Coffee Maker"]
        },
        {
            id: 4,
            name: "Family Room",
            category: "Family Rooms",
            price: 160,
            discount: "10% OFF",
            guests: 4,
            beds: 2,
            size: "35 m²",
            view: "Garden View",
            image: "images/Family-room.jpg",
            images: [
                "images/Family-room.jpg",
                "images/Bathroom.jpg",
                "images/hall.jpg",
                "images/iving room.jpg"
            ],
            description: "Ideal for families with children, offering comfort and plenty of space.",
            amenities: ["Wi-Fi", "Air Conditioning", "TV", "Coffee Maker"]
        },
        {
            id: 5,
            name: "Luxury Room",
            category: "Deluxe Rooms",
            price: 180,
            discount: "20% OFF",
            guests: 2,
            beds: 1,
            size: "35 m²",
            view: "Panoramic View",
            image: "images/Luxury room.jpeg",
            images: [
                "images/Luxury room.jpeg",
                "images/Bathroom.jpg",
                "images/hall.jpg",
                "images/iving room.jpg"
            ],
            description: "A luxurious and elegant room with modern design, premium amenities, and a relaxing atmosphere.",
            amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar", "Safe Box"]
},
        {
            id: 6,
            name: "Single Room",
            category: "Standard Rooms",
            price: 90,
            discount: "15% OFF",
            guests: 1,
            beds: 1,
            size: "35 m²",
            view: "City View",
            image: "images/Single-room.jpg",
            images: [
                "images/Single-room.jpg",
                "images/Bathroom.jpg",
                "images/hall.jpg",
                "images/iving room.jpg"
            ],
            description: "A cozy and comfortable room designed for one guest, perfect for business trips.",
            amenities: ["Wi-Fi", "Air Conditioning", "TV"]
        },
        {
            id: 7,
            name: "Double Room",
            category: "Standard Rooms",
            price: 130,
            discount: "18% OFF",
            guests: 2,
            beds: 1,
            size: "35 m²",
            view: "City View",
            image: "images/Double-room.jpg",
            images: [
                "images/Double-room.jpg",
                "images/Bathroom.jpg",
                "images/hall.jpg",
                "images/iving room.jpg"
            ],
            description: "A stylish and comfortable room for two guests, featuring a spacious bed.",
            amenities: ["Wi-Fi", "Air Conditioning", "TV", "Coffee Maker"]
        },
        {
            id: 8,
            name: "Executive Room",
            category: "Suite Rooms",
            price: 220,
            discount: "25% OFF",
            guests: 2,
            beds: 1,
            size: "35 m²",
            view: "Panoramic View",
            image: "images/Executive-room.jpg",
            images: [
                "images/Executive-room.jpg",
                "images/Bathroom.jpg",
                "images/hall.jpg",
                "images/iving room.jpg"
            ],
            description: "A spacious and elegant room with premium facilities, designed for extra comfort.",
            amenities: ["Wi-Fi", "Air Conditioning", "TV", "Mini Bar", "Safe Box", "Coffee Maker"]
        }
    ];


document.addEventListener("DOMContentLoaded", function () {
    const roomGrid = document.getElementById("roomGridContanier");
    const categoryButtons = document.querySelectorAll(".category-btn");
    const sortSelect = document.querySelector(".sort-select");

//    show rooms
    function displayRooms(rooms) {
        if (!roomGrid) return;
        roomGrid.innerHTML = "";
if (rooms.length === 0) {
            roomGrid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="bi bi-search" style="font-size: 3rem; color: #ccc;"></i>
                    <h3 class="mt-3">No rooms found</h3>
                    <p>Try changing your filter.</p>
                </div>
            `;
            return;
        }

        rooms.forEach(room => {
            const card = document.createElement("div");
            card.className = "col-lg-3 col-md-6 col-12";

            card.innerHTML = `
                <div class="room-card">
                    <div class="room-image">
                        <img src="${room.image}" class="img-fluid" alt="${room.name}">
                        <button class="discount">${room.discount}</button>
                    </div>
                    <div class="content">
                        <h3>${room.name}</h3>
                        <div class="room-info">
                            <span><i class="bi bi-person"></i> ${room.guests} Guests</span>
                            <span><i class="bi bi-lamp-fill"></i>${room.beds} Beds</span>
                            <span><i class="bi bi-arrows-angle-expand"></i> ${room.size}</span>
                        </div>
                        <div class="description">
                            <p>${room.description}</p>
                        </div>
                        <div class="price">
                            <span style="font-weight: bold;">$${room.price} </span><span>/night</span>
                            <button class="viewBtn" data-id="${room.id}">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            `;

            roomGrid.appendChild(card);
        });

        // View Details
        document.querySelectorAll(".viewBtn").forEach(button => {
            button.addEventListener("click", function () {
                const roomId = this.getAttribute("data-id");
                if (roomId) {
                    window.location.href = `room-details.html?id=${roomId}`;
                }
            });
        });
    }

//   category filter
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");

            categoryButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
//  filter
            let filteredRooms;
            if (category === "All Rooms") {
                filteredRooms = [...Rooms];
            } else {
                filteredRooms = Rooms.filter(room => room.category === category);
            }
            displayRooms(filteredRooms);
        });
    });
// sort
    if (sortSelect) {
        sortSelect.addEventListener("change", function () {
            const sortValue = this.value;
            let sortedRooms = [...Rooms];

            if (sortValue === "price-Low") {
                sortedRooms.sort((a, b) => a.price - b.price);
            } else if (sortValue === "price-High") {
                sortedRooms.sort((a, b) => b.price - a.price);
            } else if (sortValue === "rating") {
                sortedRooms.sort((a, b) => a.price - b.price);
            }

            displayRooms(sortedRooms);
        });
    }

    displayRooms(Rooms);


});