import React, { useState } from "react";
import { useAuth } from "../contexts/authContext";
import { useWallet } from "../contexts/walletContext";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const { actor, setIsLoggedIn, } = useAuth();
  const { address } = useWallet();

  const [password, setPassword] = useState("");

  const login = () => {
    if (actor.password === password) {
      setIsLoggedIn(true);
      if ((actor.role = "0")) {
        navigate("/admin", { replace: true });
      } else if ((actor.role = "1")) {
        navigate("/association", { replace: true });
      } else if ((actor.role = "2")) {
        navigate("/donor", { replace: true });
      } else if ((actor.role = "3")) {
        navigate("/evaluator", { replace: true });
      } else {
        navigate("/login", { replace: true });
      }
      console.log("logged In successfuly");
    } else {
      console.log("user Password is wrong");
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center border rounded-xl bg-gray-50 p-4 min-h-32 justify-center ">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="w-64 mb-4">
          <div
            className="w-full p-2 border rounded overflow-hidden" // Apply the same styling to the div
            style={{ whiteSpace: "nowrap", overflowX: "auto" }}
          >
            {address} {/* Display the walletAddress */}
          </div>
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
