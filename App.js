import React, { useState } from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario';

function App() {

  // state de presupuesto y de saldo restante
  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ saldo, setSaldo ] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          <Pregunta
            setPresupuesto={setPresupuesto}
            setSaldo={setSaldo}
          />

          <div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">
              <p>Hey there!</p>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default App;
