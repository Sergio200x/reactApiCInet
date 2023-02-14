import './App.css';
import Home from './Components/Home.js';
import Semana_anterior from './Components/Semana_Anterior.js'
import Sync from './Components/Locales_Sync'
import HD_Space from './Components/HD_Space'
import {Link,Route,Switch,BrowserRouter,Routes} from 'react-router-dom'
 


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/semanaAnterior" exact={true} element={<Semana_anterior/>}/>
        <Route path="/Sync" exact={true} element={<Sync/>}/>      
        <Route path="/HD_SPACE" exact={true} element={<HD_Space/>}/> 
        
     </Routes>  
   </div>
   </BrowserRouter>
  );
  
}

export default App;
