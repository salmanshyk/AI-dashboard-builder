document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault(); // Page refresh hone se roko

    const fullName = document.querySelector("input[placeholder*='name']").value;
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    try {
        const response = await fetch("http://localhost:8000/api/auth/signup", {
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

        if (response.ok) {
            alert("Registration successful and saved to PostgreSQL! 🎉");
            // Chahe toh yahan login page par redirect kar sakte ho
        } else {
            alert("Error: " + (data.detail || "Something went wrong"));
        }
    } catch (error) {
        console.error("Connection error:", error);
        alert("Failed to connect to the backend server!");
    }
});