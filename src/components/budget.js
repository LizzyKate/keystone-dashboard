import React from "react";

function Budget({ title, amount, image, color, text }) {
  return (
    <div
      className={`${color} rounded-md p-4 flex items-center w-1/4 h-28 justify-between`}
    >
      <div>
        <p className={`text-xs ${text}`}>{title}</p>
        <p className={`text-lg font-semibold ${text} mt-2`}>{amount}</p>
      </div>
      <div>
        <img src={image} className="w-16" alt="chart" />
      </div>
    </div>
  );
}

export default Budget;
