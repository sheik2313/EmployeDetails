
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Emplogin from './components/Emplogin';
import Emphome from './components/Emphome';
import Empdetail from './components/Empdetail';
import Editemp from './components/Editemp';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='emplogin'element={<Emplogin/>}/>
      <Route path='/'element={<Emphome/>}/>
      <Route path='/empdetail' element={<Empdetail/>}/>
      <Route path='/editemp/:id'element={<Editemp/>}/>
      
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
