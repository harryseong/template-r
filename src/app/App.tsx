import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from '../features/home/Home';
import Places from '../features/places/Places';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/places" element={<Places />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
