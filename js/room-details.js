
  document.addEventListener("DOMContentLoaded", function () { 
    const params = new URLSearchParams(window.location.search);
    const roomId = Number(params.get("id"));
    const finalRoomId = roomId && !isNaN(roomId) ? roomId : 1;

    const selectedRoom = Rooms.find(room => room.id === finalRoomId);

    if (!selectedRoom) {
        console.error("Room not found for id:", finalRoomId);
        return;
    }

    console.log("selectedRoom", selectedRoom);

    const roomNameEl = document.getElementById("roomName");
    const roomDescriptionEl = document.getElementById("roomDescription");
    if (roomNameEl) roomNameEl.textContent = selectedRoom.name;
    if (roomDescriptionEl) roomDescriptionEl.textContent = selectedRoom.description;

    
    const roomSizeEl = document.getElementById("roomSize");
    const roomBedsEl = document.getElementById("roomBeds");
    const roomGuestsEl = document.getElementById("roomGuests");
    const roomViewEl = document.getElementById("roomView");

    if (roomSizeEl) roomSizeEl.innerHTML = selectedRoom.size;
    if (roomBedsEl) roomBedsEl.textContent = `${selectedRoom.beds} Bed`;
    if (roomGuestsEl) roomGuestsEl.textContent = `${selectedRoom.guests} Guests`;
    if (roomViewEl) roomViewEl.textContent = selectedRoom.view || "City View";

    
    const roomPriceEl = document.getElementById("roomPrice");
    if (roomPriceEl) roomPriceEl.textContent = `$${selectedRoom.price}`;

    const mainRoomImage = document.getElementById("mainRoomImage");
    const roomImage1 = document.getElementById("roomImage1");
    const roomImage2 = document.getElementById("roomImage2");
    const roomImage3 = document.getElementById("roomImage3");
    const roomImage4 = document.getElementById("roomImage4");

    if (selectedRoom.images && selectedRoom.images.length >= 4) {
        if (mainRoomImage) mainRoomImage.src = selectedRoom.images[0];
        if (roomImage1) roomImage1.src = selectedRoom.images[0];
        if (roomImage2) roomImage2.src = selectedRoom.images[1];
        if (roomImage3) roomImage3.src = selectedRoom.images[2];
        if (roomImage4) roomImage4.src = selectedRoom.images[3];
    }

    const amenitiesContainer = document.querySelector(".amenities");
    if (amenitiesContainer && selectedRoom.amenities) {
        let amenitiesHTML = "";
        
        
        const half = Math.ceil(selectedRoom.amenities.length / 2);
        const col1 = selectedRoom.amenities.slice(0, half);
        const col2 = selectedRoom.amenities.slice(half);

        
        const iconMap = {
            "Wi-Fi": "bi-wifi",
            "Air Conditioning": "bi-snow",
            "TV": "bi-tv",
            "Coffee Maker": "bi-cup-hot",
            "Mini Bar": "bi-cup-straw",
            "Safe Box": "bi-safe"
        };

        amenitiesHTML += `<div class="col-6">`;
        col1.forEach(amenity => {
            const icon = iconMap[amenity] || "bi-check-circle";
            amenitiesHTML += `<div class="amenity"><span><i class="bi ${icon}"></i>${amenity}</span></div>`;
        });
        amenitiesHTML += `</div>`;

        amenitiesHTML += `<div class="col-6">`;
        col2.forEach(amenity => {
            const icon = iconMap[amenity] || "bi-check-circle";
            amenitiesHTML += `<div class="amenity"><span><i class="bi ${icon}"></i>${amenity}</span></div>`;
        });
        amenitiesHTML += `</div>`;

        amenitiesContainer.innerHTML = amenitiesHTML;
    }

    const bookNowBtn = document.getElementById("bookNowBtn");
    if (bookNowBtn) {
        bookNowBtn.addEventListener("click", function () {
            
            window.location.href = `booking.html?roomId=${selectedRoom.id}&id=1`;
        });
    }

  });
