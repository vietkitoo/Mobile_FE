import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
function ModalLogin({ onHandleShowModal }) {
  const [pageLogin, setPage] = useState(true);
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const handleChangePage = () => {
    setPage(!pageLogin);
  };
  const handleInputValue = (info, value) => {
    setData({ ...data, [info]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="fixed w-full h-full bg-[#13131373] z-50 top-0 left-0 right-0 bottom-0">
      <div className="w-[25%] h-auto bg-[#000000be] text-white mx-auto mt-[15%] p-3 rounded-3xl ">
        <button
          className="absolute text-3xl m-2 hover:text-red-600"
          onClick={onHandleShowModal()}
        >
          <AiOutlineClose />
        </button>
        <h1 className="text-center text-2xl pt-3">
          {pageLogin ? "LOGIN" : "RESGITER"}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-2/3 mx-auto my-2 p-4 bg-[#000000be] rounded-lg "
        >
          <input
            type="text"
            value={data.username}
            placeholder="Username"
            onChange={(e) => handleInputValue("username", e.target.value)}
            className="w-full my-4 text-xl  text-center bg-[#2e2e2e] outline-none p-2 rounded-lg"
          />
          <input
            type="password"
            value={data.password}
            placeholder="Password"
            onChange={(e) => handleInputValue("password", e.target.value)}
            className="w-full my-4 text-xl text-center bg-[#2e2e2e] outline-none p-2 rounded-lg"
          />
          {!pageLogin ? (
            <input
              type="password"
              value={data.username}
              placeholder="Password"
              className="w-full my-4 text-xl text-center bg-[#2e2e2e] outline-none p-2 rounded-lg"
            />
          ) : (
            <></>
          )}
          <button
            type="Submit"
            className="w-full text-center my-4 text-base py-2 font-semibold hover:bg-[#fff] hover:text-[#000] "
          >
            {pageLogin ? "Login" : "Register"}
          </button>
        </form>

        <span
          className="text-sm opacity-60 hover:cursor-pointer hover:opacity-100 ml-2"
          onClick={() => handleChangePage()}
        >
          {pageLogin ? "Create new account." : "Login account."}
        </span>
      </div>
    </div>
  );
}

export default ModalLogin;
