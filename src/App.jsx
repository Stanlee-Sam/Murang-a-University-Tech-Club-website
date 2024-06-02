import Navbar from "./components/Navbar/Navbar";
import Leadership from "./components/leadership";
import Hero from "./components/home/hero";
import Tracks from "./components/tracks";
import Events from "./components/events";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
