import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import InputField from "../components/InputField";
import Button from "../components/Button";
import kids from "../assets/images/kids.png";
function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex h-[100vh]">
      <div className="w-[70%] max-w-md mx-auto mt-24 ms-44">
        <h2 className="text-[2.5rem] font-bold mb-3">Kyçu në Reworn</h2>
        <p className="text-light-grey font-thin">Kyçu dhe merr rroba falas!</p>
        <form className="flex flex-col gap-10 mt-10">
          <InputField
            parentClass="flex flex-col gap-2"
            htmlFor="email"
            label="Sheno email-in"
            labelClass="block text-lg font-medium text-gray-700"
            type="email"
            id="email"
            inputClass="flex border-2 border-gray h-16 w-full p-4 rounded-md text-lg"
            value="email"
            placeholder="Email-i juaj"
          />
          <InputField
            parentClass="flex flex-col gap-2"
            htmlFor="password"
            label="Sheno fjalëkalimin"
            labelClass="block text-lg font-medium text-navy"
            id="password"
            inputType={!showPassword ? "password" : "text"}
            inputClass="flex border-2 border-gray h-16 w-full p-4 rounded-md text-lg"
            value="password"
            placeholder="Fjalëkalimi juaj"
            child={
              !showPassword ? (
                <FaEyeSlash
                  onClick={togglePassword}
                  className="absolute right-5 text-gray font-semibold cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={togglePassword}
                  className="absolute right-5 text-gray font-semibold cursor-pointer"
                />
              )
            }
          />
          <span className="w-full mt-[-30px] text-md text-gray font-semibold cursor-pointer text-right">
            Forgot Password?
          </span>
          <Button
            type="submit"
            className="bg-black text-white h-16 text-lg font-semibold rounded-md bg-blue"
            children="Kyqu"
          />
        </form>
      </div>
      <div className="w-[30%] bg-blue relative">
        <img
          src={kids}
          alt="Kids"
          className="absolute top-1/2 left-1/2 transform -translate-x-full -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default SignInPage;
