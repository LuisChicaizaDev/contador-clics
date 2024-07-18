import React from 'react';
import '../stylesheets/counter.css';


//Creamos el componente funcional
function Counter({ numClicks }){
    return(
        <div className='counter'>
            {numClicks}
        </div>
    );
}

export default Counter;