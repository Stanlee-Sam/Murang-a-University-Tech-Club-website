import Navbar from "./components/Navbar/Navbar";
import Leadership from "./components/leadership";
// import Hero from "./components/home/hero";
import Tracks from "./components/tracks";
import Events from "./components/events";
// import Home from "./components/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Hero from "./components/home/hero";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
