//import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ApprRoutes from "./AppRoutes";
import Header from "./views/Header";


function App(){
  return(
    <>
    <BrowserRouter>
    <Header/>
      <div className="container mt-4">    
        <ApprRoutes/>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App;