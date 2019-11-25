import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

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

// Importação do History
import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
