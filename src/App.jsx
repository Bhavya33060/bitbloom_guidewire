import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Dashboard from "./pages/Dashboard";
// import PlanDetails from "./pages/PlanDetails";
// import Checkout from "./pages/Checkout";
// import Claims from "./pages/Claims";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/plan/:id" element={<PlanDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/claims" element={<Claims />} />  */}
         <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;