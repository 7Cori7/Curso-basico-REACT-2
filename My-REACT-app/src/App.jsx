import Acordion from './components/acordion';
import ColorGenerator from './components/colorGenerator';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';

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

      <div className='App'>
        {/* Componente de star rating */}
        <StarRating nOfStars={10} />
      </div>

      <div className='App'>
        {/* Componente de carrusel de imagenes*/}
        <ImageSlider url={'https://picsum.photos/v2/list'} page='3' limit={'10'}/>
      </div>

      <div className='App'>
        {/* Compomente para cargar más data*/}
        <LoadMoreData />
      </div>
    </>
  );
};

export default App;
