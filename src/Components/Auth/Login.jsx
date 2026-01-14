import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";
import { FaEyeSlash } from "react-icons/fa6";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="h-screen inter relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 lg:px-8 py-8 lg:py-10 md:w-auto w-[90%] border border-primary1 rounded-[10px] flex flex-col items-center justify-center">
        <h1 className="inter text-4xl font-semibold text-[#FAFAFD]">Login</h1>
        <p className="text-base text-[#FAFAFD] mt-3">
          Don’t have an account?{" "}
          <Link
            to="/login/register"
            className="text-sm text-[#999999] underline cursor-pointer"
          >
            Create account
          </Link>
        </p>
        <button class="lg:px-[160px] py-3 rounded-[10px] font-semibold cursor-pointer mt-5 lg:mt-10 bg-[#C5BB95] text-[#2D2D2D] flex items-center justify-center gap-2 w-full border-[#e5e5e5]">
          <FcGoogle></FcGoogle>
          <span>Login with Google</span>
        </button>
        <div className="flex items-center gap-3 mt-4 lg:mt-8">
          <div className="h-[1px] w-25 lg:w-[210px] bg-[#C5BB95]"></div>
          <span className="text-[#FAFAFD]">or</span>
          <div className="h-[1px] w-25 lg:w-[210px] bg-[#C5BB95]"></div>
        </div>
        <div className="lg:mt-10 mt-4 relative w-full">
          <input
            type="email"
            {...register("email", {required: true})}
            className="md:py-5 py-4 text-white px-10 outline-none border rounded-[10px] w-full border-[#C5BB95] placeholder:text-[#FAFAFD]"
            placeholder="Email"
          />
          {
            errors.email && <p className="mt-1 text-red-500 text-sm">Email is required</p>
          }
          <div className="absolute left-2 top-4 md:top-5 ">
            <MdOutlineMail className="text-white text-2xl "></MdOutlineMail>
          </div>
        </div>
        <div className="mt-10 relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password", {required: true})}
            className="md:py-5 py-4 text-white px-10 outline-none border rounded-[10px] w-full border-[#C5BB95] placeholder:text-[#FAFAFD]"
            placeholder="Password"
          />
          {
            errors.password && <p className="mt-1 text-red-500 text-sm">Password is required</p>
          }
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-5 md:top-5 cursor-pointer "
          >
            {showPassword ? (
              <FaEye className="text-white text-xl" />
            ) : (
              <FaEyeSlash className="text-white text-xl" />
            )}
          </div>
          <div className="absolute left-2 md:top-5.5 top-5 ">
            <FaLock className="text-white text-xl "></FaLock>
          </div>
        </div>
        <button onClick={handleSubmit(onSubmit)} class="w-full py-3 rounded-[10px] font-semibold cursor-pointer mt-10 bg-[#C5BB95] text-[#2D2D2D]  border-[#e5e5e5]">
          login
        </button>
        <p className="text-sm text-[#999999] mt-10">
          Privacy Policy and Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Login;
