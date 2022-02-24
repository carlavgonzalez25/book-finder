import React from "react";
import { Link } from "react-router-dom";
import { clearBooks } from "../Redux/actions";

const Header = () => {
  return (
    <header className=" bg-gray-300 p-6 h-1/10">
      <nav className="flex justify-between">
        <Link to="/" onClick={clearBooks()}>
          <h3 className="text-2xl font-sans">Book Finder</h3>
        </Link>
        <Link to="/about"> About</Link>
      </nav>
    </header>
  );
};

export default Header;
