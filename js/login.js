const authBox = document.querySelector("auth-box");
const showLogin = document.getElementById("showLoginForm");
const showRegister = document.getElementById("showRegisterForm");

const USER_kEY = "aw_user";
const CURRENT_USER_KEY = "aw_current_user";

// get user

function getUsers() {
    return JSON.parse(localStorage.getItem(USER_kEY)) || [];
}
// save users

function saveUsers(users) {
    localStorage.setItem(USER_kEY, JSON.stringify(users));
}

// get current user

function getCurrentUser() {
    return JSON.parse(sessionStorage.getItem(CURRENT_USER_KEY)) || null;
}

// check login

function isLogin() {
    return getCurrentUser() == null;
}

// save current user
function setCurrentUser(user) {
    const sessionUser = {
        id: user.id,
        name: user.name,
        email: user.email,
    };
    sessionStorage.setItem(CURRENT_USER_KEY, JSON.stringify(sessionUser));
}

//  logout

function logoutUser() {
    sessionStorage.removeItem(CURRENT_USER_KEY);
    window.location.href = "index.html";
}

// register

const registerForm = document.getElementById("registerForm");
if(registerForm){

registerForm.addEventListener("submit", function (evevt) {
    evevt.preventDefault();
    const name = document.getElementById("registerName").value.trim();
    const email = document
        .getElementById("registerEmail")
        .value.trim()
        .toLowerCase();
    const phone = document.getElementById("registerPhone").value.trim();
    const password = document.getElementById("registerPassword").value;
    const conformPassword = document.getElementById("conformPassword").value;
    const registerRole = document.getElementById("registerRole").value;
    const address = document.getElementById("registerAddress").value.trim();
    const terms = document.getElementById("terms").checked;
    
    //validation
    if(!name || !email || !phone || !password || !conformPassword){
        Swal.fire({
            icon: "Warning",
            title: "Missing Fields",
            text: "Please fill in all required fiels.",
            confirmButtonColor: "#fa4312"
        });
        return;
    }
    if(!terms){
        Swal.fire({
            icon: "Warning",
            title: "Terms Not Accepted",
            text: "Please accept the Terms & Conditions.",
            confirmButtonColor: "#fa4312"
        });
        return; 
    }

    // get user
    const users = getUsers();
    const existingUser = users.find((user) => {
        user.email === email;
    });

    if (existingUser) {
        Swal.fire({
            icon: "warning",
            tatle: "Email Already Exsits",
            text: "This email is already registerd.",
            confirmButtonText: "OK",
            confirmButtonText: "#fa4312",
        });
        return;
    }
    //password

    if (password.length < 6) {
        Swal.fire({
            icon: "erro",
            tatle: "Week password",
            text: "Password must contain at least 6 charaters.",
            confirmButtonText: "Try Again",
            confirmButtonText: "#fa4312",
        });
        return;
    }

    //confirm password

    if (password !== conformPassword) {
        Swal.fire({
            icon: "error",
            tatle: "Passwords Do not match",
            text: "Password and confirmPassword do not match",
            confirmButtonText: "Try Again",
            confirmButtonText: "#fa4312",
        });
        return;
    }
    //role 

    const roleMap = {
        guest: 0,
        receptionist: 1,
        manager: 2,
        admin: 3,
    }

    const roleNumber = roleMap[registerRole] ?? 0;

    // cerate user

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: password,
        role: roleNumber,
        address: address,
        emailVerifed: true,
        createdAt: new Date().toDateString(),
    };

    // add user

    users.push(newUser);

    // save to local stroge

    saveUsers(users);
    Swal.fire({
        icon: "success",
        title: "Account Created",
        text: `welcome ${name}! your account has been created succeessfully.`,
        confirmButtonText: "Continue",
        confirmButtonColor: "#fa4312",
    }).then(() => {
        registerForm.reset();
        window.location.href = "login.html";
    });
});
}

// login

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("loginEmail").value.trim().toLowerCase();
        const password = document.getElementById("loginPassword").value;

        // get user

        const users = getUsers();
        const user = users.find(user =>
            user.email === email && user.password === password
        );

        if (!user) {
            Swal.fire({
                icon: "error",
                title: "Login Filed",
                text: "Invild email or password",
                confirmButtonText: "Try Again",
                confirmButtonColor: "#fa4312",

            });
            return;
        }
        if (user.emailVerified === false) {
            Swal.fire({
                icon: "Warning",
                title: "Email not verified",
                text: "Please verify your email before logging in.",
                confirmButtonText: "Ok",
                confirmButtonColor: "#fa4312",
            });
            return;
        }

        if (user.role === undefined ||
            user.role === null
        ) {
            user.role = 0;
        }

        setCurrentUser(user);
        localStorage.setItem("loginTime", new Date().toISOString());
        window.location.href = "index.html";
    });
}

function requireLogin() {
    if (isLggedIn()) {
        return true;
    }
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
