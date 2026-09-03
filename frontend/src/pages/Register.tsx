import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../components/auth/PasswordInput";

function Register() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = async () => {
    if (!email || !password || !confirmPassword) {
      alert("Please fill all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.detail || "Registration failed.");
        return;
      }

      alert("Account created successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Unable to connect to the backend.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">

      {/* LOGO */}
      <div className="w-full px-6 py-6 sm:px-8 sm:py-8">
        <div className="flex items-center gap-3">
          <img
            src="/src/assets/ai-dashboard-logo.png.png"
            alt="AI Dashboard Builder"
            className="w-11 h-11 sm:w-12 sm:h-12 object-contain"
          />

          <div className="text-[#0F2942] font-bold text-lg sm:text-xl leading-tight">
            AI Dashboard
            <br />
            Builder
          </div>
        </div>
      </div>

      {/* CENTERED REGISTER */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="w-full max-w-[560px] bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-8">

          <h1 className="text-2xl sm:text-3xl font-bold text-[#0F2942]">
            Create your account
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Start building AI-powered dashboards in minutes.
          </p>

          {/* FULL NAME */}
          <div className="mt-6 sm:mt-8">
            <label className="block text-sm font-semibold text-[#0F2942] mb-2">
              Full name
            </label>

            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* EMAIL */}
          <div className="mt-5">
            <label className="block text-sm font-semibold text-[#0F2942] mb-2">
              Email address
            </label>

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="mt-5">
            <PasswordInput
              id="password"
              label="Password"
              value={password}
              placeholder="Create a password"
              onChange={setPassword}
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mt-5">
            <PasswordInput
              id="confirmPassword"
              label="Confirm password"
              value={confirmPassword}
              placeholder="Confirm your password"
              onChange={setConfirmPassword}
            />
          </div>

          {/* CREATE ACCOUNT */}
          <button
            type="button"
            onClick={handleRegister}
            className="w-full mt-6 py-3 rounded-lg bg-[#5668E8] text-white font-semibold hover:bg-[#4d5fdb] transition"
          >
            Create account
          </button>

          {/* LOGIN */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}

            <Link
              to="/login"
              className="text-[#0F2942] font-semibold hover:underline"
            >
              Log in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Register;