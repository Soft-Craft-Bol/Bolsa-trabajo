import { useState } from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {

  return (
    <>
      <Router>
      <div className="h-screen">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
    </>
  )
}

export default App
