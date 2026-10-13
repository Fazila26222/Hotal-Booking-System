document.addEventListener("DOMContentLoaded", () => {
  /* ========================
     1. Render Features (Why Choose Us)
     ======================== */
  const featuresContainer = document.getElementById("featuresContainer");

  if (featuresContainer) {
    featuresContainer.innerHTML = featuresData
      .map(
        (f) => `
        <div class="col-lg-3 col-md-6">
          <div class="card-about">
            <div class="card-body">
              <div class="icon">
                <i class="bi ${f.icon}"></i>
              </div>
              <h1>${f.title}</h1>
              <p>${f.description}</p>
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  /* ========================
     2. Render Facilities
     ======================== */
  const facilitiesContainer = document.getElementById("facilitiesContainer");

  if (facilitiesContainer) {
    facilitiesContainer.innerHTML = facilitiesData
      .map(
        (f) => `
        <div class="icons">
          <i class="bi ${f.icon}"></i>
          <span>${f.label}</span>
        </div>
      `
      )
      .join("");
  }

  /* ========================
     3. Render Statistics + Animation
     ======================== */
  const statsContainer = document.getElementById("statsContainer");

  if (statsContainer) {
    statsContainer.innerHTML = statsData
      .map(
        (s) => `
        <div class="stat-item">
          <i class="bi ${s.icon}"></i>
          <span class="stat-number"
                data-target="${s.value}"
                data-suffix="${s.suffix}"
                data-decimal="${s.isDecimal || false}">
            0
          </span>
          <h4>${s.label}</h4>
          <p>${s.description}</p>
        </div>
      `
      )
      .join("");

    
    animateStats();
  }

  /* ========================
     تابع انیمیشن شمارش اعداد
     ======================== */
  function animateStats() {
    const statNumbers = document.querySelectorAll(".stat-number");

    statNumbers.forEach((el) => {
      const target  = parseFloat(el.dataset.target);
      const suffix  = el.dataset.suffix || "";
      const decimal = el.dataset.decimal === "true";
      const duration = 1500; 
      const stepTime = 16;   
      const steps    = duration / stepTime;
      const increment = target / steps;

      let current = 0;

      const timer = setInterval(() => {
        current += increment;

        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        el.textContent =
          (decimal
            ? current.toFixed(1)
            : Math.floor(current).toLocaleString()) + suffix;
      }, stepTime);
    });
  }
});
