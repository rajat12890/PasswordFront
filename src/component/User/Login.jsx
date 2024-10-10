import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginAPI } from "../Api/Api";
function Login() {
  // const loginTab = useRef(null);
  // const registerTab = useRef(null);
  const navigate = useNavigate();
  // const switcherTab = useRef(null);
  const switchTabs = (e, tab) => {
    navigate(`/${tab}`);
  };
  const [loading, setloading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [loginemail, setloginemail] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const { name, email, password } = useState();

  const loginSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    const { data } = await axios.post(loginAPI, {
      email: loginemail,
      password: loginpassword,
    });

    if (data.success === true) {
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
      setloading(false);
    }
  };
  const [data, setdata] = useState({
    password: "",
    email: "",
  });
  return (
    <>
      {
        <section class="bg-gray-50 dark:bg-gray-900 h-screen font-karla">
          <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
             
              Login
            </a>
            <div className="login_signUp_toggle text-white flex mb-5 ">
              <p
                onClick={(e) => switchTabs(e, "login")}
                className="mr-5 font-bold font-mono border-2 p-1 px-6 border-green-500 bg-green-500 rounded hover:text-green-500 hover:bg-gray-900 hover:border-none"
              >
                LOGIN
              </p>
              <p
                onClick={(e) => switchTabs(e, "register")}
                className="font-bold font-mono border-2 p-1 px-2 border-red-500 bg-red-500 rounded hover:text-red-500 hover:bg-gray-900 hover:border-none"
              >
                REGISTER
              </p>
            </div>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form
                  class="space-y-4 md:space-y-6"
                  action="#"
                  onSubmit={loginSubmit}
                >
                  <div>
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                      onChange={(e) => setloginemail(e.target.value)}
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                      onChange={(e) => setloginpassword(e.target.value)}
                    />
                  </div>
                  <div class="flex items-center justify-between">
                    <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div class="ml-3 text-sm">
                        <label
                          for="remember"
                          class="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      class="text-sm font-medium text-white  hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    class="w-full text-white bg-yellow-600 hover:bg-transparent hover:text-yellow-500 hover:font-bold hover:text-md focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <NavLink
                      to='/register'
                      class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      }
    </>
  );
}

export default Login;
