const USER_KEY = "aw_user";
const CURRENT_USER_KEY = "aw_current_user";

/* ========================
   Storage Helpers
   ======================== */
function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USER_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(users));
  } catch (err) {
    console.error("Error saving users:", err);
  }
}

function getCurrentUser() {
  try {
    return JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY)) || null;
  } catch {
    return null;
  }
}

/* ========================
   Validation Helpers
   ======================== */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isStrongPassword(password) {
  if (password.length < 8) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[!@#$%^&*(),.?":{}|<>_\-+=\[\]]/.test(password)) return false;
  return true;
}

function isValidPhone(phone) {
  const phoneRegex = /^(\+93|0)?7\d{8}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}

/* ========================
   Password Hashing (PBKDF2)
   ======================== */
async function hashPassword(password, saltHex = null) {
  if (!window.crypto || !window.crypto.subtle) {
    throw new Error("Secure password hashing is unavailable.");
  }

  const salt = saltHex
    ? Uint8Array.from(saltHex.match(/.{1,2}/g).map((b) => parseInt(b, 16)))
    : window.crypto.getRandomValues(new Uint8Array(16));

  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const bits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: 150000,
      hash: "SHA-256",
    },
    keyMaterial,
    256
  );

  const hash = Array.from(new Uint8Array(bits))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  const saltEncoded = Array.from(salt)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return` pbkdf2$${saltEncoded}$${hash}`;
}

async function verifyPassword(password, stored) {
  if (!stored || typeof stored !== "string") return false;
  const parts = stored.split("$");
  if (parts.length !== 3 || parts[0] !== "pbkdf2") return false;

  const saltHex = parts[1];
  const expectedHash = parts[2];

  try {
    const rehashed = await hashPassword(password, saltHex);
    const rehashedHash = rehashed.split("$")[2];
    return rehashedHash === expectedHash;
  } catch {
    return false;
  }
}

/* ========================
   Session Helpers
   ======================== */
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
  localStorage.removeItem("loginTime");
  window.location.href = "index.html";
}

/* ========================
   Role Helpers
   ======================== */
function isStaff() {
  const user = getCurrentUser();
  if (!user) return false;
  return typeof user.role === "number" && user.role >= 1;
}

function isAdmin() {
  const user = getCurrentUser();
  if (!user) return false;
  return user.role === 3;
}

function getRoleName(role) {
  const names = { 0: "Guest", 1: "Receptionist", 2: "Manager", 3: "Admin" };
  return names[role] ?? "Guest";
}

/* ========================
   Register
   ======================== */
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document
      .getElementById("registerEmail")
      .value.trim()
      .toLowerCase();
    const phone = document.getElementById("registerPhone").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const registerRole = document.getElementById("registerRole").value;
    const address = document.getElementById("registerAddress").value.trim();
    const terms = document.getElementById("terms").checked;

    if (!name || !email || !phone || !password || !confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#e98354",
      });
      return;
    }

    if (!terms) {
      Swal.fire({
        icon: "warning",
        title: "Terms Not Accepted",
        text: "Please accept the Terms & Conditions.",
        confirmButtonColor: "#e98354",
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        confirmButtonColor: "#eb0d05",
      });
      return;
    }

    if (!isValidPhone(phone)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Phone Number",
        text: "Please enter a valid phone number (e.g., 0700000000).",
        confirmButtonColor: "#eb0d05",
      });
      return;
    }

    if (!isStrongPassword(password)) {
      Swal.fire({
        icon: "error",
        title: "Weak Password",
        html: `
          <p>Password must contain:</p>
          <ul style="text-align:left;font-size:0.85rem;color:#666;">
            <li>At least 8 characters</li>
            <li>At least 1 uppercase letter (A-Z)</li>
            <li>At least 1 lowercase letter (a-z)</li>
            <li>At least 1 number (0-9)</li>
            <li>At least 1 special character (@$!%*?&)</li>
          </ul>
        `,
        confirmButtonColor: "#eb0d05",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Passwords Do Not Match",
        text: "Password and Confirm Password do not match.",
        confirmButtonColor: "#eb0d05",
      });
      return;
    }

    const users = getUsers();
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      Swal.fire({
        icon: "warning",
        title: "Email Already Exists",
        text: "This email is already registered.",
        confirmButtonColor: "#e98354",
      });
      return;
    }

    const roleMap = { guest: 0, receptionist: 1, manager: 2, admin: 3 };
    const roleNumber = roleMap[registerRole] ?? 0;

    let hashedPassword;
    try {
      hashedPassword = await hashPassword(password);
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Hashing Error",
        text: "Could not securely hash the password.",
        confirmButtonColor: "#eb0d05",
      });
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      password: hashedPassword,
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
      confirmButtonColor: "#20af13",
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
  loginForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document
      .getElementById("loginEmail")
      .value.trim()
      .toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const users = getUsers();

    let user = null;
    for (const u of users) {
      if (u.email !== email) continue;
      if (await verifyPassword(password, u.password)) {
        user = u;
        break;
      }
    }

    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Invalid email or password.",
        confirmButtonText: "Try Again",
        confirmButtonColor: "#eb0d05",
      });
      return;
    }

    if (user.emailVerified === false) {
      Swal.fire({
        icon: "warning",
        title: "Email Not Verified",
        html: `
          <p>Your email is not verified yet.</p>
          <p style="font-size:0.85rem; color:#666;">
            Please verify your email to continue.
          </p>
        `,
        showCancelButton: true,
        confirmButtonText: "Verify Now",
        cancelButtonText: "Cancel",
        confirmButtonColor: "#fa4312",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href =
            "verify-email.html?email=" + encodeURIComponent(email);
        }
      });
      return;
    }

    if (user.role === undefined || user.role === null) {
      user.role = 0;
    }

    setCurrentUser(user);
    localStorage.setItem("loginTime", new Date().toISOString());
    localStorage.setItem("justLoggedIn", "true");

    const firstName = user.name.split(" ")[0];

    /* ⭐ پیام خوش‌آمدگویی بر اساس نقش ⭐ */
    if (user.role !== 0) {
      // Receptionist / Manager / Admin → پیام ویژه
      const messages = {
        1: {
          role: "Receptionist",
          text: "You can manage check-ins and guest bookings.",
          color: "#1565c0",
        },
        2: {
          role: "Manager",
          text: "You can manage hotels and staff.",
          color: "#e65100",
        },
        3: {
          role: "Admin",
          text: "You have full access to the system.",
          color: "#c2185b",
        },
      };
      const msg = messages[user.role] || messages[1];

      Swal.fire({
        icon: "success",
        title: `Welcome back, ${firstName}!`,
        html: `
          <p style="font-size:1rem; margin:8px 0;">
            You are logged in as <strong>${msg.role}</strong>.
          </p>
          <p style="color:${msg.color}; font-weight:600; margin:0;">
            ${msg.text}
          </p>
        `,
        timer: 2200,
        showConfirmButton: false,
        timerProgressBar: true,
      }).then(() => {
        window.location.href = "index.html";
      });
    } else {
      // Guest → پیام ساده
      Swal.fire({
        icon: "success",
        title:` Welcome back, ${firstName}!`,
        timer: 1200,
        showConfirmButton: false,
        timerProgressBar: true,
      }).then(() => {
        window.location.href = "index.html";
      });
    }
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
const ids = {
    loginLink:       ["loginLink", "loginLinkMobile"],
    profileBox:      ["profileBox", "profileBoxMobile"],
    profileToggle:   ["profileToggle", "profileToggleMobile"],
    profileMenu:     ["profileMenu", "profileMenuMobile"],
    profileAvatar:   ["profileAvatar", "profileAvatarMobile"],
    menuAvatar:      ["menuAvatar", "menuAvatarMobile"],
    menuUserName:    ["menuUserName", "menuUserNameMobile"],
    logoutBtn:       ["logoutBtn", "logoutBtnMobile"],
    dashboardLink:   ["dashboardLink", "dashboardLinkMobile"],
    viewAccountLink: ["viewAccountLink", "viewAccountLinkMobile"],
  };

  /* نمایش/مخفی لینک ورود */
  ids.loginLink.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (currentUser) el.classList.add("d-none");
    else el.classList.remove("d-none");
  });

  /* نمایش/مخفی جعبهٔ پروفایل */
  ids.profileBox.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (currentUser) el.classList.remove("d-none");
    else el.classList.add("d-none");
  });

  /* ⭐ نمایش/مخفی لینک Dashboard بر اساس نقش ⭐ */
  ids.dashboardLink.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!currentUser || currentUser.role === 0) {
      el.classList.add("d-none");
    } else {
      el.classList.remove("d-none");
    }
  });

  /* ⭐ نمایش/مخفی «View your account» ⭐ */
  ids.viewAccountLink.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!currentUser || currentUser.role === 0) {
      el.classList.add("d-none");
    } else {
      el.classList.remove("d-none");
    }
  });

  /* پر کردن آواتار و نام کاربر */
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

  /* باز/بسته منوی پروفایل - دسکتاپ */
  const toggleDesktop = document.getElementById("profileToggle");
  const menuDesktop = document.getElementById("profileMenu");

  if (toggleDesktop && menuDesktop) {
    toggleDesktop.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      menuDesktop.classList.toggle("d-none");
    });
  }

  /* باز/بسته منوی پروفایل - موبایل */
  const toggleMobile = document.getElementById("profileToggleMobile");
  const menuMobile = document.getElementById("profileMenuMobile");

  if (toggleMobile && menuMobile) {
    toggleMobile.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      menuMobile.classList.toggle("d-none");
    });
  }

  /* بستن منو با کلیک بیرون */
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
      !menuMobile.contains(e.target) &&
      !toggleMobile.contains(e.target)
    ) {
      menuMobile.classList.add("d-none");
    }
  });

  /* خروج (دسکتاپ + موبایل) */
  ids.logoutBtn.forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener("click", logoutUser);
  });
});

/* ═══════════════════════════════════════════════════════════
   Auto-Protect — محافظت از دکمه‌های Book و قلب‌های Favorite
   ═══════════════════════════════════════════════════════════ */
document.addEventListener("DOMContentLoaded", () => {
/* ---------- ۱. محافظت از دکمه‌های Book Now ---------- */
  document.querySelectorAll(".bookBtn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!isLoggedIn()) {
        Swal.fire({
          icon: "info",
          title: "Login Required",
          text: "Please login first to book a hotel.",
          showCancelButton: true,
          confirmButtonText: "Login",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#fa4312",
          cancelButtonColor: "#6c757d",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "login.html";
          }
        });
        return;
      }

      const hotelName = btn.dataset.hotel || "";
      const hotelId = btn.dataset.id || "";
      window.location.href = `booking.html?hotel=${encodeURIComponent(hotelName)}&id=${hotelId}`;
    });
  });

  /* ---------- ۲. محافظت از قلب‌های Favorite ---------- */
  document.querySelectorAll(".favorite-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (!isLoggedIn()) {
        Swal.fire({
          icon: "info",
          title: "Login Required",
          text: "Please login first to add favorites.",
          showCancelButton: true,
          confirmButtonText: "Login",
          cancelButtonText: "Cancel",
          confirmButtonColor: "#fa4312",
          cancelButtonColor: "#6c757d",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "login.html";
          }
        });
        return;
      }

      // Toggle قلب
      if (btn.classList.contains("bi-heart")) {
        btn.classList.replace("bi-heart", "bi-heart-fill");
        btn.style.color = "red";
      } else {
        btn.classList.replace("bi-heart-fill", "bi-heart");
        btn.style.color = "";
      }
    });
  });
});

/* ========================
   Expose for inline HTML usage
   ======================== */
window.requireLogin = requireLogin;
window.logoutUser = logoutUser;
window.isLoggedIn = isLoggedIn;
window.getCurrentUser = getCurrentUser;
window.isStaff = isStaff;
window.isAdmin = isAdmin;
window.getRoleName = getRoleName;
