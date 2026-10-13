(function () {
  const body = document.body;
  
  function getButtons() {
    return [
      document.getElementById("darkBtn"),
      document.getElementById("darkBtnMobile"),
    ].filter(Boolean);
  }

  /* ---------- تغییر حالت ---------- */
  function toggleDarkMode() {
    const isDark = body.classList.toggle("darkBtn");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcons(isDark);
  }

  function updateIcons(isDark) {
    getButtons().forEach((btn) => {
      const icon = btn.querySelector("i");
      if (icon) {
        icon.className = isDark ? "bi bi-sun-fill" : "bi bi-moon-fill";
      } else {
        btn.textContent = isDark ? "☀" : "🌙";
      }
    });
  }

  function loadTheme() {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";

    body.classList.toggle("dark-mode", isDark);
    updateIcons(isDark);
  }

  function attachListeners() {
    getButtons().forEach((btn) => {
      // برای جلوگیری از اتصال دوباره
      if (btn.dataset.darkBound) return;
      btn.dataset.darkBound = "true";
      btn.addEventListener("click", toggleDarkMode);
    });
  }

  loadTheme();
  attachListeners();

  const navOffcanvas = document.getElementById("navOffcanvas");
  if (navOffcanvas) {
    navOffcanvas.addEventListener("shown.bs.offcanvas", () => {
      attachListeners();
    });
  }
  document.addEventListener("DOMContentLoaded", attachListeners);
})();