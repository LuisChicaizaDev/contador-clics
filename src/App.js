import './App.css';
//importamos el logo
import logoLuis from './img/logo-luis-developer.png'

function App() {
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
        
      </div>

    </div>
  );
}

export default App;
