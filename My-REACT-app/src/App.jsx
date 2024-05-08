import Acordion from './components/acordion';
import ColorGenerator from './components/colorGenerator';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import NestedMenu from './components/nested-menu';
import menus from './components/nested-menu/data.js';
import QrCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabsTest from './components/custom-tabs/tab-test.jsx';
import ModalTest from './components/modal-popup/modal-test.jsx';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutoCom from './components/search-autoCom/index.jsx';
import TicTacToe from './components/tic-tac-toe/tictactoe.jsx';
import FeatureFlags from './components/feature-flag/index.jsx';
import FeatureFlagGlobalState from './components/feature-flag/context/index.jsx';
import UseFetchTest from './components/use-fetch/test.jsx';
import ColorGrad from './components/colorGrad/index.jsx';
import ClickOutsideTest from './components/use-outside-click/test.jsx';
import TestUseWindowResize from './components/use-window-resize/test.jsx';
import ScrollTopBottom from './components/scroll-top-bottom/index.jsx';
import ScrollToSection from './components/scroll-top-bottom/scroll-to-section.jsx';

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
        <ImageSlider url={'https://picsum.photos/v2/list'} page={'3'} limit={'10'}/>
      </div>

      <div className='App'>
        {/* Compomente para cargar más data*/}
        <LoadMoreData limit={'10'} />
      </div>

      <div>
        {/*Componente de Menú anidado*/}
        <h2 style={{textAlign: 'center'}}>Tree View / Menu UI / Recursive Navigation Menu</h2>
        <NestedMenu menus={menus} />
      </div>
        
      <div className='App'>
        {/* <QrCodeGenerator /> */}
        <QrCodeGenerator />
      </div>

      <div>
        {/*Componente de switch de light y dark mode*/}
        <LightDarkMode />
      </div>

      <div>
        {/*Componente de indicador de scrolling*/}
        <ScrollIndicator url={'https://dummyjson.com/products?limit=10'} />
      </div>

      <div>
        {/*Componente de tabs*/}
        <TabsTest />
      </div>

      <div>
        {/*Componente de Modal Custom*/}
        <ModalTest />
      </div>

      <div>
        {/*Componente de buscador de github*/}
        <GithubProfileFinder />
      </div>

      <div>
        {/*Componente de buscador de usuarios*/}
        <SearchAutoCom />
      </div>

      <div>
        {/*Componente de juego Tic Tac Toe*/}
        <TicTacToe />
      </div>

      <div>
        {/* Implementación de Feature Flag */}
        {/* <FeatureFlagGlobalState>
          <FeatureFlags />
        </FeatureFlagGlobalState>  */}
      </div>

      <div>
        {/* useFetch - Custom Hook */}
        <UseFetchTest />
      </div>
      <div>
        {/* Componente de graduador de color */}
        <ColorGrad />
      </div>
      <div>
        {/* Componente para testear custom hook para cerrar modal clickando fuera */}
        <ClickOutsideTest />
      </div>
      <div className='App'>
        {/* Componente para testear custom hook para window resize */}
        <TestUseWindowResize />
      </div>
      <div className='App'>
        {/* Componente de feature para hacer scroll al top o al bottom */}
        <ScrollTopBottom />
      </div>
      <div>
        {/* Componente de feature para hacer scroll a una sección de la página */}
        <ScrollToSection />
      </div>
    </>
  );
};

export default App;
