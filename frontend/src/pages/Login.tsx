import { useState, type FormEvent } from "react";
import logo from "../assets/ai-dashboard-logo.png.png";
import hero from "../assets/hero.png";
import PasswordInput from "../components/auth/PasswordInput";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setSuccess("Login details are valid!");
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC]">

      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

        {/* ================= LEFT SIDE ================= */}
        <section className="flex flex-col px-8 py-8 sm:px-12 lg:px-16">

          {/* LOGO - TOP LEFT */}
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="AI Dashboard Builder"
              className="w-12 h-12 object-contain"
            />

            <div className="font-bold leading-tight text-[#0F2942] text-xl">
              <div>AI Dashboard</div>
              <div>Builder</div>
            </div>

          </div>


          {/* LOGIN CONTENT */}
          <div className="flex flex-1 items-center justify-center py-10">

            <div className="w-full max-w-[540px]">

              {/* LOGIN CARD */}
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">

                {/* TITLE */}
                <h1 className="text-3xl font-bold text-[#0F2942]">
                  Welcome back
                </h1>

                <p className="mt-2 text-[#64748B]">
                  Login to access your AI Dashboard.
                </p>


                {/* FORM */}
                <form
                  onSubmit={handleSubmit}
                  className="mt-7"
                >

                  {/* EMAIL */}
                  <div className="mb-5">

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-bold text-[#0F2942]"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      placeholder="your.email@example.com"
                      className="w-full h-12 rounded-lg border border-slate-300 bg-white px-4 text-[#0F2942] outline-none transition focus:border-[#536BEA] focus:ring-2 focus:ring-blue-100"
                    />

                  </div>


                  {/* PASSWORD */}
                  <div className="mb-5">

                    <div className="mb-2 flex items-center justify-between">

                      <label
                        htmlFor="password"
                        className="text-sm font-bold text-[#0F2942]"
                      >
                        Password
                      </label>

                      <button
                        type="button"
                        className="text-sm font-medium text-[#18A9C7] hover:underline"
                      >
                        Forgot password?
                      </button>

                    </div>

                    <PasswordInput
                      id="password"
                      label=""
                      value={password}
                      placeholder="Enter your password"
                      onChange={setPassword}
                    />

                  </div>


                  {/* ERROR MESSAGE */}
                  {error && (
                    <div
                      role="alert"
                      className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                    >
                      {error}
                    </div>
                  )}


                  {/* SUCCESS MESSAGE */}
                  {success && (
                    <div
                      role="status"
                      className="mb-5 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600"
                    >
                      {success}
                    </div>
                  )}


                  {/* SIGN IN BUTTON */}
                  <button
                    type="submit"
                    className="w-full h-14 rounded-full bg-gradient-to-r from-[#4F46E5] to-[#18B6CC] text-lg font-semibold text-white transition hover:opacity-90"
                  >
                    Sign In
                  </button>

                </form>


                {/* OR DIVIDER */}
                <div className="my-7 flex items-center gap-3">

                  <div className="h-px flex-1 bg-slate-200" />

                  <span className="text-sm text-[#94A3B8]">
                    OR
                  </span>

                  <div className="h-px flex-1 bg-slate-200" />

                </div>


                {/* GOOGLE */}
                <button
                  type="button"
                  className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white font-medium text-[#0F2942] transition hover:bg-slate-50"
                >

                  <span className="text-xl font-bold text-[#4285F4]">
                    G
                  </span>

                  <span>
                    Continue with Google
                  </span>

                </button>


                {/* MICROSOFT */}
                <button
                  type="button"
                  className="mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white font-medium text-[#0F2942] transition hover:bg-slate-50"
                >

                  <span className="grid grid-cols-2 gap-[2px]">
                    <span className="h-[8px] w-[8px] bg-[#F25022]" />
                    <span className="h-[8px] w-[8px] bg-[#7FBA00]" />
                    <span className="h-[8px] w-[8px] bg-[#00A4EF]" />
                    <span className="h-[8px] w-[8px] bg-[#FFB900]" />
                  </span>

                  <span>
                    Continue with Microsoft
                  </span>

                </button>


                {/* PHONE */}
                <button
                  type="button"
                  className="mt-3 flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white font-medium text-[#0F2942] transition hover:bg-slate-50"
                >

                  <span className="text-lg">
                    📱
                  </span>

                  <span>
                    Continue with Phone Number
                  </span>

                </button>


                {/* SIGN UP */}
                <p className="mt-6 text-center text-sm text-[#64748B]">

                  Don't have an account?{" "}

                  <button
                    type="button"
                    className="font-semibold text-[#536BEA] hover:underline"
                  >
                    Sign up
                  </button>

                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= RIGHT SIDE ================= */}
        <section className="relative hidden overflow-hidden bg-[#EEF9FC] lg:block">

         


          {/* AI IMAGE */}
          <div className="absolute left-1/2 top-[80px] -translate-x-1/2">

            <img
              src={hero}
              alt="AI Dashboard"
              className="w-[380px] h-[380px] object-contain"
            />

          </div>


          {/* RIGHT SIDE TEXT */}
          <div className="absolute bottom-[65px] left-16 xl:left-20">

            <h2 className="text-5xl font-bold leading-tight text-[#243B53]">

              TRANSFORM DATA.
              <br />

              BUILD INSIGHTS.

            </h2>

            <p className="mt-5 text-lg text-[#64748B]">
              Turn raw datasets into clear dashboards with AI.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}

export default Login;