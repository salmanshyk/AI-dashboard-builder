import { useState, type FormEvent } from "react";
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
    <main className="min-h-screen bg-slate-50 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <div className="w-full max-w-7xl min-h-[720px] overflow-hidden rounded-3xl bg-white shadow-xl grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE */}
        <section className="flex flex-col justify-center px-6 py-8 sm:px-10 lg:px-16">
          {/* Branding */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-lg font-bold text-white">
              AI
            </div>

            <div className="font-bold leading-tight text-slate-700">
              <div>AI Dashboard</div>
              <div>Builder</div>
            </div>
          </div>

          {/* Login Card */}
          <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h1 className="text-3xl font-bold text-slate-800">
              Welcome back
            </h1>

            <p className="mt-2 text-slate-500">
              Log in to continue building AI-powered dashboards.
            </p>

            <form onSubmit={handleSubmit} className="mt-7 space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-bold text-slate-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-slate-800 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
                />
              </div>

              {/* Password */}
              <PasswordInput
                id="password"
                label="Password"
                value={password}
                placeholder="Enter your password"
                onChange={setPassword}
              />

              {/* Forgot Password */}
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-sm font-semibold text-indigo-600 hover:underline"
                >
                  Forgot password?
                </button>
              </div>

              {/* Error */}
              {error && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600"
                >
                  {error}
                </div>
              )}

              {/* Success */}
              {success && (
                <div
                  role="status"
                  className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-600"
                >
                  {success}
                </div>
              )}

              {/* Login */}
              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 py-3 font-semibold text-white shadow-md transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Log In
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs text-slate-400">
                OR CONTINUE WITH
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>

            {/* Social Login Buttons */}
            <div className="mt-6 flex flex-col gap-3">
              {/* Google */}
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <span className="text-lg font-bold text-[#4285F4]">G</span>
                <span>Continue with Google</span>
              </button>

              {/* Microsoft */}
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <span className="grid grid-cols-2 gap-[2px]">
                  <span className="h-[9px] w-[9px] bg-[#F25022]" />
                  <span className="h-[9px] w-[9px] bg-[#7FBA00]" />
                  <span className="h-[9px] w-[9px] bg-[#00A4EF]" />
                  <span className="h-[9px] w-[9px] bg-[#FFB900]" />
                </span>

                <span>Continue with Microsoft</span>
              </button>

              {/* Phone Number */}
              <button
                type="button"
                className="flex h-12 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 font-medium text-slate-700 transition hover:bg-slate-50"
              >
                <span className="text-lg">📱</span>
                <span>Continue with Phone Number</span>
              </button>
            </div>

            {/* Register */}
            <p className="mt-6 text-center text-sm text-slate-500">
              Don't have an account?{" "}
              <button
                type="button"
                className="font-semibold text-indigo-600 hover:underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="relative hidden overflow-hidden bg-gradient-to-br from-slate-50 to-cyan-50 lg:block">
          {/* AI Graphic */}
          <div className="absolute left-1/2 top-16 h-80 w-[520px] -translate-x-1/2">
            {/* Connection lines */}
            <div className="absolute left-28 top-20 h-px w-44 rotate-[20deg] bg-cyan-300" />
            <div className="absolute left-64 top-20 h-px w-40 -rotate-[18deg] bg-cyan-300" />
            <div className="absolute left-28 top-48 h-px w-44 -rotate-[20deg] bg-cyan-300" />
            <div className="absolute left-64 top-48 h-px w-40 rotate-[20deg] bg-cyan-300" />

            {/* Nodes */}
            <div className="absolute left-20 top-12 h-5 w-5 rounded-full bg-cyan-400" />
            <div className="absolute right-20 top-12 h-5 w-5 rounded-full bg-cyan-400" />
            <div className="absolute left-16 top-56 h-5 w-5 rounded-full bg-cyan-400" />
            <div className="absolute right-24 top-56 h-5 w-5 rounded-full bg-cyan-400" />

            {/* AI Core */}
            <div className="absolute left-1/2 top-24 flex h-28 w-28 -translate-x-1/2 items-center justify-center rounded-full border-8 border-white/50 bg-gradient-to-br from-indigo-500 to-cyan-400 text-3xl font-bold text-white shadow-xl">
              AI
            </div>
          </div>

          {/* Hero */}
          <div className="absolute bottom-20 left-12 right-10 xl:left-16">
            <h2 className="text-4xl font-semibold leading-tight text-slate-800 xl:text-5xl">
              Welcome to smarter
              <br />
              data decisions.
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">
              Turn your data into meaningful insights with AI-powered
              dashboards.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Login;