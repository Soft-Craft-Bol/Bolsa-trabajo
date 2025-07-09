import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import RegistroPostulante from '../page/forms/RegistroPostulante'


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/registro-postulante" element={<RegistroPostulante />} />
        
    </Routes>
  );
}
