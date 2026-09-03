import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    setLoading(true);

    try {
      /*
        AI Dashboard Builder Backend

        PC:
        http://10.53.8.143:8000

        Mobile:
        http://10.53.8.143:8000

        Using the PC's Wi-Fi IP allows both
        PC and mobile to access the same backend.
      */
      const API_BASE_URL = "";

      console.log("Login request URL:");
      console.log(`${API_BASE_URL}/api/auth/login`);

      const response = await fetch(
        `${API_BASE_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },

          body: JSON.stringify({
            email: email.trim(),
            password: password,
          }),
        }
      );

      console.log("Backend response status:", response.status);

      const data = await response.json();

      console.log("Backend response:", data);

      if (!response.ok) {
        const errorMessage =
          data?.detail || "Login failed. Please check your credentials.";

        alert(errorMessage);
        return;
      }

      /*
        Save JWT access token
      */
      if (data.access_token) {
        localStorage.setItem(
          "access_token",
          data.access_token
        );
      }

      alert("Login successful!");

      console.log("Login successful.");
      console.log("Access token saved.");

    } catch (error) {
      console.error("================================");
      console.error("LOGIN ERROR");
      console.error("================================");
      console.error(error);

      alert(
        "Unable to connect to the backend.\n\n" +
        "Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">

      {/* ================================
          LOGO
      ================================= */}

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


      {/* ================================
          CENTERED LOGIN
      ================================= */}

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-8 sm:pb-12">

        <div className="w-full max-w-[520px] bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-8">

          {/* HEADING */}

          <h1 className="text-2xl sm:text-3xl font-bold text-[#0F2942]">
            Welcome back
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Login to access your AI Dashboard.
          </p>


          {/* ================================
              EMAIL
          ================================= */}

          <div className="mt-6 sm:mt-8">

            <label className="block text-sm font-semibold text-[#0F2942] mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="your.email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />

          </div>


          {/* ================================
              PASSWORD
          ================================= */}

          <div className="mt-5">

            <div className="flex justify-between items-center mb-2 gap-2">

              <label className="text-sm font-semibold text-[#0F2942]">
                Password
              </label>

              <Link
                to="/forgot-password"
                className="text-xs sm:text-sm text-cyan-600 hover:underline"
              >
                Forgot password?
              </Link>

            </div>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />

          </div>


          {/* ================================
              SIGN IN
          ================================= */}

          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 hover:opacity-95 transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>


          {/* ================================
              OR
          ================================= */}

          <div className="flex items-center gap-4 my-6">

            <div className="flex-1 h-px bg-gray-200" />

            <span className="text-sm text-gray-400">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-200" />

          </div>


          {/* ================================
              GOOGLE
          ================================= */}

          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg py-3 font-medium text-[#0F2942] hover:bg-gray-50 transition"
          >
            <span className="font-bold text-blue-500 mr-2">
              G
            </span>

            Continue with Google
          </button>


          {/* ================================
              PHONE
          ================================= */}

          <button
            type="button"
            className="w-full border border-gray-300 rounded-lg py-3 mt-3 font-medium text-[#0F2942] hover:bg-gray-50 transition"
          >
            📱 Continue with Phone Number
          </button>


          {/* ================================
              REGISTER
          ================================= */}

          <p className="text-center text-sm text-gray-500 mt-6">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-cyan-600 font-semibold hover:underline"
            >
              Sign up
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;