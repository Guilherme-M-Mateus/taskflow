import React from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext.jsx";
import Spinner from "../components/Shared/Spinner.jsx";

const NotFound = () => {
  const { user, loading } = useAuth();
  if (loading) return <Spinner fullPage />;

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4">
      {/* ── Subtle grid background ─────────── */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="relative w-full max-w-md animate-fade-in">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
          <p className="text-5xl font-bold text-primary-500 mb-4">404</p>
          <h1 className="text-2xl font-bold text-white">Page not found</h1>
          <p className="text-slate-500 text-sm mt-1 mb-8">The page you're looking for doesn't exist.</p>
          <Link
            to={user ? "/dashboard" : "/login"}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            {user ? "Go to Dashboard" : "Go to Login"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
