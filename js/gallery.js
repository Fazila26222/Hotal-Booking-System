document.addEventListener("DOMContentLoaded", function () {

    const galleryContainer = document.getElementById("galleryContainer");

    if (typeof Hotels === 'undefined') {
        console.error("Hotels data is not defined. Please ensure that the hotels.js file is included before this script.");

        galleryContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-exclamation-circle" style="font-size: 4rem; color: #dc3545;"></i>
                <h3 class="mt-3">Hotel Not Found</h3>
                <p class="text-muted">The hotel you are looking for does not exist.</p>
                <a href="hotels.html" class="btn btn-primary mt-2">Explore Hotels</a>
            </div>
        `;
        return;
    }


    console.log("Hotel for gallery:", Hotels.length);

    let totalImages = 0;
    Hotels.forEach(hotel => {
        if (hotel.images && hotel.images.length > 0) {
            hotel.images.forEach((img, index) => {
                totalImages++;
                const col = document.createElement("div");
                col.className = "col-md-3 col-6";
                col.innerHTML = `
                <div class="gallery" data-img="${img}">
                    <img src="${img}" class="img-fluid" alt="${hotel.name} - Photo ${index + 1}">
                    <div class="gallery-overlay">
                        <i class="bi bi-zoom-in"></i>
                    </div>
                </div>
            `;
            galleryContainer.appendChild(col);
            });
        }
    });

    console.log("Total images displayed:",totalImages);

    // don't image
    if(totalImages === 0){
        
        galleryContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="bi bi-images" style="font-size: 4rem; color: #ccc;"></i>
                <h3 class="mt-3">No photos Available</h3>
                <p class="text-muted">There are no photos to display.</p>
            </div>
        `;
        return;
    }
    // add img 
    document.querySelectorAll(".gallery").forEach(item => {
        item.addEventListener("click", function () {
            const imgSrc = this.getAttribute("data-img");
            showLightbox(imgSrc);
        });
    });
});
// show img 
function showLightbox(src) {
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="${src}" alt="Preview">
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener("click", function () {
        this.remove();
    });

    document.addEventListener("keydown",function(e){
        if(e.key === "Escape"){
            const lb = document.querySelector(".lightbox");
            if(lb) lb.remove();
        }
    });
}