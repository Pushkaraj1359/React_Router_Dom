import './App.css';
import {BrowserRouter, Route , Routes} from "react-router-dom"
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navigation from './Component/Navigation';
import Error from './Component/Error';
function App() {
  return (
    <BrowserRouter>
    <Navigation/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
