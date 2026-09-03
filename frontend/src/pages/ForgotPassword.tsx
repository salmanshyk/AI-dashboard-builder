import { Link, useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();

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

      {/* CENTERED RECOVERY */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="w-full max-w-[520px] bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-8">

          <h1 className="text-2xl sm:text-3xl font-bold text-[#0F2942]">
            Recover Your Account
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Hi, Missed Your Password? 👋 Let's get you a new one!
          </p>

          {/* EMAIL */}
          <div className="mt-6 sm:mt-8">
            <label className="block text-sm font-semibold text-[#0F2942] mb-2">
              Recovery Email Address
            </label>

            <input
              type="email"
              placeholder="your-email@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* PHONE */}
          <div className="mt-5">
            <label className="block text-sm font-semibold text-[#0F2942] mb-2">
              Recovery Phone Number
            </label>

            <input
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* INFO */}
          <p className="text-gray-500 text-xs sm:text-sm mt-5 leading-relaxed">
            A recovery link or OTP will be sent to your registered
            email or phone number.
          </p>

          {/* RECOVERY BUTTON */}
          <button
            type="button"
            onClick={() => navigate("/change-password")}
            className="w-full mt-6 py-3 rounded-lg bg-[#5668E8] text-white font-semibold hover:bg-[#4d5fdb] transition"
          >
            Send Recovery Link
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

export default ForgotPassword;