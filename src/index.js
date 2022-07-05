import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './layout/index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Specs = lazy(() => import('./main/specs'));
const Multimidia = lazy(() => import('./main/multimidia'));
const Images = lazy(() => import('./main/images'));
const Contact = lazy(() => import('./main/contact'));
const Main = lazy(() => import('./main/main'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<h1>Carregando...</h1>}>
        <Routes>
          <Route path='/' element={<App />} >
            <Route path='/' element={<Main />} />
            <Route path='/specs' element={<Specs />} />
            <Route path='/images' element={<Images />} />
            <Route path='/multimidia' element={<Multimidia />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);