import React from 'react';

/* Definimos nuestro componente funcional con 
* sintaxis de desestructuracion
*/
function Button({ text, isButtonClick, controlClick }) {
    return (
        <button 
            className={ isButtonClick ? 'button-clic' : 'button-reset' }
            onClick={controlClick} >
            {text}
        </button>
    );
}

// Con la exportación por defecto solo podemos exportar un elemento del archivo
export default Button;