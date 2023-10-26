import React, { useState } from "react";
import { SHA256 } from "crypto-js";

import { useAuth } from "../contexts/authContext";
import { useWallet } from "../contexts/walletContext";
import { useNavigate } from "react-router-dom";
import { getRoleName } from "../utils/helper";
function Login() {
  const navigate = useNavigate();
  const { actor, setIsLoggedIn } = useAuth();
  const { address } = useWallet();

  const [password, setPassword] = useState("");

  const login = () => {
    const hashedPassword = SHA256(password).toString();
    if (actor.password === hashedPassword) {
      setIsLoggedIn(true);
      const roleName = getRoleName(actor.role);
      navigate(`/${roleName}`, { replace: true });
      console.log("Logged in successfully");
    } else {
      console.log("User password is wrong");
    }
  };

  return (
    <form>
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center border rounded-xl bg-gray-50 p-4 min-h-32 justify-center ">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <div className="w-64 mb-4">
            <div
              className="w-full p-2 border rounded overflow-hidden" // Apply the same styling to the div
              style={{ whiteSpace: "nowrap", overflowX: "auto" }}
            >
              {address}
            </div>
          </div>
          <div className="w-64 mb-4">
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={login}
            className="bg-blue-500 text-white p-2 rounded hover-bg-blue-700"
          >
            Connect
          </button>
        </div>
      </div>
    </form>
  );
}

export default Login;
