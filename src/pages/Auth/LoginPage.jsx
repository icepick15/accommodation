import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth-clean';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await login({ email: formData.email });
      const dest = location.state?.from || '/reservations/booking-info';
      navigate(dest, { replace: true });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSignUpRedirect = () => {
    navigate('/signup');
    console.log('Navigate to sign up');
  };

  const handleForgotPassword = () => {
    // This would navigate to forgot password page
    console.log('Navigate to forgot password');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left Side - Form Section */}
      <div className="w-full flex items-center justify-center p-8">
        <div className="w-full">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'serif' }}>
              Login
            </h1>
          </div>

          <div className="space-y-8">
            {/* Email Address */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-3 text-left">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your registered email address"
                className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-base font-medium text-gray-700 mb-3 text-left">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Password"
                  className="w-full px-4 py-3 border bg-red-50 border-red-600 rounded-lg outline-none transition-colors focus:border-red-500 focus:bg-red-100 hover:border-red-400 focus:ring-red-200"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                onClick={handleForgotPassword}
                className="text-gray-600 hover:text-gray-800 text-sm transition-colors"
              >
                Forgot password
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`w-full py-4 px-4 rounded-lg font-semibold text-white text-lg transition-colors duration-200 ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2'
              }`}
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </div>
        </div>
      </div>

      {/* Right Side - Welcome Section */}
      <div className="hidden md:flex md:w-1/2 relative overflow-hidden">
        <div 
          className="w-full h-full relative"
          style={{
            backgroundImage: `url('assets/images/login-sidebar.png')`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat'
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            {/* Logo Placeholder */}
            <div className="mb-6 w-20 h-20 flex items-center justify-center">
             <img 
                src="assets/images/ft-logo.png" 
                alt="Logo" 
                className="w-20 h-24 object-contain"
              />
            </div>

            <h1 className="text-2xl font-bold text-center font-serif">
              Hello, Friend!
            </h1>
            
            <p className="text-md mb-1 text-center max-w-md">
              Don't have an account?
              <br />
              Sign up now to get started!
            </p>

            <button
              onClick={handleSignUpRedirect}
              className="bg-white text-red-600 px-10 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 shadow-lg"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sign Up Link */}
      <div className="md:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-gray-600 mb-4">Don't have an account?</p>
        <button
          onClick={handleSignUpRedirect}
          className="text-red-600 hover:text-red-700 font-semibold"
        >
          Sign up here
        </button>
      </div>
    </div>
  );
};

export default LoginPage;