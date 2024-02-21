
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emplogin from './components/Emplogin';
import Emphome from './components/Emphome';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='emplogin'element={<Emplogin/>}/>
      <Route path='/'element={<Emphome/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
