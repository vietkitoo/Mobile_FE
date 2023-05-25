import * as React from "react";

function Login({ onHandleShowModal }) {
  return (
    <>
      <div className="absolute top-[30px] right-3 z-10 bg-[#ffffff] shadow-lg rounded-lg items-center hover:bg-[#e8e8ff]">
        <button className=" px-4 py-2 text-lg" onClick={onHandleShowModal()}>
          Login
        </button>
      </div>
    </>
  );
}

export default Login;
