import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Importação do Reactotron
import './config/reactotronConfig';

// Importação das rotas
import Routes from './routes';

// Importação dos estilos
import GlobalStyles from './styles/global';

// Importação dos componentes
import Header from './components/Header';

// Importação do Redux
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
