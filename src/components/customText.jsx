import React from "react";

function CustomText({ text, count }) {
  return (
    <>
      <div className="flex-1 text-left w-4/6">
        <h1 className="items-start text-lg font-bold text-gray-500">
          {text}({count})
        </h1>
      </div>
    </>
  );
}
export default CustomText;
