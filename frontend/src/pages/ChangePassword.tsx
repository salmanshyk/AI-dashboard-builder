import { useNavigate } from "react-router-dom";
import hero from "../assets/hero.png";

function ChangePassword() {

  const navigate = useNavigate();

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

          <div className="w-full max-w-[520px] bg-white border border-gray-200 rounded-xl shadow-sm p-8">

            <h1 className="text-3xl font-bold text-[#0F2942]">
              Change Password
            </h1>

            <p className="mt-2 text-gray-500">
              Set a new secure password for your AI Dashboard.
            </p>

            {/* Current */}
            <div className="mt-8">

              <label className="block text-sm font-semibold mb-2">
                Current Password
              </label>

              <input
                type="password"
                placeholder="Current Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>

            {/* New */}
            <div className="mt-5">

              <label className="block text-sm font-semibold mb-2">
                New Password
              </label>

              <input
                type="password"
                placeholder="New Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>

            {/* Confirm */}
            <div className="mt-5">

              <label className="block text-sm font-semibold mb-2">
                Confirm New Password
              </label>

              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500"
              />

            </div>

            {/* Update */}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="w-full mt-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600"
            >
              Update Password
            </button>

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

export default ChangePassword;