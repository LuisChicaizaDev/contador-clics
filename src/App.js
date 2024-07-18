import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
//importamos el logo
import logoLuis from './img/logo-luis-developer.png';

function App() {

  //Creamos functions arrows para los componentes
  const clickCounter = () =>{
    console.log('click');
  }

  const resetCounter = () =>{
    console.log('reiniciar');
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

        <Counter numClicks = '5' />

        <Button 
          text = 'Clic'
          isButtonClick = {true} 
          controlClick = {clickCounter} />

        <Button 
          text = 'Reiniciar'
          isButtonClick = {false} 
          controlClick = {resetCounter} />
      </div>

    </div>
  );
}

export default App;
