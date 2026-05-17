import { Link } from "react-router-dom";
const Register = () => {
  return (
    <section className="min-h-screen bg-[#f5f1ea] flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-zinc-500 mb-5">
            Create Account
          </p>

          <h1 className="text-5xl tracking-[-0.06em] font-semibold text-zinc-900 mb-4">
            Join lenalena
          </h1>

          <p className="text-zinc-600 leading-relaxed">
            Create your account to access exclusive collections and seasonal
            releases.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-8">
          <div>
            <label className="block text-sm text-zinc-600 mb-3">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full bg-transparent border-b border-zinc-400 pb-4 outline-none text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-600 mb-3">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-transparent border-b border-zinc-400 pb-4 outline-none text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-600 mb-3">Password</label>

            <input
              type="password"
              placeholder="Create a password"
              className="w-full bg-transparent border-b border-zinc-400 pb-4 outline-none text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-zinc-900 text-white py-4 text-sm uppercase tracking-[0.15em] hover:bg-zinc-800 transition duration-300"
          >
            Create Account
          </button>
        </form>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-zinc-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-zinc-900 border-b border-zinc-900 pb-[1px] hover:opacity-60 transition"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Register;
