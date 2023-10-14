import React from "react";

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center border rounded-xl bg-gray-50 p-4 min-h-32 justify-center ">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="w-64 mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Wallet Address"
          />
        </div>
        <div className="w-64 mb-4">
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Password"
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">
          Connect
        </button>
      </div>
    </div>
  );
}

export default Login;
