const rooms = [
    {
        id:1,
        name:"Standard Room",
        image:"images/room.jpg",
        discount:"20% OFF",
        guests:2,
        beds:1,
        size:"18 m2",
        description:"A cozy room with modrn amenities perfect for solo travelers or couples.",
        price:80,
        category:"Standard"
    },
    {
        id:2,
        name:"Deluxe Room",
        image:"images/rooms.jpg",
        discount:"15% OFF",
        guests:2,
        beds:1,
        size:"24 m2",
        description:"Spacious room with city view and extra comfort for a relaxing stay.",
        price:120,
        category:"Deluxe"
    },
     {
        id:3,
        name:"Suite Room",
        image:"images/guestroom.jpg",
        discount:"10% OFF",
        guests:2,
        beds:1,
        size:"40 m2",
        description:"Enjoy a luxurious space with a separate living area and premium facilities.",
        price:180,
        category:"Suite"
    },
     {
        id:4,
        name:"Family Room",
        image:"images/rooms.jpg",
        discount:"10% OFF",
        guests:4,
        beds:2,
        size:"35 m2",
        description:"Ideal for families with childern, offering comfort and plenty of apace.",
        price:160,
        category:"Family"
    },

]
const roomsContainer = document.getElementById("roomsContainer");
rooms.forEach(room =>{
    roomsContainer.innerHTML = `
    <div class="col-lg-4 col-md-6">
            <div class="room-card">
                <div class="room-image">
                    <img src="${room.image}" alt="${room.name}">
                    ${discount
                    `<span class="discount">${discount}</span>
                    `}
                </div>
                <div class="room-content">
                    <h3>${room.name}</h3>
                    <div class="room-info">
                        <span><i class="bi bi-person"></i>${room.guests}Guests</span>
                        <span><i class="bi bi-bed"></i>${room.beds}Beds</span>
                        <span>${room.size}</span>
                    </div>
                    <p>${room.description}</p>
                    <div class="room-bottom">
                        <div class="price">
                            $${room.price}<small>/night</small>
                        </div>
                        <button>View Details</button>
                    </div>
                </div>
            </div>
          </div>
    `;
    roomsContainer.appendChild(room);
});
displayProducts(rooms);