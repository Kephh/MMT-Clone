import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import MyAcc from "./components/myacc";
import Flightlist from "./pages/FlightList/Flightlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<List />} />
          <Route path="/hotels/:id" element={<Hotel />} />
          <Route path="/flights" element={<Flightlist />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myaccount" element={<MyAcc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
