import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    setProgress(0);

    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 12;

      if (value > 90) value = 90;

      setProgress(Math.floor(value));
    }, 250);

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      clearInterval(interval);

      if (response.ok) {
        setProgress(100);

        setTimeout(() => {
          navigate("/dashboard");
        }, 400);
      } else {
        console.error(data.message);
        setLoading(false);
        setProgress(0);
      }
    } catch (error) {
      clearInterval(interval);
      setLoading(false);
      setProgress(0);
      console.error("Login failed", error);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#f5f1ea] flex items-center justify-center px-6 py-20">
      {/* Progress Bar */}
      {loading && (
        <div className="fixed top-0 left-0 w-full z-50">
          <div
            className="h-1 bg-zinc-900 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="mb-14 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-5">
            Welcome Back
          </p>

          <h1 className="text-5xl tracking-[-0.06em] font-semibold text-zinc-900 mb-4">
            Sign in
          </h1>

          <p className="text-zinc-600 leading-relaxed">
            Access your account and continue exploring curated collections.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm text-zinc-600 mb-3">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              disabled={loading}
              className="w-full bg-transparent border-b border-zinc-400 pb-4 outline-none text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 transition disabled:opacity-50"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-600 mb-3">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              disabled={loading}
              className="w-full bg-transparent border-b border-zinc-400 pb-4 outline-none text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 transition disabled:opacity-50"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-zinc-900 text-white py-4 text-sm uppercase tracking-[0.15em] hover:bg-zinc-800 disabled:bg-zinc-700 disabled:cursor-not-allowed transition duration-300"
          >
            {loading ? `Signing In... ${progress}%` : "Sign In"}
          </button>
        </form>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-zinc-600">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-zinc-900 border-b border-zinc-900 pb-[1px] hover:opacity-60 transition"
          >
            Create Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;