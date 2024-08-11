import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Address from './component/Address';
import Call from './component/Call';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
        <Route index element={<Home/>}></Route>
        <Route path='about' element={<About/>} ></Route>
        <Route path='contact' element={<Contact/>} >
          <Route path='call' element={<Call/>}></Route>
          <Route path='address' element={<Address/>}></Route>
        </Route>
      <Route path='*' element={<h1>this is invilid page</h1>}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
