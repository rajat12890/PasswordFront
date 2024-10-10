import React, { useEffect, useState } from "react";
import axios from "axios";
import { addPassword } from "./Api/Api";
function Form({ click, setClick, Clicked }) {
  const options = ["Google","Facebook","Instagram"];
  const [cUser, setcUser] = useState();
  const [show, setShow] = useState(false);
  const [loading, setloading] = useState(false);
  const [values, setValues] = useState({
    title: "",
    pass: "",
    category: "",
    userId: "",
   
  });
  useEffect(() => {
    const avatarFunc = async () => {
      if (localStorage.getItem("user")) {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log(user);

        setValues({ ...values, userId: user._id });
        setcUser(user);
        // setRefresh(true);
      }
    };

    avatarFunc();
  }, []);
  console.log(cUser);
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    setloading(true);
    const { data } = await axios.post(addPassword, values);
    console.log(data.user);
    if (data.success === true) {
      console.log(data.user);
      localStorage.setItem("user", JSON.stringify(data.user));
      setcUser(data.user);
      window.location.reload();
      // toast.success(data.message, toastOptions);
      // handleClose();
      // setRefresh(!refresh);
      const avatarFunc = () => {
        if (localStorage.getItem("user")) {
          const user = JSON.parse(localStorage.getItem("user"));
          console.log(user);

          setcUser(user);
          console.log(cUser);
          // setRefresh(true);
        } else {
          navigate("/login");
        }
      };

      avatarFunc();
    } else {
      
    }

    setloading(false);
  };
  console.log(values);
  return (
    <>
      {!loading ? (
        <div className="px-4">
          <div className="bg-white rounded ">
            <div className="p-4 mt-10">
              <h2 className="text-gray-700 text-xl mb-4">
                Add a new Password
                <h2 className="w-full h-0.5 bg-slate-200"></h2>
              </h2>

              <form className="w-full">
                {/* <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Title
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                    id="name"
                    type="text"
                    placeholder="enter title"
                    onChange={handleChange}
                    name="title"
                  />
                </div> */}
              
               
                <div className="mb-4">
                <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor=""
                  >
                  Company
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading"
                    placeholder="enter company"
                    onChange={handleChange}
                    name="category"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor=""
                  >
                   Username
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading"
                    placeholder="enter username"
                    onChange={handleChange}
                    name="username"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor=""
                  >
                   Password
                  </label>
                  <input
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading"
                    placeholder="enter password"
                    onChange={handleChange}
                    name="pass"
                  />
                </div>
               
                <div className="mb-10">
                  <div className="absolute right-5 pb-5 ">
                    <button
                      className="mr-5 text-white bg-red-500 px-4 rounded py-1 hover:bg-transparent hover:text-red-500 hover:font-bold"
                      onClick={Clicked}
                    >
                      Close
                    </button>
                    <button
                      className="mr-10  text-white bg-blue-500 px-4 rounded py-1 hover:bg-transparent hover:text-blue-500 hover:font-bold"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center place-items-center  mt-64 ">
            <div role="status  place-center">
              <svg
                aria-hidden="true"
                className="w-24 h-24 text-gray-200 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
