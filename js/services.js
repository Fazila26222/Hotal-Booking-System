
document.addEventListener("DOMContentLoaded", () => {
  /* ========================
     Render Small Services
     ======================== */
  const smallContainer = document.getElementById("smallServicesContainer");

  if (smallContainer) {
    smallContainer.innerHTML = smallServicesData
      .map(
        (s) => `
        <div class="card-body">
          <div class="us-icon">
            <i class="bi ${s.icon}"></i>
          </div>
          <h3>${s.title}</h3>
          <p>Everything you need for a comfortable stay</p>
        </div>
      `
      )
      .join("");
  }

  /* ========================
     Render Main Services
     ======================== */
  const container = document.getElementById("servicesContainer");

  if (!container) return;

  function renderServices(services) {
    container.innerHTML = services
      .map(
        (s) => `
        <div class="col-lg-3 col-md-6">
          <div class="card-services">
            <div class="card-body-services">
              <div class="service-image">
                <img src="${s.image}" class="img-fluid" alt="${s.title}">
              </div>
              <div class="us-icons">
                <i class="bi ${s.icon}"></i>
              </div>
              <h2>${s.title}</h2>
              <p>${s.description}</p>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  renderServices(servicesData);

  /* ========================
          جستجو  
     ======================== */
  const searchInput = document.getElementById("serviceSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const term = e.target.value.toLowerCase().trim();
      const filtered = servicesData.filter(
        (s) =>
          s.title.toLowerCase().includes(term) ||
          s.description.toLowerCase().includes(term)
      );
      renderServices(filtered);
    });
  }

  /* ========================
     فیلتر بر اساس دسته 
     ======================== */
  const filterBtns = document.querySelectorAll("[data-service-filter]");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.serviceFilter;
      if (category === "all") {
        renderServices(servicesData);
      } else {
        const filtered = servicesData.filter((s) => s.category === category);
        renderServices(filtered);
      }
    });
  });
});
