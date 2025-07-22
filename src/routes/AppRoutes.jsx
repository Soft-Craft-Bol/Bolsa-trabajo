import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import RegistroPostulante from '../page/forms/RegistroPostulante'
import ElegirTipoCuenta from "../page/ElegirTipoCuenta";
import RegistroEmpresa from "../page/forms/RegistroEmpresa";
import OfertaList from "../page/ofertas/OfertaList";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/registro-postulante" element={<RegistroPostulante />} />
        <Route path="/registro-empresa" element={<RegistroEmpresa />} />
        <Route path="/registro" element={<ElegirTipoCuenta />} />
        <Route path="/ofertas" element={<OfertaList/>}/>
    </Routes>
  );
}
