import { useState } from "react";


function Contador(){
  //let valor = 1;
  const [valor,setvalor]= useState(1);

  const aumentar = () => {
    setvalor(valor+1);
    console.log(valor);
  };

  const diminuir = () => setvalor(valor-1);

  return(
    <div>
      <h1>Contador</h1>
      <button onClick={diminuir}>-</button>
      <button onClick={aumentar}>+</button>

      <input type="number" value={valor}></input>
    </div>
  );
}

export default Contador;