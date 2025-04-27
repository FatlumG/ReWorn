import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputField from "../components/InputField";
import Button from "../components/Button";
import kids from "../assets/images/kids.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      newErrors.email = "Ju lutem shenoni një Email!";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Email-i është i pavlefshëm!";
    }

    if (!formData.password) {
      newErrors.password = "Fjalëkalimi është i detyrueshëm!";
    } else if (formData.password.length < 6) {
      newErrors.password = "Fjalëkalimi duhet të ketë të paktën 6 karaktere!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Send POST request to login.php
        const response = await axios.post(
          "http://localhost/reworn-server/users/login.php",
          {
            email: formData.email,
            password: formData.password,
          }
        );

          toast.success("Kyqja u realizua me sukses!"); // Success message
          setTimeout(() => {
            navigate("/home"); // Redirect to home page after successful login
          }, 2000);
      } catch (error) {
        toast.error("Ka ndodhur një gabim gjatë lidhjes me serverin!");
      }
    } else {
      // If form validation fails, show error messages
      Object.values(errors).forEach((error) => {
        if (error) {
          toast.error(error);
        }
      });
    }
  };

  return (
    <div className="flex justify-center h-[100vh]">
      <div className="w-full flex flex-col items-center p-10 lg:w-[70%] lg:items-start lg:p-20 ">
        <h2 className="text-[2.5rem] font-bold mb-3 whitespace-nowrap">
          Kyçu në Reworn
        </h2>
        <p className="text-light-grey font-thin" onSubmit={handleSubmit}>
          Kyçu dhe merr rroba falas!
        </p>
        <form
          className="flex flex-col gap-2 mt-10 w-full sm:w-[450px]"
          onSubmit={handleSubmit}
        >
          <InputField
            parentClass="flex flex-col gap-2"
            htmlFor="email"
            label="Sheno email-in"
            labelClass="block text-lg font-medium text-gray-700"
            type="email"
            id="email"
            inputClass="flex border-2 border-gray h-16 w-full p-4 rounded-md text-lg"
            value={formData.email}
            placeholder="Email-i juaj"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <InputField
            parentClass="flex flex-col gap-2 mt-4"
            htmlFor="password"
            label="Sheno fjalëkalimin"
            labelClass="block text-lg font-medium text-navy"
            id="password"
            inputType={!showPassword ? "password" : "text"}
            inputClass="flex border-2 border-gray h-16 w-full p-4 rounded-md text-lg"
            value={formData.password}
            placeholder="Fjalëkalimi juaj"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
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
            Keni harrruar fjalëkalimin?
          </span>
          <Button
            type="submit"
            className="bg-black text-white h-16 text-lg font-semibold rounded-md bg-blue mt-5"
            children="Kyqu"
          />
          <p className="text-gray">
            Nuk ke llogari?{" "}
            <Link to="/sign-up" className="text-blue">
              Regjistohu
            </Link>
          </p>
        </form>
      </div>
      <div className="hidden lg:block w-[30%] bg-blue relative">
        <img
          src={kids}
          alt="Kids"
          className="absolute top-1/2 left-1/2 transform -translate-x-full -translate-y-1/2"
        />
      </div>
      <ToastContainer />
    </div>
  );
}

export default SignInPage;
