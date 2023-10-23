import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useWallet } from "../contexts/walletContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { actor, setIsLoggedIn } = useAuth();
  const { address } = useWallet();

  // State variables for the input fields
  const [walletAddress, setWalletAddress] = useState(address);
  const [password, setPassword] = useState("");

  const login = () => {
    if (actor.password === password) {
      setIsLoggedIn(true);
      navigate("/donor", { replace: true });
    } else {
      console.log("user Password is wrong");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center border rounded-xl bg-gray-50 p-4 min-h-32 justify-center ">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="w-64 mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Wallet Address"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
          />
        </div>
        <div className="w-64 mb-4">
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={login}
          className="bg-blue-500 text-white p-2 rounded hover-bg-blue-700"
        >
          Connect
        </button>
      </div>
    </div>
  );
}

export default Login;
