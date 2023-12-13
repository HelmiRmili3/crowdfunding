import React from "react";
import { useAuth } from "../contexts/authContext";
import { getRoleName } from "../utils/helper";
function CustomButtonAdd({ onOpen }) {
  const { actor } = useAuth();
  const icon =
    getRoleName(actor.role) === "association"
      ? "kindpng_4414019.png"
      : "icons8-add-48.png";
  return (
    <>
      <div className="flex-1 text-right">
        <button onClick={onOpen} className="">
          <img
            src={require("../assets/"+icon)}
            alt="User Avatar"
            className="w-10 h-10 rounded-lg  color-grat-100 hover:bg-gray-300  "
          />
        </button>
      </div>
    </>
  );
}
export default CustomButtonAdd;
