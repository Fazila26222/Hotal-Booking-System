
document.addEventListener("DOMContentLoaded", function () {
    
    const resetForm = document.getElementById("resetForm");
    
    if (resetForm) {
        resetForm.addEventListener("submit", function (e) {
            e.preventDefault();
            
            const otpInput = document.getElementById("otpCode").value.trim();
            const newPassword = document.getElementById("newPassword").value;
            const confirmPassword = document.getElementById("confirmNewPassword").value;
            
           
            const resetData = JSON.parse(localStorage.getItem("passwordReset"));
            
            if (!resetData) {
                alert("No password reset request found. Please try again.");
                window.location.href = "forgot-password.html";
                return;
            }
            
            
            const tenMinutes = 10 * 60 * 1000;
            if (Date.now() - resetData.createdAt > tenMinutes) {
                alert("Verification code has expired. Please request a new one.");
                localStorage.removeItem("passwordReset");
                window.location.href = "forgot-password.html";
                return;
            }
            
          
            if (parseInt(otpInput) !== resetData.otp) {
                alert("Invalid verification code. Please try again.");
                return;
            }
            
            
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!passwordRegex.test(newPassword)) {
                alert("Password must be 8+ characters with uppercase, lowercase, number & symbol.");
                return;
            }
            
            
            if (newPassword !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
            
            // hashed password
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(newPassword, salt);
            
            //  localStorage
            const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));
            if (registeredUser && registeredUser.email === resetData.email) {
                registeredUser.password = hashedPassword;
                localStorage.setItem("registeredUser", JSON.stringify(registeredUser));
                
                
                localStorage.removeItem("passwordReset");
                
                alert("Password reset successful! Please log in with your new password.");
                window.location.href = "login.html";
            } else {
                alert("Something went wrong. Please try again.");
            }
        });
    }
    
});