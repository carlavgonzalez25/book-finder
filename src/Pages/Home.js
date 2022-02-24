import React from "react";
import SearchResults from "../Components/SearchResults";
import Searchbar from "../Components/Searchbar";

const Home = () => {
  return (
    <div className="h-9/10 p-3 md:p-8 mx-5 md:mx-11 flex items-center flex-col">
      <h4 className="text-xl">Find books</h4>
      <Searchbar />
      <SearchResults />
    </div>
  );
};

export default Home;
