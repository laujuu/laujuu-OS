import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Projetos from './pages/Projetos';
import Contato from './pages/Contato';
import BaixarCV from './pages/BaixarCV';



class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          <Route path="/projetos" element={ <Projetos /> } />
          <Route path="/contato" element={ <Contato /> } />
          <Route path="/baixar_cv" element={ <BaixarCV /> } />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;