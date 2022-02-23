import React from "react";
import SearchResults from "../Components/SearchResults";
import Searchbar from "../Components/Searchbar";

const Home = () => {
  return (
    <div className="h-9/10 p-8">
      <h4 className="text-xl">Find books</h4>
      <Searchbar />
      <SearchResults />
    </div>
  );
};

export default Home;
