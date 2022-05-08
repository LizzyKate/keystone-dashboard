import React, { useRef, useState } from "react";
import { Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale, Chart } from "chart.js";
import { Product } from "../utils/data";

function Rad() {
  Chart.register(CategoryScale);

  let ref = useRef(null);

  const [chartData] = useState({
    labels: Product.map((data) => data.ware),
    datasets: [
      {
        data: Product.map((data) => data.costPrice),
        borderWidth: 1,
        borderColor: "blue",
      },
      {
        data: Product.map((data) => data.sellingPrice),
        borderWidth: 1,
        borderColor: "red",
      },
    ],
  });
  let options = {
    // maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    // borderColor: "green",
    scales: {
      r: {
        ticks: {
          display: false, // Hides the labels in the middel (numbers)
        },
      },
    },
    ticks: {
      display: false,
    },
  };

  return (
    <>
      <p className="text-sm text-gray-400">Top Selling Categories</p>
      <div className="pb-4 px-6">
        <Radar ref={ref} data={chartData} options={options} />
      </div>
    </>
  );
}

export default Rad;
