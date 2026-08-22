import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/ai-dashboard-logo.png.png";
import hero from "../assets/hero.png";

function ChangePassword() {
  const navigate = useNavigate();

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!currentPassword || !newPassword || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    if (newPassword.length < 6) {
      alert("New password must be at least 6 characters.");
      return;
    }

    alert("Password updated successfully!");

    // Later we can connect this to the backend.
  };

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">

      {/* ================= LEFT SIDE ================= */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-[550px]">

          {/* LOGO */}
          <div className="mb-10 flex items-center gap-3">

            <img
              src={logo}
              alt="AI Dashboard Builder"
              className="w-14 h-14 object-contain"
            />

            <div className="text-left">

              <h1 className="text-xl font-bold leading-tight text-[#0F2942]">
                AI Dashboard
              </h1>

              <h1 className="text-xl font-bold leading-tight text-[#0F2942]">
                Builder
              </h1>

            </div>

          </div>


          {/* CHANGE PASSWORD CARD */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

            {/* TITLE */}
            <h2 className="text-3xl font-bold text-[#0F2942] mb-1">
              Change Password
            </h2>

            <p className="text-sm text-[#64748B] mb-6">
              Set a new secure password for your AI Dashboard.
            </p>


            {/* FORM */}
            <form onSubmit={handleSubmit}>

              {/* ================= CURRENT PASSWORD ================= */}
              <div className="mb-4">

                <label className="block text-sm font-semibold mb-2 text-[#0F2942]">
                  Current Password
                </label>

                <div className="relative">

                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    🔒
                  </span>

                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Current Password"
                    className="w-full h-12 rounded-lg border border-slate-300 pl-10 pr-20 outline-none focus:border-[#4F67E8] focus:ring-2 focus:ring-blue-100"
                  />

                  {/* SHOW BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      setShowCurrentPassword(!showCurrentPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#4F67E8]"
                  >
                    {showCurrentPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>


              {/* ================= NEW PASSWORD ================= */}
              <div className="mb-4">

                <label className="block text-sm font-semibold mb-2 text-[#0F2942]">
                  New Password
                </label>

                <div className="relative">

                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    🔒
                  </span>

                  <input
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New Password"
                    className="w-full h-12 rounded-lg border border-slate-300 pl-10 pr-20 outline-none focus:border-[#4F67E8] focus:ring-2 focus:ring-blue-100"
                  />

                  {/* SHOW BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      setShowNewPassword(!showNewPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#4F67E8]"
                  >
                    {showNewPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>


              {/* ================= CONFIRM PASSWORD ================= */}
              <div className="mb-6">

                <label className="block text-sm font-semibold mb-2 text-[#0F2942]">
                  Confirm New Password
                </label>

                <div className="relative">

                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                    🔒
                  </span>

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    placeholder="Confirm New Password"
                    className="w-full h-12 rounded-lg border border-slate-300 pl-10 pr-20 outline-none focus:border-[#4F67E8] focus:ring-2 focus:ring-blue-100"
                  />

                  {/* SHOW BUTTON */}
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(!showConfirmPassword)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#4F67E8]"
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>


              {/* ================= UPDATE PASSWORD ================= */}
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-gradient-to-r from-[#536BEA] to-[#536BEA] text-white font-semibold hover:opacity-90 transition"
              >
                Update Password
              </button>

            </form>

          </div>


          {/* BACK TO LOGIN */}
          <div className="text-center mt-5">

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm font-semibold text-[#4F67E8] hover:underline"
            >
              Back to Login
            </button>

          </div>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}
      <div className="hidden lg:flex lg:w-1/2 min-h-screen bg-[#EEF9FC] items-center justify-center relative overflow-hidden">

        <div className="w-full max-w-[650px] px-12">

          {/* AI IMAGE */}
          <div className="flex justify-center mb-8">

            <img
              src={hero}
              alt="AI Dashboard"
              className="w-[330px] h-[330px] object-contain"
            />

          </div>


          {/* RIGHT SIDE TEXT */}
          <div>

            <h2 className="text-4xl font-bold leading-tight text-[#18324D]">

              Transform data.
              <br />

              Build insights.
              <br />

              AI-driven dashboards.

            </h2>


            <p className="mt-5 text-lg text-[#64748B]">
              Turn raw datasets into clear dashboards with AI.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ChangePassword;