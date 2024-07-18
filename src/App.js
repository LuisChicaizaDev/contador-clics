import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logoLuis from './img/logo-luis-developer.png'; //importamos el logo
/* 'useState' es un Hook que permite agregar un estado a un 
* componente funcional
*/
import { useState } from 'react';

function App() {

  /* Para controlar el estado del contador
  * numClicks es el estado inicial - actual
  * setNumClicks el estado que vamos a actualizar 
  * useState pasamos el valor inicial del estado
  */
  const [numClicks, setNumClicks] = useState(0);

  //Creamos functions arrows para los componentes
  const clickCounter = () =>{
    setNumClicks(numClicks +  1);
  }

  const resetCounter = () =>{
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo-luis'
          src={logoLuis}
          alt='Logo de Luis'
        />
      </div>

      <div className='contenedor-contador'>
        <h1>
          Contador de Clics
        </h1>

        <Counter numClicks = {numClicks} />

        <Button 
          text = 'Clic'
          isButtonClick = {true} 
          controlClick = {clickCounter} />

        <Button 
          text = 'Reiniciar'
          isButtonClick = {false} 
          controlClick = {resetCounter} />
      </div>

      <div className='copyright'>
        <a href='https://github.com/LuisChicaizaDev'>
         by: LuisChicaizaDev
        </a>
      </div>

    </div>
  );
}

export default App;
