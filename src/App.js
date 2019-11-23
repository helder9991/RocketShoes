import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Importação das rotas
import Routes from './routes';

// Importação dos estilos
import GlobalStyles from './styles/global';

// Importação dos componentes
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
