// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/index.js';
// import Destaque from './components/Destaque/destaque.js';
// import Maquinas from './components/maquinas/maquinas.js';
// import Beneficios from './components/beneficios/beneficios.js';
// import Processador from './components/processador/processador.js';
// import Grafico from './components/grafico/grafico.js';
// import Formulario from './components/formulario/formulario.js';
// import Time from './components/time/time.js'
// import Rodape from './components/rodape/rodape.js';

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Header />
        {/* <Destaque />
        <Maquinas />
        <Beneficios />
        <Processador />
        <Grafico />
        <Formulario />
        <Time />
        <Rodape /> */}
        
      </header>
    </div>
  );
}

export default App;
