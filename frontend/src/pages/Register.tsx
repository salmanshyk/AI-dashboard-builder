import { useState, type FormEvent } from "react";
import logo from "../assets/ai-dashboard-logo.png.png";
import hero from "../assets/hero.png";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Account created successfully!");
  };

  return (
    <div className="min-h-screen flex bg-[#F8FAFC]">

      {/* ================= LEFT SIDE ================= */}
      <div className="w-full lg:w-1/2 min-h-screen flex items-center justify-center px-6 py-10">

        <div className="w-full max-w-[550px]">

          {/* LOGO */}
          <div className="mb-6 flex items-center gap-3">

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


          {/* REGISTRATION CARD */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8">

            {/* TITLE */}
            <h2 className="text-3xl font-bold text-[#0F2942] mb-2">
              Create your account
            </h2>

            <p className="text-[#64748B] mb-7">
              Start building AI-powered dashboards in minutes.
            </p>


            {/* FORM */}
            <form onSubmit={handleSubmit}>

              {/* FULL NAME */}
              <div className="mb-4">

                <label className="block text-sm font-semibold mb-2 text-[#0F2942]">
                  Full name
                </label>

                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Jane Doe"
                  className="w-full h-12 rounded-lg border border-slate-300 px-4 outline-none focus:border-[#4F67E8] focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* EMAIL */}
              <div className="mb-4">

                <label className="block text-sm font-semibold mb-2 text-[#0F2942]">
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full h-12 rounded-lg border border-slate-300 px-4 outline-none focus:border-[#4F67E8] focus:ring-2 focus:ring-blue-100"
                />

              </div>


              {/* PASSWORD */}
              <div className="mb-4">

                <label className="block text-sm font-semibold mb-2 text-[#0F2942]">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="w-full h-12 rounded-lg border border-slate-300 px-4 pr-16 outline-none focus:border-[#4F67E8] focus:ring-2 focus:ring-blue-100"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[#4F67E8]"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>

                </div>

              </div>


              {/* CONFIRM PASSWORD */}
              <div className="mb-5">

                <label className="block text-sm font-semibold mb-2 text-[#0F2942]">
                  Confirm password
                </label>

                <div className="relative">

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full h-12 rounded-lg border border-slate-300 px-4 pr-16 outline-none focus:border-[#4F67E8] focus:ring-2 focus:ring-blue-100"
                  />

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


              {/* CREATE ACCOUNT BUTTON */}
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-[#536BEA] text-white font-semibold hover:bg-[#455DDB] transition"
              >
                Create account
              </button>

            </form>


            {/* LOGIN */}
            <p className="text-center text-sm text-[#64748B] mt-5">

              Already have an account?{" "}

              <button
                type="button"
                className="font-semibold text-[#4F67E8] hover:underline"
              >
                Log in
              </button>

            </p>

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

export default Register;