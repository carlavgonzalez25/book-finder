import React from "react";
import Searchbar from "../Components/Searchbar";

const Home = () => {
  return (
    <div className="container bg-gray-700 h-9/10 p-8">
      <h4 className="text-xl">Find books</h4>
      <Searchbar />
    </div>
  );
};

export default Home;
