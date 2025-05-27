import React from 'react';
import '../stylesheets/button.css';

/**
 * Creamos un componente de clase
 * Usamos 'this.props' para acceder a los props del objeto de propiedades
 * del Componente
 */

class Button extends React.Component {
    render() {
        return (
            <button 
                className={ this.props.isButtonClick ? 'button-clic' : 'button-reset' }
                onClick={this.props.controlClick} >
                {this.props.text}
            </button>
        );
    }
}

/* Definimos nuestro componente funcional con 
* sintaxis de desestructuracion
*/
/* function Button({ text, isButtonClick, controlClick }) {
    return (
        <button 
            className={ isButtonClick ? 'button-clic' : 'button-reset' }
            onClick={controlClick} >
            {text}
        </button>
    );
} */

// Con la exportación por defecto solo podemos exportar un elemento del archivo
export default Button;