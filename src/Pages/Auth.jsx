import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    phone: '',
    department: '',
    academicYear: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isLogin) {
        const result = await login({
          email: formData.email,
          password: formData.password
        });
        
        if (result.success) {
          navigate(from, { replace: true });
        } else {
          setError(result.error || 'Login failed');
        }
      } else {
        if (formData.password !== formData.confirmPassword) {
          setError('Passwords do not match');
          setLoading(false);
          return;
        }

        const result = await register({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          phone: formData.phone,
          department: formData.department,
          academicYear: formData.academicYear,
          password: formData.password
        });
        
        if (result.success) {
          navigate(from, { replace: true });
        } else {
          setError(result.error || 'Registration failed');
        }
      }
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    });
    setError('');
  };

  // Social login handler (mock)
  const handleSocialLogin = (provider) => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      // Simulate successful login
      setLoading(false);
      navigate(from, { replace: true });
    }, 1200);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
      <div className="max-w-md w-full mx-4">
        <div className="bg-gray-800/80 border border-blue-500/30 rounded-2xl shadow-xl shadow-blue-500/20 p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-100 mb-2">
              {isLogin ? "Welcome Back!" : "Join CPC"}
            </h1>
            <p className="text-gray-300">
              {isLogin
                ? "Sign in to access all features"
                : "Create your account to get started"}
            </p>

            {isLogin && (
              <div className="mt-4 p-3 bg-blue-900/30 border border-blue-500/30 rounded-lg text-left">
                <h4 className="font-semibold text-blue-300 text-sm mb-2">🔑 Admin Panel Demo Credentials:</h4>
                <div className="text-xs text-blue-200 space-y-1">
                  <div>Username: <span className="font-mono">admin</span></div>
                  <div>Password: <span className="font-mono">cpc2025</span></div>
                  <div className="text-xs text-gray-400">(Use these to access the Admin Panel at <span className="font-mono">/admin-panel</span>)</div>
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="alert alert-error mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Full Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="input input-bordered w-full focus:input-primary"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Phone </span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="input input-bordered w-full focus:input-primary"
                    placeholder="Enter your Phone Number"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Department </span>
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="input input-bordered w-full focus:input-primary"
                    placeholder="Enter your Department"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Academic Year </span>
                  </label>
                  <input
                    type="text"
                    name="academicYear"
                    value={formData.academicYear}
                    onChange={handleInputChange}
                    className="input input-bordered w-full focus:input-primary"
                    placeholder="Enter your Academic Year"
                    required
                  />
                </div>
              </>
            )}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input input-bordered w-full focus:input-primary"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Department and Academic Year fields removed from login form */}

            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input input-bordered w-full focus:input-primary"
                placeholder="Enter your password"
                required
              />
            </div>

            {!isLogin && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">
                    Confirm Password
                  </span>
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="input input-bordered w-full focus:input-primary"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className={`btn btn-primary w-full text-white font-semibold py-3 ${
                loading ? "loading" : ""
              }`}
            >
              {loading
                ? "Please wait..."
                : isLogin
                ? "Sign In"
                : "Create Account"}
            </button>
          </form>

          {isLogin && (
            <div className="my-6">
              <div className="text-center text-gray-500 mb-2">Or sign in with</div>
              <div className="flex justify-center gap-4">
                <button type="button" className="btn btn-outline btn-sm flex items-center gap-2" onClick={() => handleSocialLogin('google')}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="w-5 h-5" /> Google
                </button>
                <button type="button" className="btn btn-outline btn-sm flex items-center gap-2" onClick={() => handleSocialLogin('facebook')}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-5 h-5" /> Facebook
                </button>
                <button type="button" className="btn btn-outline btn-sm flex items-center gap-2" onClick={() => handleSocialLogin('github')}>
                  <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-5 h-5" /> GitHub
                </button>
              </div>
            </div>
          )}

          <div className="divider my-6">OR</div>

          <div className="text-center">
            <button
              onClick={toggleMode}
              className="link link-primary font-semibold"
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : "Already have an account? Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
