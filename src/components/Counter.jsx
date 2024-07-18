import React from 'react';


//Creamos el componente funcional
function Counter({ numClicks }){
    return(
        <div className='counter'>
            {numClicks}
        </div>
    );
}

export default Counter;