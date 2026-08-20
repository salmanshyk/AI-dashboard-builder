document.addEventListener("DOMContentLoaded", () => {
    // Sign In button ko uske text ya button tag se dhoond rahe hain
    const buttons = document.querySelectorAll("button");
    let signInBtn = null;
    
    buttons.forEach(btn => {
        if (btn.innerText.includes("Sign In") || btn.innerText.includes("Log In")) {
            signInBtn = btn;
        }
    });

    if (!signInBtn) {
        signInBtn = document.querySelector("button"); // Fallback
    }

    if (signInBtn) {
        signInBtn.addEventListener("click", async (e) => {
            e.preventDefault(); // Page reload hone se roko
            console.log("Sign in button clicked!");

            // Email aur Password inputs ko pakdo
            const emailInput = document.querySelector("input[type='email']") || document.querySelector("input[placeholder*='email' i]");
            const passwordInput = document.querySelector("input[type='password']") || document.querySelector("input[placeholder*='password' i]");

            if (!emailInput || !passwordInput) {
                alert("Email ya Password input field nahi mil raha HTML mein!");
                return;
            }

            const email = emailInput.value;
            const password = passwordInput.value;

            console.log("Sending login request for:", email);

            try {
                const response = await fetch("http://localhost:8000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    }),
                });

                const data = await response.json();
                console.log("Response received:", data);

                if (response.ok) {
                    // JWT token save karo
                    localStorage.setItem("token", data.access_token);
                    alert("Login successful! Redirecting to Dashboard... 🎉");
                    
                    // Dashboard par redirect karo
                    window.location.href = "../dashboard/index.html"; 
                } else {
                    alert("Error: " + (data.detail || "Invalid email or password"));
                }
            } catch (error) {
                console.error("Connection error:", error);
                alert("Failed to connect to the backend server!");
            }
        });
    } else {
        console.error("Sign In button nahi mila!");
    }
});

// Extra buttons ke errors hatane ke liye dummy functions
function googleLogin() {
    alert("Google login feature coming soon!");
}

function microsoftLogin() {
    alert("Microsoft login feature coming soon!");
}

function phoneLogin() {
    alert("Phone login feature coming soon!");
}