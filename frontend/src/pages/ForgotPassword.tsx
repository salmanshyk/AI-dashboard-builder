import { useState, type FormEvent } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess("Reset link has been sent to your email.");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] px-4 py-8">

      {/* AI Background Graphic */}
      <div className="pointer-events-none fixed right-[-180px] top-[180px] hidden lg:block">
        <div className="relative h-[450px] w-[450px]">

          <div className="absolute right-0 top-16 flex h-64 w-64 items-center justify-center rounded-full border-[30px] border-cyan-200/40 bg-cyan-500">
            <span className="text-5xl font-bold text-white">
              AI
            </span>
          </div>

          <div className="absolute left-10 top-0 h-24 w-24 rounded-full bg-cyan-300/40" />

          <div className="absolute left-20 top-16 h-1 w-52 rotate-[25deg] bg-cyan-300/50" />

          <div className="absolute left-32 top-72 h-14 w-14 rounded-full bg-cyan-300/30" />

          <div className="absolute left-32 top-28 h-1 w-40 -rotate-[65deg] bg-cyan-300/50" />

        </div>
      </div>

      {/* Main */}
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">

        <div className="w-full max-w-[590px]">

          {/* Card */}
          <div className="rounded-xl border border-slate-200 bg-white px-7 py-10 shadow-lg sm:px-12">

            {/* Logo */}
            <div className="mb-8 flex justify-center">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#4F46E5] text-lg font-bold text-white shadow-md">
                  AI
                </div>

                <div className="text-[17px] font-bold leading-tight text-slate-800">
                  <div>AI Dashboard</div>
                  <div>Builder</div>
                </div>

              </div>

            </div>

            {/* Heading */}
            <div className="text-center">

              <h1 className="text-4xl font-semibold text-slate-600">
                Forgot Password?
              </h1>

              <p className="mt-3 text-lg leading-7 text-slate-500">
                No worries! Enter your registered email address and we'll
                <br className="hidden sm:block" />
                send you a reset link.
              </p>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8">

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-600"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="h-12 w-full rounded-lg border border-slate-300 px-4 text-base text-slate-700 outline-none transition focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20"
              />

              {error && (
                <p className="mt-2 text-sm font-medium text-red-500">
                  {error}
                </p>
              )}

              {success && (
                <p className="mt-2 text-sm font-medium text-green-600">
                  {success}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                className="mt-5 h-12 w-full rounded-lg bg-[#4F46E5] font-semibold text-white transition hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              >
                Send reset email
              </button>

            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">

              <button
                type="button"
                onClick={() => {
                  window.location.href = "/login";
                }}
                className="font-medium text-[#06B6D4] transition hover:text-[#4F46E5]"
              >
                Back to Log in
              </button>

            </div>

          </div>

          {/* Footer */}
          <footer className="mt-24 text-center text-sm text-slate-500">
            © Copyright. 2026 AI Dashboard Builder
            <span className="mx-2">·</span>
            <span className="underline">Terms</span>
            <span className="mx-2">·</span>
            <span className="underline">Privacy</span>
          </footer>

        </div>

      </main>
    </div>
  );
}

export default ForgotPassword;