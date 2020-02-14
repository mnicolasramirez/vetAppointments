import React, { Fragment, useState } from 'react';
import Error from './Error'

const Pregunta = ({ setPresupuesto, setSaldo }) => {

    // definir el state de cantidad y de error
    const [cantidad, setCantidad] = useState(0);
    const [ error, setError ] = useState(false);

    // definir la función que modifica el state
    const definirPresupuesto = e => {
        setCantidad(parseInt(e.target.value));
    }

    // submit para definir el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        }

        // acción a ejecutar
        setError(false);
        setPresupuesto(cantidad);
        setSaldo(cantidad);
    }

    return ( 
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Error mensaje="El valor ingresado debe ser un número positivo" /> : null }
            <form
                onSubmit={agregarPresupuesto}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Coloca tu Presupuesto Semanal"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>

        </Fragment>
     );
}
 
export default Pregunta;