import React from "react";
import { useForm } from "react-hook-form";
import { IoCameraOutline } from "react-icons/io5";

const Setting = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="p-6">
      <h1 className="text-[#FAFAFD] mt-3 inter text-[32px] font-bold">
        General Settings
      </h1>
      <div className="flex items-center justify-center mt-10">
        <div className="flex items-center justify-center flex-col">
          <div className="p-4 border-2 cursor-pointer border-[#FAFAFD] rounded-full">
            <IoCameraOutline className="text-[#FAFAFD] text-3xl" />
          </div>
          <p className="text-xl text-[#FAFAFD] league-gothic mt-2">
            Upload Logo
          </p>
          <p className="text-sm text-[#FAFAFD] mt-3">yourname5584@gmail.com</p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[800px] mt-25 mx-auto"
      >
        <div className="flex items-center gap-15">
          <div>
            <h1 className="text-[#FAFAFD] text-sm font-semibold mb-3">Name</h1>
            <input
              type="text"
              placeholder="Full Name"
              {...register("name", { required: "Name is required" })}
              className="w-[360px] px-4 text-[#FAFAFD] outline-none py-4.5 border-primary1 border placeholder:text-[#FAFAFD] rounded-lg "
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <h1 className="text-[#FAFAFD] text-sm font-semibold mb-3">Phone Number</h1>
            <input
              type="tel"
              placeholder="Phone Number"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{11}$/,
                  message: "Phone number must be 11 digits",
                },
              })}
              className="w-[360px] px-4 text-[#FAFAFD] outline-none py-4.5 border-primary1 border placeholder:text-[#FAFAFD] rounded-lg "
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-15 mt-15">
          <div className="flex flex-col gap-15">
            <div>
            <h1 className="text-[#FAFAFD] text-sm font-semibold mb-3">User Name</h1>
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
                className="w-[360px] px-4 text-[#FAFAFD] outline-none py-4.5 border-primary1 border placeholder:text-[#FAFAFD] rounded-lg "
              />
              {errors.username && (
                <p className="text-red-500 text-sm">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
                <h1 className="text-[#FAFAFD] text-sm font-semibold mb-3">Gender</h1>
              <select
                {...register("gender", { required: "Gender is required" })}
                className="w-[360px] px-4 text-[#FAFAFD] outline-none py-4.5 border-primary1 border placeholder:text-[#FAFAFD] rounded-lg "
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm">{errors.gender.message}</p>
              )}
            </div>
          </div>
          <div>
            <div>
                <h1 className="text-[#FAFAFD] text-sm font-semibold mb-3">Description</h1>
              <textarea
                placeholder="Description"
                {...register("description", {
                  required: "Description is required",
                })}
                className="w-[360px] px-4 text-[#FAFAFD] outline-none py-4.5 border-primary1 border placeholder:text-[#FAFAFD] rounded-lg h-[210px]"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="submit"
            className=" bg-primary1 text-black  p-4 px-25 font-semibold cursor-pointer rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Setting;
