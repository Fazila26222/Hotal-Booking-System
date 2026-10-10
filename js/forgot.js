document.addEventListener("DOMContentLoaded", function () {
    
    const forgotForm = document.getElementById("forgotForm");
    
    if (forgotForm) {
        forgotForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const emailInput = document.getElementById("forgotEmail");
            const email = emailInput.value.trim();
            
           
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }
            
            
            const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
            
            if (!registeredUser || registeredUser.email !== email) {
                alert("No account found with this email address.");
                return;
            }
            
          
            const otpCode = Math.floor(100000 + Math.random() * 900000);
            
         
            const resetData = {
                email: email,
                otp: otpCode,
                createdAt: Date.now()
            };
            localStorage.setItem("passwordReset", JSON.stringify(resetData));
           
            alert('Your verification code is: ${otpCode}\n\n(In a real app, this would be sent to your email.)');
            
          
            window.location.href = "reset-password.html";
        });
    }
    
});
