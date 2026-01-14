import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaLock } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      <div className="absolute top-1/2 w-[90%] md:w-auto left-1/2 -translate-x-1/2 -translate-y-1/2  px-2 md:px-8 py-8 md:py-10 border border-primary1 rounded-[10px] flex flex-col items-center justify-center">
        <h1 className="inter text-4xl font-semibold text-[#FAFAFD]">Sign Up</h1>
        <p className="text-base text-[#FAFAFD] mt-3">
          You have an already account?{" "}
          <Link
            to="/login"
            className="text-sm text-[#999999] underline cursor-pointer"
          >
            Sign in
          </Link>
        </p>
        <button class="lg:px-[160px] py-3 rounded-[10px] font-semibold cursor-pointer mt-4 md:mt-10 bg-[#C5BB95] justify-center text-[#2D2D2D] flex items-center gap-2 w-full border-[#e5e5e5]">
          <FcGoogle></FcGoogle>
          <span>Login with Google</span>
        </button>
        <div className="flex items-center gap-3 mt-4 md:mt-8">
          <div className="h-[1px] w-25 md:w-[210px] bg-[#C5BB95]"></div>
          <span className="text-[#FAFAFD]">or</span>
          <div className="h-[1px] w-25 md:w-[210px] bg-[#C5BB95]"></div>
        </div>
        <div className="md:mt-10 mt-4 relative w-full">
          <input
            type="text"
            {...register("email", {required: true})}
            className="py-5 text-white px-10 outline-none border rounded-[10px] w-full border-[#C5BB95] placeholder:text-[#FAFAFD]"
            placeholder="Email"
          />
          {
            errors.email && <p className="mt-1 text-red-500 text-sm">Email is required</p>
          }
          <div className="absolute left-2 top-5 ">
            <MdOutlineMail className="text-white text-2xl "></MdOutlineMail>
          </div>
        </div>
        <div className="md:mt-10 mt-4 relative w-full">
          <input
          {...register("password", {required: true})}
            type={showPassword ? "text" : "password"}
            className="py-5 text-white px-10 outline-none border rounded-[10px] w-full border-[#C5BB95] placeholder:text-[#FAFAFD]"
            placeholder="Password"
          />
          {
            errors.password && <p className="mt-1 text-red-500 text-sm">Password is required</p>
          }
          <div className="absolute left-2 top-5.5 ">
            <FaLock className="text-white text-xl "></FaLock>
          </div>
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-6 cursor-pointer "
          >
            {showPassword ? (
              <FaEye className="text-white text-xl" />
            ) : (
              <FaEyeSlash className="text-white text-xl" />
            )}
          </div>
        </div>
        <div className="mt-4.5 relative w-full">
          <input
          {...register("confirmPassword", {required: true})}
            type={showConfirmPassword ? "text" : "password"}
            className="py-5 text-white px-10 outline-none border rounded-[10px] w-full border-[#C5BB95] placeholder:text-[#FAFAFD]"
            placeholder="Confirm Password"
          />
          {
            errors.confirmPassword && <p className="mt-1 text-red-500 text-sm">Confirm Password is required</p>
          }
          <div className="absolute left-2 top-5.5 ">
            <FaLock className="text-white text-xl "></FaLock>
          </div>
          <div
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-5 top-6 cursor-pointer "
          >
            {showConfirmPassword ? (
              <FaEye className="text-white text-xl" />
            ) : (
              <FaEyeSlash className="text-white text-xl" />
            )}
          </div>
        </div>
        <button onClick={handleSubmit(onSubmit)} class="w-full py-3 rounded-[10px] font-semibold cursor-pointer mt-4 md:mt-10 bg-[#C5BB95] text-[#2D2D2D]  border-[#e5e5e5]">
          Sign Up
        </button>
        <p className="text-sm text-[#999999] mt-4 md:mt-10">
          Privacy Policy and Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Register;
