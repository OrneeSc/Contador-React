import React, { useState } from 'react';
import './Card.scss';

const Card = ({numero}) => {

    const [contador, setContador] = useState(0);

    return(
            <div className="card-content">
                <h1>Tabla del {numero}</h1>
                <button type="button" className="btnSumar" onClick={() => setContador(contador + numero)}>
                    Aumentar
                </button>
                <p>El resultado es {contador}</p>
            </div>  
    )
}

export default Card;
