import { Link } from "react-router-dom";
import hero from "../assets/hero.png";

function Login() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">

      {/* LEFT SIDE */}
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

          <div className="w-full max-w-[520px] bg-white border border-gray-200 rounded-xl shadow-sm p-8">

            <h1 className="text-3xl font-bold text-[#0F2942]">
              Welcome back
            </h1>

            <p className="mt-2 text-gray-500">
              Login to access your AI Dashboard.
            </p>

            {/* Email */}
            <div className="mt-8">
              <label className="block text-sm font-semibold text-[#0F2942] mb-2">
                Email Address
              </label>

              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            {/* Password */}
            <div className="mt-5">

              <div className="flex justify-between items-center mb-2">

                <label className="text-sm font-semibold text-[#0F2942]">
                  Password
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm text-cyan-600 hover:underline"
                >
                  Forgot password?
                </Link>

              </div>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>

            {/* Login */}
            <button
              type="button"
              className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500"
            >
              Sign In
            </button>

            {/* OR */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-sm text-gray-400">OR</span>
              <div className="flex-1 h-px bg-gray-200" />
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full border border-gray-300 rounded-lg py-3 font-medium text-[#0F2942] hover:bg-gray-50"
            >
              <span className="font-bold text-blue-500 mr-2">G</span>
              Continue with Google
            </button>

            {/* Phone */}
            <button
              type="button"
              className="w-full border border-gray-300 rounded-lg py-3 mt-3 font-medium text-[#0F2942] hover:bg-gray-50"
            >
              📱 Continue with Phone Number
            </button>

            {/* Register */}
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


      {/* RIGHT SIDE */}
      <div className="hidden lg:flex w-1/2 bg-[#EEFAFF] items-center justify-center relative overflow-hidden">

        <div className="w-full max-w-[650px] px-12">

          <div className="flex justify-center mb-10">
            <img
              src={hero}
              alt="AI Dashboard"
              className="w-[380px] h-[380px] object-contain"
            />
          </div>

          <h2 className="text-4xl font-bold text-[#0F2942]">
            TRANSFORM DATA.
            <br />
            BUILD INSIGHTS.
          </h2>

          <p className="mt-6 text-lg text-gray-500">
            Turn raw datasets into clear dashboards with AI.
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;