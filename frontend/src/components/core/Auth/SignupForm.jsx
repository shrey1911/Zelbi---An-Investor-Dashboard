  import { useState } from "react";
  import { toast } from "react-hot-toast";
  import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom"; // Added for navigation
  import { sendOtp } from "../../../services/operations/authAPI";
  import { setSignupData } from "../../../slices/authSlice";

  const SignupForm = ({ onSwitchToLogin, onClose }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Added for navigatio 
    const [formData, setFormData] = useState({
      email: "",
      password: "",
      confirmPassword: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const { email, password, confirmPassword } = formData;

    const handleOnChange = (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleOnSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        toast.error("Passwords Do Not Match");
        return;
      }
      const signupData = { ...formData };
      dispatch(setSignupData(signupData));
      dispatch(sendOtp(email, () => {
        navigate("/verify-email");
      }));
    };

    return (
      <div className="relative z-50 w-full p-7 rounded-md bg-gradient-to-br from-[#141414] to-[#111111] text-white">
        <h2 className="text-3xl mt-2 font-bold text-cyan-400 text-center mb-6 text-shadow-[0_0_10px_#00ffff]">
          Join Zelbi
        </h2>
        <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-6">
          <label className="w-full">
            <p className="mb-1 text-sm text-gray-300">
              Email Address
            </p>
            <input
              required
              type="email"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              className="w-full rounded-lg bg-[#212121]/80 p-3 text-white border border-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-all duration-300"
            />
          </label>
          <label className="w-full relative">
            <p className="mb-1 text-sm text-gray-300">
              Password
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter password"
              className="w-full rounded-lg bg-[#212121]/80 p-3 text-white border border-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-all duration-300"
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-10 text-gray-400 cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={24} />
              ) : (
                <AiOutlineEye size={24} />
              )}
            </span>
          </label>
          <label className="w-full relative">
            <p className="mb-1 text-sm text-gray-300">
              Confirm Password
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm password"
              className="w-full rounded-lg bg-[#212121]/80 p-3 text-white border border-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-all duration-300"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-10 text-gray-400 cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible size={24} />
              ) : (
                <AiOutlineEye size={24} />
              )}
            </span>
          </label>
          <button
            type="submit"
            className=" mt-2 py-3 px-6 rounded-full bg-cyan-500 font-semibold active:scale-95 text-black bg-[#3affa3] transition-all duration-300"
          >
            Create Account
          </button>
          <p className="text-center text-sm text-white-400 mt-0">
            Already have an account?{" "}
            <span
              onClick={onSwitchToLogin}
              className="text-cyan-400 hover:text-cyan-300 cursor-pointer text-[#3affa3]"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    );
  };

  export default SignupForm;