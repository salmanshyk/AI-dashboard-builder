import { useState, type FormEvent } from "react";
import logo from "../assets/ai-dashboard-logo.png.png";
import hero from "../assets/hero.png";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() && !phone.trim()) {
      alert("Please enter your email address or phone number.");
      return;
    }

    alert("Recovery link or OTP will be sent to your registered email or phone.");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F2942]">

      {/* HEADER */}
      <header className="flex items-start justify-between px-6 py-5">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="AI Dashboard Builder"
            className="w-11 h-11 object-contain"
          />

          <div>
            <h1 className="text-lg font-bold leading-tight">
              AI Dashboard
            </h1>
            <h1 className="text-lg font-bold leading-tight">
              Builder
            </h1>
          </div>
        </div>

    

      </header>


      {/* MAIN */}
      <main className="flex min-h-[calc(100vh-100px)]">

        {/* LEFT SIDE */}
        <section className="w-1/2 flex items-start justify-center px-5 py-8">

          <div className="w-full max-w-[500px] bg-white border border-slate-200 rounded-lg shadow-sm p-5">

            {/* TITLE */}
            <h2 className="text-2xl font-bold text-[#0F2942]">
              Recover Your Account
            </h2>

            <p className="mt-1 text-sm text-[#64748B]">
              Hi, Missed Your Password? 👋 Let's get you a new one!
            </p>


            {/* FORM */}
            <form onSubmit={handleSubmit} className="mt-5">

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Recovery Email Address
                </label>

                <div className="relative">

                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    ✉
                  </span>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your-email@example.com"
                    className="w-full h-10 rounded-md border border-slate-400 pl-10 pr-4 text-sm outline-none focus:border-[#536BEA] focus:ring-2 focus:ring-blue-100"
                  />

                </div>
              </div>


              {/* PHONE */}
              <div className="mt-4">

                <label className="block text-sm font-semibold mb-2">
                  Recovery Phone Number
                </label>

                <div className="relative">

                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    ☎
                  </span>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full h-10 rounded-md border border-slate-400 pl-10 pr-4 text-sm outline-none focus:border-[#536BEA] focus:ring-2 focus:ring-blue-100"
                  />

                </div>

              </div>


              {/* INFORMATION */}
              <p className="mt-4 text-sm text-[#64748B]">
                A recovery link or OTP will be sent to your registered
                email or phone number.
              </p>


              {/* BUTTON */}
              <button
                type="submit"
                className="w-full h-10 mt-5 rounded-md bg-[#536BEA] text-white text-sm font-semibold hover:bg-[#455DDB] transition"
              >
                Send Recovery Link
              </button>

            </form>


            {/* LOGIN */}
            <p className="text-center text-sm text-[#64748B] mt-4">
              Already have an account?{" "}
              <button
                type="button"
                className="text-[#475569] font-medium hover:text-[#536BEA]"
              >
                Log in
              </button>
            </p>

          </div>

        </section>


        {/* RIGHT SIDE */}
        <section className="flex w-1/2 bg-[#EFFAFF] items-center justify-center px-10">

          <div className="w-full max-w-[520px]">

            {/* AI IMAGE */}
            <div className="flex justify-center mb-6">

              <img
                src={hero}
                alt="AI Dashboard"
                className="w-[300px] h-[300px] object-contain"
              />

            </div>


            {/* RIGHT SIDE TEXT */}
            <h2 className="text-3xl font-bold leading-tight text-[#0F2942]">
              Transform data.
              <br />
              Build insights.
              <br />
              AI-driven dashboards.
            </h2>

            <p className="mt-4 text-base text-[#64748B]">
              Turn raw datasets into clear dashboards with AI.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default ForgotPassword;