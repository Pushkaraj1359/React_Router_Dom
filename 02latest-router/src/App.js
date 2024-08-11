import './App.css'
import {Outlet} from 'react-router-dom'
import Navigation from './component/Navigation';

function App() {
  return (
    <>
        <h1>hello friends</h1>
        <Navigation />
        <main>
          <Outlet/>      
        </main>
    </>
  );
}

export default App;
