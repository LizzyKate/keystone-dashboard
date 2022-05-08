import React from "react";

function Single({ image, name, amount, label, material, date, status }) {
  return (
    <div className="flex items-center justify-between mt-4">
      <div className="flex items-center space-x-2 w-1/5">
        <img src={image} alt="product" className="w-6 h-8 rounded-sm" />
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-gray-200">{`${amount} Variants`}</p>
        </div>
      </div>
      <p className="text-gray-200 text-xs font-semibold">
        SKU:<span className="text-black">{label}</span>
      </p>
      <p className="font-semibold text-xs">{material}</p>
      <p className="text-xs">{date}</p>
      <div
        className={`${
          status === "Published"
            ? "bg-green-200 text-green-600"
            : "bg-orange-200 text-orange-500"
        } text-xs rounded-xl w-20 text-center px-2 py-1`}
      >
        {status}
      </div>
    </div>
  );
}
export default Single;
