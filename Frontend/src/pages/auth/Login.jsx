import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;

      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/dashboard");
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <section className="min-h-screen bg-[#f5f1ea] flex items-center justify-center px-6 py-20">
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
              className="w-full bg-transparent border-b border-zinc-400 pb-4 outline-none text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-600 mb-3">Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full bg-transparent border-b border-zinc-400 pb-4 outline-none text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-900 text-white py-4 text-sm uppercase tracking-[0.15em] hover:bg-zinc-800 transition duration-300"
          >
            Sign In
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
