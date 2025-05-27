import React from 'react';
import '../stylesheets/counter.css';

/**
 * Creamos un componente de clase
 * Usamos 'this.props' para acceder a los props del objeto de propiedades
 * del Componente
 */

class Counter extends React.Component {
    render(){
        return(
            <div className='counter'>
                {this.props.numClicks}
            </div>
        );
    }
}

export default Counter;