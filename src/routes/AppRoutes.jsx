import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
