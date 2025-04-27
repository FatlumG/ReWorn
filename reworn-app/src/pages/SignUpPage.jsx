import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import kids from "../assets/images/kids.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username) {
      newErrors.username = "Emri i përdoruesit është i detyrueshëm!";
    }

    if (!formData.email) {
      newErrors.email = "Ju lutem shenoni një Email!";
    }

    if (!formData.password) {
      newErrors.password = "Fjalëkalimi është i detyrueshëm!";
    } else if (formData.password.length < 6) {
      newErrors.password = "Fjalëkalimi duhet të ketë të paktën 6 karaktere!";
    }

    if (formData.password !== formData.passwordConfirm) {
      newErrors.passwordConfirm =
        "Fjalëkalimi dhe konfirmimi i fjalëkalimit nuk përputhen!";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await axios.post(
          "http://localhost/reworn-server/users/register.php",
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          toast.success("Registrimi u realizua me sukses!");
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        } else {
          toast.error("Ka ndodhur një gabim gjatë regjistrimit!");
        }
      } catch (error) {
        toast.error("Ka ndodhur një gabim. Provoni përsëri.");
        console.error("Error during registration:", error);
      }
    } else {
      // If form validation fails, show errors
      Object.values(errors).forEach((error) => {
        if (error) {
          toast.error(error);
        }
      });
    }
  };
  return (
    <div className="flex justify-center h-[100vh]">
      <div className="w-full flex flex-col items-center p-10 lg:w-[70%] lg:items-start lg:p-14 lg:ps-28">
        <h2 className="text-[2.5rem] font-bold mb-3 whitespace-nowrap">
          Kyçu në Reworn
        </h2>
        <form
          className="flex flex-col gap-2 mt-10 w-full sm:w-[450px]"
          onSubmit={handleSubmit}
        >
          <InputField
            parentClass="flex flex-col gap-2"
            htmlFor="username"
            label="Sheno emrin e perdoruesit"
            labelClass="block text-lg font-medium text-gray-700"
            type="text"
            id="username"
            name="username"
            inputClass="flex border-2 border-gray h-16 w-full p-4 rounded-md text-lg"
            value={formData.username}
            placeholder="Emri i përdoruesit"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <InputField
            parentClass="flex flex-col gap-2 mt-5"
            htmlFor="email"
            label="Sheno email-in"
            labelClass="block text-lg font-medium text-gray-700"
            type="email"
            id="email"
            name="email"
            inputClass="flex border-2 border-gray h-16 w-full p-4 rounded-md text-lg"
            value={formData.email}
            placeholder="Email-i juaj"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <div className="flex flex-col sm:flex-row gap-5 mb-2">
            <InputField
              parentClass="flex flex-col gap-2 mt-5"
              htmlFor="password"
              label="Krijo fjalëkalimin"
              labelClass="block text-lg font-medium text-navy"
              id="password"
              name="password"
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

            <InputField
              parentClass="flex flex-col gap-2 mt-5"
              htmlFor="passwordConfirm"
              label="Konfirmo fjalëkalimin"
              labelClass="block text-lg font-medium text-navy"
              id="passwordConfirm"
              name="passwordConfirm"
              inputType={!showPassword ? "password" : "text"}
              inputClass="flex border-2 border-gray h-16 w-full p-4 rounded-md text-lg"
              value={formData.passwordConfirm}
              placeholder="Fjalëkalimi juaj"
              onChange={(e) =>
                setFormData({ ...formData, passwordConfirm: e.target.value })
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
          </div>

          <Button
            type="submit"
            className="bg-black text-white h-16 text-lg font-semibold rounded-md bg-blue mt-5"
            children="Kyqu"
          />
          <p className="text-gray">
            Ke llogari?{" "}
            <Link to="/" className="text-blue">
              Kyqu
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

export default SignUpPage;
