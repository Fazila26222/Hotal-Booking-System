
const USER_KEY = "aw_user";
const CURRENT_USER_KEY = "aw_current_user";

/* ========================
   Storage Helpers
   ======================== */
function getUsers() {
  return JSON.parse(localStorage.getItem(USER_KEY)) || [];
}

function saveUsers(users) {
  localStorage.setItem(USER_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  return JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY)) || null;
}

function setCurrentUser(user) {
  const sessionUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    role: user.role,
    address: user.address,
  };
  sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
}

function isLoggedIn() {
  return getCurrentUser() !== null;
}

function logoutUser() {
  sessionStorage.removeItem(CURRENT_USER_KEY);
  localStorage.removeItem("justLoggedIn");
  window.location.href = "index.html";
}

/* ========================
   Register
   ======================== */
const registerForm = document.getElementById("registerForm");

if (registerForm) {
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document
      .getElementById("registerEmail")
      .value.trim()
      .toLowerCase();
    const phone = document.getElementById("registerPhone").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("conformPassword").value;
    const registerRole = document.getElementById("registerRole").value;
    const address = document.getElementById("registerAddress").value.trim();
    const terms = document.getElementById("terms").checked;

    /* Validation */

    if (!name || !email || !phone || !password || !confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#fa4312",
      });
      return;
    }

    if (!terms) {
      Swal.fire({
        icon: "warning",
        title: "Terms Not Accepted",
        text: "Please accept the Terms & Conditions.",
        confirmButtonColor: "#fa4312",
      });
      return;
    }

    const users = getUsers();

    /* find */
    const existingUser = users.find((user) => user.email === email);

    if (existingUser) {
      Swal.fire({
        icon: "warning",
        title: "Email Already Exists",
        text: "This email is already registered.",
        confirmButtonColor: "#fa4312",
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least 6 characters.",
        confirmButtonColor: "#fa4312",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords Do Not Match",
        text: "Password and Confirm Password do not match.",
        confirmButtonColor: "#fa4312",
      });
      return;
    }

    const roleMap = { guest: 0, receptionist: 1, manager: 2, admin: 3 };
    const roleNumber = roleMap[registerRole] ?? 0;

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
      role: roleNumber,
      address,
      emailVerified: true,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    Swal.fire({
      icon: "success",
      title: "Account Created",
      text: `Welcome ${name}! Your account has been created successfully.`,
      confirmButtonText: "Continue",
      confirmButtonColor: "#fa4312",
    }).then(() => {
      registerForm.reset();
      window.location.href = "login.html";
    });
  });
}

/* ========================
   Login
   ======================== */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document
      .getElementById("loginEmail")
      .value.trim()
      .toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const users = getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#fa4312",
      });
      return;
    }

    if (user.emailVerified === false) {
      Swal.fire({
        icon: "warning",
        title: "Email Not Verified",
        text: "Please verify your email before logging in.",
        confirmButtonText: "OK",
        confirmButtonColor: "#fa4312",
      });
      return;
    }

    if (user.role === undefined || user.role === null) {
      user.role = 0;
    }

    setCurrentUser(user);
    localStorage.setItem("loginTime", new Date().toISOString());
    localStorage.setItem("justLoggedIn", "true");

    Swal.fire({
      icon: "success",
      title: `Welcome back, ${user.name.split(" ")[0]}!`,
      timer: 1200,
      showConfirmButton: false,
      timerProgressBar: true,
    }).then(() => {
      window.location.href = "index.html";
    });
  });
}

/* ========================
   Route Guard
   ======================== */
function requireLogin() {
  if (isLoggedIn()) return true;

  Swal.fire({
    icon: "info",
    title: "Login Required",
    text: "Please login first to use this feature.",
    showCancelButton: true,
    confirmButtonText: "Login",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#fa4312",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "login.html";
    }
  });
  return false;
}

/* ========================
   Navbar Profile (Desktop + Mobile)
   ======================== */
document.addEventListener("DOMContentLoaded", () => {
  const currentUser = getCurrentUser();

  /* List of IDs - Desktop and Mobile */
  const ids = {
    loginLink:     ["loginLink", "loginLinkMobile"],
    profileBox:    ["profileBox", "profileBoxMobile"],
    profileToggle: ["profileToggle", "profileToggleMobile"],
    profileMenu:   ["profileMenu", "profileMenuMobile"],
    profileAvatar: ["profileAvatar", "profileAvatarMobile"],
    menuAvatar:    ["menuAvatar", "menuAvatarMobile"],
    menuUserName:  ["menuUserName", "menuUserNameMobile"],
    logoutBtn:     ["logoutBtn", "logoutBtnMobile"],
  };

  /* Toggle login link visibility */
  ids.loginLink.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (currentUser) el.classList.add("d-none");
    else el.classList.remove("d-none");
  });

  /* show/hide profile box */
  ids.profileBox.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (currentUser) el.classList.remove("d-none");
    else el.classList.add("d-none");
  });

  /* Fill avatar and user name */
  if (currentUser) {
    const initial = currentUser.name
      ? currentUser.name.charAt(0).toUpperCase()
      : "U";

    ids.profileAvatar.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = initial;
    });

    ids.menuAvatar.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = initial;
    });

    ids.menuUserName.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = `Hello, ${currentUser.name.split(" ")[0]}!`;
    });
  }

  /* profile toggle - desktop */
  const toggleDesktop = document.getElementById("profileToggle");
  const menuDesktop   = document.getElementById("profileMenu");

  if (toggleDesktop && menuDesktop) {
    toggleDesktop.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      menuDesktop.classList.toggle("d-none");
    });
  }
/* profile toggle - mobile */
  const toggleMobile = document.getElementById("profileToggleMobile");
  const menuMobile   = document.getElementById("profileMenuMobile");

  if (toggleMobile && menuMobile) {
    toggleMobile.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      menuMobile.classList.toggle("d-none");
    });
  }

  /* close on outside click */
  document.addEventListener("click", (e) => {
    if (
      menuDesktop &&
      toggleDesktop &&
      !menuDesktop.contains(e.target) &&
      !toggleDesktop.contains(e.target)
    ) {
      menuDesktop.classList.add("d-none");
    }
    if (
      menuMobile &&
      toggleMobile &&
      !menuMobile.contains(e
        .target) &&
      !toggleMobile.contains(e.target)
    ) {
      menuMobile.classList.add("d-none");
    }
  });

  /* logout */
  ids.logoutBtn.forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", logoutUser);
  });
});