 Stayora — Hotel Booking System

> Find Your Perfect Stay — Discover amazing hotels at unbeatable prices.

A modern, responsive hotel booking website built with HTML, CSS, and vanilla JavaScript — featuring secure user authentication with PBKDF2 password hashing.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-orange?style=for-the-badge&logo=github)](https://fazila26222.github.io/Hotal-Booking-System/)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow?style=for-the-badge&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#️-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Authentication](#-how-authentication-works)
- [Testing](#-testing-the-app)
- [Roadmap](#-roadmap)
- [Author](#-author)
- [License](#-license)
- [🇮🇷 نسخهٔ فارسی](#-نسخهٔ-فارسی)

---

## ✨ Features

### 🎨 User Interface

- Fully responsive design (desktop, tablet, mobile)
- Modern hotel cards with ratings, discounts, and amenities
- Hero slider with beautiful imagery
- Popular destinations grid
- Featured hotels section with live pricing
- Customer testimonials
- Special offers banner
- Multi-language support (i18n ready)
- SweetAlert2 notifications

### 🔐 Authentication System

- Secure registration with validation
  - Email format validation
  - Afghan phone number validation (+93 / 0 + 9 digits)
  - Strong password enforcement (8+ chars, uppercase, lowercase, number, special)
  - Password confirmation matching
- Secure login with PBKDF2 password hashing
  - 150,000 iterations of SHA-256
  - Unique random salt (16 bytes) per user
  - Password verification without storing plain text
- Role-based access (Guest / Receptionist / Manager / Admin)
- Email verification flow
- Session management with sessionStorage
- User profile dropdown (desktop + mobile)
- Logout functionality

### 🛡️ Security

- ✅ Passwords hashed with PBKDF2 (Web Crypto API)
- ✅ Random salt per password
- ✅ No plain-text passwords stored
- ✅ Session-based authentication
- ✅ sessionStorage for current user (no password)
- ✅ localStorage only for hashed user list

---

## 🖥️ Tech Stack

| Layer     | Technology                    |
| --------- | ----------------------------- |
| Structure | HTML5                         |
| Styling   | CSS3, Bootstrap 5             |
| Logic     | Vanilla JavaScript (ES6+)     |
| Icons     | Bootstrap Icons               |
| Fonts     | Vazirmatn                     |
| Alerts    | SweetAlert2                   |
| Security  | Web Crypto API (PBKDF2)       |
| Storage   | LocalStorage + SessionStorage |
| Hosting   | GitHub Pages                  |

---

## 📁 Project Structure

Hotal-Booking-System/
│
├── index.html Main landing page
├── login.html Login form
├── register.html Registration form
├── verify-email.html Email verification
├── forgot-password.html Password recovery
│
├── 📂 css/
│ ├── bootstrap.min.css
│ ├── variables.css
│ ├── style.css
│ ├── login.css
│ └── register.css
│
├── 📂 js/
│ ├── login.js 🔑 Core authentication logic
│ ├── index.js Homepage logic
│ └── bootstrap.bundle.min.js
│
├── 📂 icons/
│ ├── bootstrap-icons.min.css
│ └── 📂 fonts/
│ └── bootstrap-icons.woff
│
├── 📂 fonts/
│ └── Vazirmatn-Regular.ttf
│
├── 📂 images/
│ └── (hotel images, banners, backgrounds)
│
└── README.md

---

## 🚀 Getting Started

### Prerequisites

- A modern browser (Chrome, Firefox, Edge, Safari)
- A local server (required for crypto.subtle)

### Installation

1. Clone the repository

git clone https://github.com/fazila26222/Hotal-Booking-System.git
cd Hotal-Booking-System

2. Run a local server
   Using VS Code + Live Server:

- Install the Live Server extension
- Right-click index.html → Open with Live Server
Using Python:
python -m http.server 5500

Using
Node.js:

npx serve

3. Open in browser

http://127.0.0.1:5500/index.html

---

## 🔑 How Authentication Works

### Registration Flow

1. User fills the registration form
2. Validation — email, phone, password strength, matching passwords
3. Password is hashed using PBKDF2 (SHA-256, 150,000 iterations, 16-byte random salt)
4. Hashed password stored in localStorage under aw_user
5. Redirect to login page

### Login Flow

1. User enters email + password
2. System reads stored users from localStorage
3. Password is re-hashed with the stored salt
4. If hashes match → login successful
5. User data (without password) saved in sessionStorage
6. Redirect to homepage

### Storage Keys

| Key             | Storage        | Purpose                                          |
| --------------- | -------------- | ------------------------------------------------ |
| aw_user         | localStorage   | Array of all registered users (hashed passwords) |
| aw_current_user | sessionStorage | Currently logged-in user (no password)           |
| loginTime       | localStorage   | Timestamp of last login                          |
| justLoggedIn    | localStorage   | Flag for welcome animation                       |

---

## 🧪 Testing the App

### 1. Register a new account

- Go to **register.html**
- Fill the form:

  Name: Ahmad
  Email: ahmad@test.com
  Phone: 0700000000
  Password: Test@1234
  Confirm Password: Test@1234
  Role: Guest
  Address: Kabul
  Terms: ✅ Check

- Cl
  Registerer\*\*

### 2. Login

- Go to **login.html**
- Enter the same email and password
- You'll be redirected to the homepage

### 3. Verify hashing

Open DevTools Console and run:

JSON.parse(localStorage.getItem("aw_user"))[0].password

Should output:

"pbkdf2$<salt>$<hash>"

---

## ⚠️ Important Notes

### 🔒 HTTPS / Localhost Required

The crypto.subtle API **only works on HTTPS or localhost**. If you open HTML files directly (file://), hashing will fail.

✅ Works:

- http://localhost:5500
- https://fazila26222.github.io/...

❌ Doesn't work:

- file:///C:/Users/.../index.html

### 🔄 Cache Issues

If changes don't ahard refreshrd refresh\*\*:

Ctrl + Shift + R

---

## 🎯 Roadmap

- [x] Responsive homepage
- [x] User registration
- [x] Secure login (PBKDF2)
- [x] Session management
- [x] Role-based access
- [ ] Hotel booking system
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Backend API (Node.js + MongoDB)
- [ ] Real email verification

---

## 👩Fazila Ahmadiila Ahmadi\*\*

- GitHub: [@fazila26222](https://github.com/fazila26222)
- Project: [Hotal-Booking-System](https://github.com/fazila26222/Hotal-Booking-System)

---

## 📜 License

This project is licenseMIT LicenseIT License\*\* — feel free to use it for learning and personal projects.

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

<div alignMade with ❤️ by Fazila Ahmadiila Ahmadi**

🌟 _Find Your Perfect Stay_ 🌟

</div>

---

---

<!-- ═══════════════════════════════════════════════════════════ -->
<!--                        نسخهٔ فارسی                          -->
<!-- ═══════════════════════════════════════════════════════════ -->

<div dir="rtl">

# 🏨 استایورا — سیستم اقامت رویایی خود را پیدا کنید پیدا کنید\*\* — هتل‌های شگفت‌انگیز را با قیمت‌های فوق‌العاده کشف کنید.

یک وب‌سایت مدرن و واکنش‌گرا برای رزرو هتل، سHTML بCSSL**جاوااسکریپت خالصکریپت خالص** — همراه با سیستم احراز هویPBKDF2ش **PBKDF2**.

[![Live Demo](https://img.shields.io/badge/مشاهده%20سایت-آنلاین-orange?style=for-the-badge&logo=github)](https://fazila26222.github.io/Hotal-Booking-System/)

---

## 📑 فهرست مطالب

- [ویژگی‌ها](#-ویژگیها)
- [تکنولوژی‌ها](#️-تکنولوژیها)
- [ساختار پروژه](#-ساختار-پروژه)
- [نصب و اجرا](#-نصب-و-اجرا)
- [سیستم احراز هویت](#-سیستم-احراز-هویت)
- [تست پروژه](#-تست-پروژه)
- [نقشهٔ راه](#-نقشهٔ-راه)
- [نویسنده](#-نویسنده)

---

## ✨ ویژگی‌ها

GitHub
Fazila26222 - Overview
Fazila26222 has 4 repositories available. Follow their code on GitHub.

### 🎨 رابط کاربری

- طراحی کاملاً واکنش‌گرا (دسکتاپ، تبلت، موبایل)
- کارت‌های مدرن هتل با امتیاز، تخفیف و امکانات
- اسلایدر تصویری زیبا
- شبکهٔ مقاصد محبوب
- بخش هتل‌های ویژه با قیمت‌های زنده
- نظرات مشتریان
- بنر پیشنهادات ویژه
- پشتیبانی از چند زبان (آماده برای i18n)
- اعلان‌های SweetAlert2

### 🔐 سیستم احراز هویت

- ثبت‌نام امن با اعتبارسنجی کامل
  - بررسی فرمت ایمیل
  - بررسی شمارهٔ تلفن افغانستان (+93 یا 0 + ۹ رقم)
  - اجبار رمز قوی (۸+ کاراکتر، حروف بزرگ، کوچک، عدد، کاراکتر خاص)
  - تطابق رمز و تأیید رمز
- ورود امن با هش رمز PBKDF2
  - ۱۵۰٬۰۰۰ تکرار SHA-256
  - Salt تصادفی ۱۶ بایتی برای هر کاربر
  - تأیید رمز بدون ذخیرهٔ متن ساده
- دسترسی مبتنی بر نقش (مهمان / پذیرش / مدیر / ادمین)
- تأیید ایمیل
- مدیریت نشست با sessionStorage
- منوی پروفایل کاربر (دسکتاپ + موبایل)
- خروج از حساب

### 🛡️ امنیت

- ✅ رمزها با PBKDF2 هش می‌شوند (Web Crypto API)
- ✅ Salt تصادفی برای هر رمز
- ✅ هیچ رمز متنی ذخیره نمی‌شود
- ✅ احراز هویت مبتنی بر Session
- ✅ sessionStorage برای کاربر جاری (بدون رمز)
- ✅ localStorage فقط برای لیست کاربران هش‌شده

---

## 🖥️ تکنولوژی‌ها

| لایه       | تکنولوژی                      |
| ---------- | ----------------------------- |
| ساختار     | HTML5                         |
| استایل     | CSS3, Bootstrap 5             |
| منطق       | JavaScript خالص (ES6+)        |
| آیکون‌ها   | Bootstrap Icons               |
| فونت       | وزیرمتن (Vazirmatn)           |
| اعلان‌ها   | SweetAlert2                   |
| امنیت      | Web Crypto API (PBKDF2)       |
| ذخیره‌سازی | LocalStorage + SessionStorage |
| هاست       | GitHub Pages                  |

---

## 📁 ساختار پروژه

Hotal-Booking-System/
│
├── index.html صفحهٔ اصلی
├── login.html فرم ورود
├── register.html فرم ثبت‌نام
├── verify-email.html تأیید ایمیل
├── forgot-password.html بازیابی رمز
│
├── 📂 css/ فایل‌های استایل
├── 📂 js/
│ ├── login.js 🔑 منطق اصلی احراز هویت
│ ├── index.js منطق صفحهٔ اصلی
│ └── bootstrap.bundle.min.js
│
├── 📂 icons/ آیکون‌ها
├── 📂 fonts/ فونت‌ها
├── 📂 images/ تصاویر
│
└── README.md

---

## 🚀 نصب و اجرا

### پیش‌نیازها

- یک مرورگر مدرن (Chrome، Firefox، Edge، Safari)
- یک سرور محلی (برای crypto.subtle الزامی است)

### مراحل نصب

۱. کلون کردن پروژه

git clone https://github.com/fazila26222/Hotal-Booking-System.git
cd Hotal-Booking-System

۲. اجرای سرور محلی

با VS Code + Live Server:

- افزونهٔ Live Server را نصب کنید.
- روی index.html راست‌کلیک → Open with Live Server

با Python:

python -m http.server 5500

با
Node.js:

npx serve

۳. باز کردن در مرورگر

http://127.0.0.1:5500/index.html

---

## 🔑 سیستم احراز هویت

### فرآیند ثبت‌نام

۱. کاربر فرم ثبت‌نام را پر می‌کند
۲. اعتبارسنجی — ایمیل، تلفن، قدرت رمز، تطابق رمزها
۳. رمز با PBKDF2 هش می‌شود (SHA-256، ۱۵۰٬۰۰۰ تکرار، Salt تصادفی ۱۶ بایتی)
۴. رمز هش‌شده در localStorage با کلید aw_user ذخیره می‌شود
۵. هدایت به صفحهٔ ورود

### فرآیند ورود

۱. کاربر ایمیل و رمز را وارد می‌کند
۲. سیستم لیست کاربران را از localStorage می‌خواند
۳. رمز با Salt ذخیره‌شده دوباره هش می‌شود
۴. اگر هش‌ها برابر بودند → ورود موفق
۵. اطلاعات کاربر (بدون رمز) در sessionStorage ذخیره می‌شود
۶. هدایت به صفحهٔ اصلی

### کلیدهای ذخیره‌سازی

| کلید            | محل            | کاربرد                         |
| --------------- | -------------- | ------------------------------ |
| aw_user         | localStorage   | لیست همهٔ کاربران (رمز هش‌شده) |
| aw_current_user | sessionStorage | کاربر جاری (بدون رمز)          |
| loginTime       | localStorage   | زمان آخرین ورود                |
| justLoggedIn    | localStorage   | پرچم انیمیشن خوش‌آمدگویی       |

---

## 🧪 تست پروژه

### ۱. ثبت‌نام کاربر جدید

- برو به **register.html**
- فرم را با این اطلاعات پر کن:

  نام: احمد
  ایمیل: ahmad@test.com
  تلفن: 0700000000
  رمز: Test@1234
  تأیید رمز: Test@1234
  نقش: Guest
  آدرس: Kabul
  قوانین: ✅ تیک بزن

- Registerer\*\* کلیک کن

### ۲. ورود

- برو به **login.html**
- با همان ایمیل و رمز وارد شو
- به صفحهٔ اصلی هدایت می‌شوی

### ۳. تأیید هش رمز

در Console مرورگر این را اجرا کن:

JSON.parse(localStorage.getItem("aw_user"))[0].password

باید خروجی این باشد:

"pbkdf2$<salt>$<hash>"

---

## ⚠️ نکات مهم

### 🔒 نیاز به HTTPS یا Localhost

API crypto.subtle فقط روی HTTPS یا localhost کار می‌کند. اگر فایل HTML را مستقیماً باز کنید (file://)، هش کردن ناموفق می‌شود.

✅ کار می‌کند:

- http://localhost:5500
- https://fazila26222.github.io/...

❌ کار نمی‌کند:

- file:///C:/Users/.../index.html

### 🔄 مشکل کش

اگر تغییرات نمایش داده نشد، رفرش سخت بزنید:

Ctrl + Shift + R

---

## 🎯 نقشهٔ راه

- [x] صفحهٔ اصلی واکنش‌گرا
- [x] ثبت‌نام کاربر
- [x] ورود امن (PBKDF2)
- [x] مدیریت نشست
- [x] دسترسی مبتنی بر نقش
- [ ] سیستم رزرو هتل
- [ ] ادغام پرداخت
- [ ] داشبورد ادمین
- [ ] بک‌اند (Node.js + MongoDB)
- [ ] تأیید ایمیل واقعی

---

## 👩‍💻 نویسنده

فضیله احمدی

- گیت‌هاب: [@fazila26222](https://github.com/fazila26222)
- پروژه: [Hotal-Booking-System](https://github.com/fazila26222/Hotal-Booking-System)

---

## 📜 لایسنس

این پروژه تحت لایسنس MIT منتشر شده است — آزادانه برای یادگیری و پروژه‌های شخصی استفاده کنید.

---

## ⭐ حمایت کنید

اگر این پروژه را دوست داشتید، لطفاً یک ⭐ در گیت‌هاب بدهید!

--

<div align="center">
ساخته‌شده توسط فاضله احمدی

🌟 _اقامت رویایی خود را پیدا کنید_ 🌟

</div>
</div>
GitHub
Fazila26222 - Overview
Fazila26222 has 4 repositories available. Follow their code on GitHub.
