import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  return (
    <section className="h-fit bg-transparent w-full ">
      <div className="flex flex-col items-center mt-3 px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="/"
          className="flex items-center mb-4 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-10 h-10 mr-2"
            src="https://em-content.zobj.net/source/apple/81/male-technologist-type-3_1f468-1f3fc-200d-1f4bb.png"
            alt="logo"
          />
        </Link>
        <div className="w-full bg-[#ffffff] rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Register to "KuberX"
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                try {
                  const response = await axios.post("/user/register", {
                    username: username,
                    phone: phone,
                    password: password,
                    email: email,
                  });
                  if (
                    response.data.message === "User registered successfully!"
                  ) {
                    toast("User registered successfully", {
                      position: "bottom-right",
                      icon: response.data.emoji,
                    });
                    window.localStorage.setItem("token", response.data.token);
                    window.localStorage.setItem("userID", response.data.userID);
                    window.localStorage.setItem("username", username);
                    navigate("/");

                    setTimeout(() => {
                      window.location.reload();
                    }, 1000);
                  } else {
                    toast("User already exists", {
                      position: "bottom-right",
                      icon: response.data.emoji,
                    });
                  }
                } catch (error) {
                  toast.error("Error registering user", {
                    position: "bottom-right",
                    icon: "❌",
                  });
                }
              }}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-[#050620] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="kuberx"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-[#050620] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="hello@kuberx.com"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Mobile Number
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-[#050620] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="9221986738"
                  required=""
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-[#050620] sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-[#02031C] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
              <p className="text-sm font-light text-gray-500">
                Already a user?{" "}
                <Link
                  to="/login"
                  className="font-semibold text-purple-600 hover:underline"
                >
                  Sign-in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
