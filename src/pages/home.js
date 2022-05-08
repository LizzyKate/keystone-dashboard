import React from "react";
import Dashboard from "../components/dashboard";
import SideBar from "../components/sideBar";

function Home() {
  return (
    <section className="flex h-screen">
      <div className="w-1/6 bg-white p-12">
        <SideBar />
      </div>
      <div className="w-5/6 max-h-screen overflow-y-scroll bg-gray-100 h-screen rounded-md py-4 px-8">
        <Dashboard />
      </div>
    </section>
  );
}

export default Home;
