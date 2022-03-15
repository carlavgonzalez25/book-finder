import React from "react";
import { Link } from "react-router-dom";
import { clearBooks } from "../Redux/actions";

const Header = () => {
  return (
    <header
      className=" bg-gray-300 p-6 h-1/10"
      style={{ backgroundColor: "#ff385c" }}
    >
      <nav className="flex justify-between">
        <Link to="/" onClick={clearBooks()}>
          <h3
            className="text-3xl"
            style={{
              fontFamily: "'Yanone Kaffeesatz', sans-serif",
              color: "#FFF",
            }}
          >
            Book Finder
          </h3>
        </Link>
        <Link to="/about" style={{ color: "#FFF" }}>
          {" "}
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
