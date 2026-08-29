import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";
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
    const response = await fetch("http://127.0.0.1:8000/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

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
    <div className="min-h-screen bg-[#F8FAFC] flex">

      {/* LEFT */}
      <div className="w-full lg:w-1/2 flex flex-col">

        {/* Logo */}
        <div className="px-8 py-8 lg:px-16">

          <div className="flex items-center gap-3">

            <img
              src="/src/assets/ai-dashboard-logo.png.png"
              alt="AI Dashboard Builder"
              className="w-12 h-12 object-contain"
            />

            <div className="text-[#0F2942] font-bold text-xl leading-tight">
              AI Dashboard
              <br />
              Builder
            </div>

          </div>

        </div>

        {/* FORM */}
        <div className="flex-1 flex items-center justify-center px-6 pb-10">

          <div className="w-full max-w-[560px] bg-white border border-gray-200 rounded-xl shadow-sm p-8">

            <h1 className="text-3xl font-bold text-[#0F2942]">
              Create your account
            </h1>

            <p className="mt-2 text-gray-500">
              Start building AI-powered dashboards in minutes.
            </p>

            {/* Name */}
            <div className="mt-8">

              <label className="block text-sm font-semibold mb-2">
                Full name
              </label>

              <input
                type="text"
                placeholder="Jane Doe"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>

            {/* Email */}
            <div className="mt-5">

              <label className="block text-sm font-semibold mb-2">
                Email address
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
               />

            </div>

            {/* Password */}
            <div className="mt-5">

              <PasswordInput
                id="password"
                label="Password"
                value={password}
                placeholder="Create a password"
                onChange={setPassword}
              />

            </div>

            {/* Confirm Password */}
            <div className="mt-5">

              <PasswordInput
                id="confirmPassword"
                label="Confirm password"
                value={confirmPassword}
                placeholder="Confirm your password"
                onChange={setConfirmPassword}
              />

            </div>

            {/* Create Account */}
            <button
              type="button"
              onClick={handleRegister}
              className="w-full mt-6 py-3 rounded-lg bg-[#5668E8] text-white font-semibold hover:bg-[#4d5fdb]"
              >
                Create account
              </button>

            {/* Login */}
            <p className="text-center text-gray-500 mt-6">

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

      {/* RIGHT */}
      <div className="hidden lg:flex w-1/2 bg-[#EEFAFF] items-center justify-center">

        <div className="w-full max-w-[650px] px-12">

          <div className="flex justify-center mb-10">

            <img
              src={hero}
              alt="AI Dashboard"
              className="w-[380px] h-[380px] object-contain"
            />

          </div>

          <h2 className="text-4xl font-bold text-[#0F2942]">
            Transform data.
            <br />
            Build insights.
            <br />
            AI-driven dashboards.
          </h2>

          <p className="mt-6 text-lg text-gray-500">
            Turn raw datasets into clear dashboards with AI.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;