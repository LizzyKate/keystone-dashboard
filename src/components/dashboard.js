import React from "react";
import profile from "../assets/profile.svg";
import Budget from "./budget";
import line from "../assets/graph.png";
import Rad from "./chart";
import Product from "./product";
import Graph from "./graph";

const income = [
  {
    title: "Daily Income",
    amount: "$345",
    image: line,
    color: "bg-blue-700",
    text: "text-white",
  },
  {
    title: "Daily Expense",
    amount: "$380",
    image: line,
    color: "bg-white",
    text: "text-gray-600",
  },
  {
    title: "Weekly Income",
    amount: "$5380",
    image: line,
    color: "bg-white",
    text: "text-gray-600",
  },
  {
    title: "Weekly Expense",
    amount: "$4320",
    image: line,
    color: "bg-white",
    text: "text-gray-600",
  },
];

function Dashboard() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-1/6">
          <input
            placeholder="Search..."
            className="text-xs pl-4 py-2 w-full rounded-md  bg-gray-200"
          />
        </div>
        <div className="flex space-x-4 items-center">
          <div>
            <h1 className="text-sm font-semibold">Jamesbrown@example.com</h1>
            <p className="text-xs text-gray-500 mt-1 text-right">Admin</p>
          </div>
          <div className="w-8 h-8">
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-md mt-4">
        <Graph />
      </div>
      <div className="mt-4 flex space-x-4 justify-between items-center">
        {income.map((e, i) => {
          return (
            <Budget
              title={e.title}
              amount={e.amount}
              image={e.image}
              color={e.color}
              text={e.text}
              key={i}
            />
          );
        })}
      </div>
      <div className="mt-4 flex justify-between space-x-4">
        <div className="w-1/3 rounded-md bg-white p-4">
          <Rad />
        </div>
        <div className="w-2/3 rounded-md bg-white p-4">
          <Product />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
