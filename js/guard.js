document.addEventListener("DOMContentLoaded", () => {
  const requiresLogin = document.body.dataset.requireLogin === "true";
  const requiresStaff = document.body.dataset.requireStaff === "true";
  const requiresAdmin = document.body.dataset.requireAdmin === "true";

  // اگر صفحه محافظت‌شده نیست، خارج شو
  if (!requiresLogin) return;

  const user = getCurrentUser();

  if (!user) {
    Swal.fire({
      icon: "info",
      title: "Login Required",
      text: "Please login first to access this page.",
      showCancelButton: true,
      confirmButtonText: "Login",
      cancelButtonText: "Go Home",
      confirmButtonColor: "#fa4312",
      cancelButtonColor: "#6c757d",
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then((result) => {
      window.location.href = result.isConfirmed ? "login.html" : "index.html";
    });
    return;
  }
// guset
  if (requiresStaff && user.role === 0) {
    Swal.fire({
      icon: "error",
      title: "Access Denied",
      text: "Only staff members can access this page.",
      confirmButtonColor: "#eb0d05",
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then(() => {
      window.location.href = "index.html";
    });
    return;
  }
// admin
  if (requiresAdmin && user.role !== 3) {
    Swal.fire({
      icon: "error",
      title: "Access Denied",
      text: "Only administrators can access this page.",
      confirmButtonColor: "#eb0d05",
      allowOutsideClick: false,
      allowEscapeKey: false,
    }).then(() => {
      window.location.href = "index.html";
    });
    return;
  }
});