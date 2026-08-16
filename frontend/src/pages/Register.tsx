import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleRegister = async (e: any) => {
    e.preventDefault();
    setStatus('Creating account...');

    try {
      // Yahan FastAPI ka local address hai (Check kar lena port 8000 hi ho)
      const response = await fetch('http://localhost:8000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('✅ Account Created Successfully!');
        setEmail('');
        setPassword('');
      } else {
        setStatus(`❌ Error: ${data.detail || 'Registration failed'}`);
      }
   } catch (error) {
      // Is line ko update kar do
      setStatus('❌ Unable to connect to backend server. Please check if the server is running.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#475569] mb-2">Create an Account</h2>
        <p className="text-center text-gray-500 mb-8">Start building AI-powered dashboards today</p>
        
        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#4F46E5]"
          />
          <button
            type="submit"
            className="w-full bg-[#4F46E5] text-white p-3 rounded font-bold hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Status Message Dikhane ke liye */}
        {status && (
          <div className="mt-4 text-center font-medium text-sm text-gray-700">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}