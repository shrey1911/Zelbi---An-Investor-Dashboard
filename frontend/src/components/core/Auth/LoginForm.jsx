import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/operations/authAPI";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = formData;

  const onSwitchToSignup=(e) =>{
    navigate('/signup')
  }

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password, navigate));
  };

  return (
    <div className="relative z-50 w-full p-7 rounded-md bg-gradient-to-br from-[#141414] to-[#111111] text-white">
      <h2 className="text-3xl mt-2 font-bold text-cyan-400 text-center mb-6 text-shadow-[0_0_10px_#00ffff]">
        Welcome Back
      </h2>
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-y-6">
        <label className="w-full">
          <p className="mb-1 text-sm text-gray-300">
            Email Address <span className="text-pink-400">*</span>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"
            className="w-full rounded-lg bg-[#212121]/80 p-3 text-white border border-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-all duration-300"
          />
        </label>
        <label className="relative">
          <p className="mb-1 text-sm text-gray-300">
            Password <span className="text-pink-400">*</span>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            name="password"
            value={password} 
            onChange={handleOnChange}
            placeholder="Enter Password"
            className="w-full rounded-lg bg-[#212121]/80 p-3 text-white border border-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(0,255,255,0.7)] transition-all duration-300"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-10 text-gray-400 cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
          <Link to="/forgot-password">
            <p className="mt-2 ml-auto max-w-max text-sm text-white-400">
              Forgot Password
            </p>
          </Link>
        </label>
        <button
          type="submit"
          className=" mt-0  py-3 px-6 rounded-full bg-cyan-500 font-semibold active:scale-95 text-black bg-[#3affa3] transition-all duration-300"
        >
          Sign In
        </button>
        <p className="text-center text-sm text-white-400 mt-0">
            Dont Have An Account?{" "}
            <span
              onClick={onSwitchToSignup}
              className="text-cyan-400 hover:text-cyan-300 cursor-pointer text-[#3affa3]"
            >
              Sign Up
            </span>
          </p>
      </form>
    </div>
  );
}

export default LoginForm;