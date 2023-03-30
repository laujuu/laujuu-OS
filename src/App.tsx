import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
// import NotFound from './components/NotFound';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <MainPage /> } />
          {/* <Route component={ NotFound } /> */}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;