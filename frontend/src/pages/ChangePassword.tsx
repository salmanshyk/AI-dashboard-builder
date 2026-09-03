import { useNavigate } from "react-router-dom";

function ChangePassword() {
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

      {/* CENTERED CHANGE PASSWORD */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pb-8 sm:pb-12">
        <div className="w-full max-w-[520px] bg-white border border-gray-200 rounded-xl shadow-sm p-5 sm:p-8">

          <h1 className="text-2xl sm:text-3xl font-bold text-[#0F2942]">
            Change Password
          </h1>

          <p className="mt-2 text-sm sm:text-base text-gray-500">
            Set a new secure password for your AI Dashboard.
          </p>

          {/* CURRENT PASSWORD */}
          <div className="mt-6 sm:mt-8">
            <label className="block text-sm font-semibold text-[#0F2942] mb-2">
              Current Password
            </label>

            <input
              type="password"
              placeholder="Current Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* NEW PASSWORD */}
          <div className="mt-5">
            <label className="block text-sm font-semibold text-[#0F2942] mb-2">
              New Password
            </label>

            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mt-5">
            <label className="block text-sm font-semibold text-[#0F2942] mb-2">
              Confirm New Password
            </label>

            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* UPDATE PASSWORD */}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 transition"
          >
            Update Password
          </button>

        </div>
      </div>
    </div>
  );
}

export default ChangePassword;