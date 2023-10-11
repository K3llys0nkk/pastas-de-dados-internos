
import './App.css';
import './components/header/Header';
import Header from './components/header/Header';
import DadosProntuarios from './components/header/dados-prontuarios/dados-prontuarios';



function App() {
  return (
  <div>

      <div className='header'>
        <Header />
      </div>

      <div className='prontuarios'>
        <DadosProntuarios />
      </div>

  </div>
  );
}

export default App;
