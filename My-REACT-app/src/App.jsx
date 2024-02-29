import Acordion from './components/acordion';
import ColorGenerator from './components/colorGenerator';

function App() {
  return (
    <>
      <div className="App">
        {/* Componente Acordión */}
        <Acordion />
      </div>
      
      <div className='App'>
        {/* Componente Generador Random de Colores */}
        <ColorGenerator />
      </div>
    </>
  );
};

export default App;
