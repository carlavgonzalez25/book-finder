import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import SingleBook from "./Pages/SingleBook";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<SingleBook />} />
      </Routes>
    </div>
  );
};

export default App;
