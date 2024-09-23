import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./componentes/detail";
import Mascotas from "./componentes/mascotas";
import NavBar from "./componentes/navbar";

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Mascotas />} />
         <Route path="/mascotas" element={<Mascotas />} />
         <Route path="/mascotas/:mascotaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;