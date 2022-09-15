import './App.css';
import Home from './Components/Home.js';
import Semana_anterior from './Components/Semana_Anterior.js'
import Sync from './Components/Locales_Sync'
import {Link,Route,Switch,BrowserRouter,Routes} from 'react-router-dom'
 


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/semanaAnterior" exact={true} element={<Semana_anterior/>}/>
        <Route path="/Sync" exact={true} element={<Sync/>}/>      
        
     </Routes>  
   </div>
   </BrowserRouter>
  );
  
}

export default App;
