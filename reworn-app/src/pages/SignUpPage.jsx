import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import InputField from "../components/InputField";
import Button from "../components/Button";
import kids from "../assets/images/kids.png";
function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex justify-center h-[100vh]">
      <div className="w-full flex flex-col items-center p-10 lg:w-[70%] lg:items-start lg:p-14 lg:ps-28 ">
        <h2 className="text-[2.5rem] font-bold mb-3 whitespace-nowrap">
          Kyçu në Reworn
        </h2>
        <form className="flex flex-col gap-10 mt-10 w-full sm:w-[450px]">
          <InputField
            parentClass="flex flex-col gap-2"
            htmlFor="username"
            label="Sheno emrin e perdoruesit"
            labelClass="block text-lg font-medium text-gray-700"
            type="username"
            id="username"
            inputClass="flex border-2 border-gray h-16 w-full p-4 rounded-md text-lg"
            value="username"
            placeholder="Emri i përdoruesit"
          />
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
          <div className="flex flex-col sm:flex-row gap-5 mb-2">
            <InputField
              parentClass="flex flex-col gap-2"
              htmlFor="password"
              label="Krijo fjalëkalimin"
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
            <InputField
              parentClass="flex flex-col gap-2"
              htmlFor="password"
              label="Konfirmo fjalëkalimin"
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
          </div>
          <Button
            type="submit"
            className="bg-black text-white h-16 text-lg font-semibold rounded-md bg-blue"
            children="Kyqu"
          />
        </form>
      </div>
      <div className="hidden lg:block w-[30%] bg-blue relative">
        <img
          src={kids}
          alt="Kids"
          className="absolute top-1/2 left-1/2 transform -translate-x-full -translate-y-1/2"
        />
      </div>
    </div>
  );
}

export default SignUpPage;
