'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter()
  // Form State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [remember, setRemember] = useState(false);

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (isSignUp && password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match.' });
      return;
    }

    setLoading(true);

    // Prepare FormData payload exactly as requested
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    if (isSignUp) {
      formData.append('confirmPassword', confirmPassword);
    } else {
      // Only include remember field if checked
      if (remember) {
        formData.append('remember', 'ok');
      }
    }

    const endpoint = isSignUp 
      ? 'api/signup' 
      : 'api/login';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: isSignUp ? 'Account created successfully!' : 'Signed in successfully!' 
        });
        if(isSignUp){ 
          router.push("/auth")  
        }else {
          const { email } = await response.json();
          console.log(email);
          localStorage.setItem("user", email)
          router.push("/")
        }
      } else {
        const data = await response.json().catch(() => ({}));
        setMessage({ 
          type: 'error', 
          text: data.message || `Failed to ${isSignUp ? 'sign up' : 'sign in'}. Please try again.` 
        });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Network error. Please check your connection.' });
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setMessage(null);
    setPassword('');i
    setConfirmPassword('');
  };

  return (
    <div className="min-h-screen bg-[#0b0e14] text-slate-100 flex items-center justify-center font-sans relative overflow-hidden selection:bg-sky-500 selection:text-white">
      
      {/* Dark Subtle Ambient Glow in background */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-sky-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-slate-800/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Branding Column */}
        <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
              Technocracy Group
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mt-4 leading-[1.2]">
              Governed AI for institutions that{' '}
              <span className="text-sky-400">can't afford to guess.</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed">
              {isSignUp
                ? 'Create an account to manage deployments, review compliance, and work with the platform your organisation already runs on.'
                : 'Sign in to manage deployments, review compliance, and work with the platform your organisation already runs on.'}
            </p>
          </div>

          {/* Stats Bar */}
          <div className="flex items-center gap-12 pt-4 border-t border-slate-800/80">
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-white tracking-tight">120+</p>
              <p className="text-xs text-slate-400 mt-1">Projects delivered</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-bold text-white tracking-tight">8</p>
              <p className="text-xs text-slate-400 mt-1">Countries</p>
            </div>
          </div>
        </div>

        {/* Right Auth Card Column */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="w-full max-w-md bg-[#111622] border border-slate-800/90 rounded-2xl p-8 sm:p-10 shadow-2xl shadow-black/80">
            
            {/* Sub-Header / Category */}
            <span className="text-[11px] font-bold tracking-wider text-sky-400 uppercase">
              Account
            </span>

            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2">
              {isSignUp ? 'Create account' : 'Sign in'}
            </h2>

            <p className="text-xs text-slate-400 mt-1.5 mb-6">
              {isSignUp ? 'Sign up to get started.' : 'Enter your credentials to continue.'}
            </p>

            {/* Error / Success Toast Message */}
            {message && (
              <div
                className={`p-3 rounded-xl text-xs mb-5 border ${
                  message.type === 'error'
                    ? 'bg-rose-950/40 border-rose-800/60 text-rose-300'
                    : 'bg-emerald-950/40 border-emerald-800/60 text-emerald-300'
                }`}
              >
                {message.text}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Email Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  Email <span className="text-sky-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder=""
                  className="w-full px-3.5 py-2.5 bg-[#0b0e14] border border-slate-800 focus:border-sky-500 rounded-xl text-sm text-slate-100 placeholder-slate-600 outline-none transition-all shadow-inner"
                />
              </div>

              {/* Password Field */}
              <div className="space-y-1.5">
                <label className="block text-xs font-medium text-slate-300">
                  Password <span className="text-sky-400">*</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3.5 py-2.5 pr-10 bg-[#0b0e14] border border-slate-800 focus:border-sky-500 rounded-xl text-sm text-slate-100 placeholder-slate-600 outline-none transition-all shadow-inner"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field (Sign Up Only) */}
              {isSignUp && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-medium text-slate-300">
                    Confirm Password <span className="text-sky-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="w-full px-3.5 py-2.5 pr-10 bg-[#0b0e14] border border-slate-800 focus:border-sky-500 rounded-xl text-sm text-slate-100 placeholder-slate-600 outline-none transition-all shadow-inner"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              )}

              {/* Remember me & Forgot password (Sign In Only) */}
              {!isSignUp && (
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center gap-2 text-slate-300 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      className="w-4 h-4 rounded border-slate-700 bg-[#0b0e14] text-sky-500 focus:ring-0 focus:ring-offset-0 cursor-pointer"
                    />
                    <span>Remember me for 30 days</span>
                  </label>

                  <a
                    href="#forgot"
                    onClick={(e) => e.preventDefault()}
                    className="text-sky-400 hover:text-sky-300 transition-colors font-medium underline-offset-2 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 font-medium text-sm text-white transition-all shadow-lg shadow-sky-600/20 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
              >
                {loading 
                  ? 'Processing...' 
                  : isSignUp ? 'Create account' : 'Sign In'}
              </button>
            </form>

            {/* Toggle Mode Link */}
            <div className="mt-6 text-center text-xs text-slate-400">
              {isSignUp ? (
                <>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-sky-400 hover:text-sky-300 font-medium underline underline-offset-2 ml-0.5"
                  >
                    Sign in
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-sky-400 hover:text-sky-300 font-medium underline underline-offset-2 ml-0.5"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}