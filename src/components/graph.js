import React, { useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { CategoryScale, Chart } from "chart.js";
import { UserData } from "../utils/data";
import { Plus, ArrowUp } from "phosphor-react";

const Graph = () => {
  Chart.register(CategoryScale);

  let ref = useRef(null);

  const [chartData] = useState({
    labels: UserData.map((data) => data.month),
    datasets: [
      {
        data: UserData.map((data) => data.income),
        tension: 0.4,
        borderWidth: 1,
        yAxisID: "y",
        borderColor: "blue",
      },
      {
        data: UserData.map((data) => data.expense),
        tension: 0.4,
        borderWidth: 1,
        yAxisID: "y1",
        borderColor: "red",
      },
    ],
  });

  let options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        ticks: {
          display: false,
        },
        min: 0,
        max: 10000,
        grid: {
          display: false,
        },
      },
      y1: {
        ticks: {
          display: false,
        },
        min: 0,
        max: 10000,
        grid: {
          display: false,
        },
      },
      x: {
        ticks: {
          color: "#696D8C",
          display: false,
          padding: 15,
        },
      },
    },
    ticks: {
      stepSize: 10,
    },
  };

  return (
    <>
      <div className="px-6 pt-4 flex justify-between items-center">
        <h1 className="text-sm font-semibold">Sales Overview</h1>
        <button className="bg-blue-700 text-white inline-flex justify-center items-center text-xs py-2 px-4 rounded-md __btn">
          <Plus size={14} className="mr-2" />
          Add Offer
        </button>
      </div>
      <div className="border border-gray-100 w-full my-4"></div>
      <div className="flex items-center justify-between px-6 mb-4">
        <div className="flex space-x-4 items-center">
          <p className="font-semibold text-2xl">$80,630</p>
          <div className="w-4 h-4 rounded-full flex items-center justify-center bg-green-200 text-green-600">
            <ArrowUp size={10} />
          </div>
          <p className="text-green-500 text-xs font-semibold">+6.7%</p>
        </div>
        <div className="flex space-x-4 items-center w-1/4 justify-end">
          <div className="flex space-x-2 items-center">
            <div className="w-1 h-1 rounded-full bg-blue-700"></div>
            <p className="text-xs text-gray-400">Incomes</p>
          </div>
          <div className="flex space-x-2 items-center">
            <div className="w-1 h-1 rounded-full bg-red-700"></div>
            <p className="text-xs text-gray-400">Expenses</p>
          </div>
          <div className="w-1/3">
            <select className="w-full px-2 py-1 text-sm font-semibold rounded-md border border-gray-200">
              <option selected disabled>
                Year
              </option>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
            </select>
          </div>
        </div>
      </div>
      <div className="pb-4 px-6">
        <Line ref={ref} data={chartData} options={options} />
      </div>
    </>
  );
};

export default Graph;
