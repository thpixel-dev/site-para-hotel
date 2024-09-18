import { useState } from 'react'
import './App.css'

function App() {
  const [dias, setDias] = useState(0);
  const [resultado, setResultado] = useState({});

  function calcularCustoTotal(dias) {
    let taxaDiaria;
    if (dias <= 5) {
      taxaDiaria = 100;
    } else if (dias >= 6 && dias <= 10) {
      taxaDiaria = 90;
    } else {
      taxaDiaria = 80;
    }
  
    const custoTotal = dias * taxaDiaria;
    const descontoEmocional = custoTotal * (dias * 0.01); 
    const descontoUber = custoTotal * 0.15; 
    const multa = 150;
  
    const descontoTotal = descontoEmocional + descontoUber;
    const custoFinal = custoTotal - descontoTotal + multa;
  
    return {
      custoTotal: `R$ ${custoTotal}`,
      descontoEmocional: `R$ ${descontoEmocional}`,
      descontoUber: `R$ ${descontoUber}`,
      multa: `R$ ${multa}`,
      descontoTotal: `R$ ${descontoTotal}`,
      custoFinal: `R$ ${custoFinal}`,
    };
  }

  function handleInputChange(event) {
    setDias(event.target.value);
  }

  function handleCalculateClick() {
    const resultado = calcularCustoTotal(dias);
    setResultado(resultado);
  }

  return (
    <div>
      <input type="number" value={dias} onChange={handleInputChange} />
      <button onClick={handleCalculateClick}>Calcular</button>
      {resultado && (
        <div id="resultado">
          <label>Custo total: </label><span>{resultado.custoTotal}</span><br />
          <label>Desconto emocional: </label><span>{resultado.descontoEmocional}</span><br />
          <label>Desconto Uber: </label><span>{resultado.descontoUber}</span><br />
          <label>Multa: </label><span>{resultado.multa}</span><br />
          <label>Desconto total: </label><span>{resultado.descontoTotal}</span><br />
          <label>Custo final: </label><span>{resultado.custoFinal}</span><br />
        </div>
      )}
    </div>
  );
}

export default App;