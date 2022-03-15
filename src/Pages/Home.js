import React from "react";
import SearchResults from "../Components/SearchResults";
import Searchbar from "../Components/Searchbar";

const Home = () => {
  return (
    <div className="h-9/10 p-3 md:p-8 flex items-center flex-col">
      <h4 className="text-xl">Please type a book name or author</h4>
      <Searchbar />
      <SearchResults />
    </div>
  );
};

export default Home;
