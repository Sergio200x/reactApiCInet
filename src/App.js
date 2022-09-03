import './App.css';
import Home from './Components/Home.js';

import {Link,Route,Switch,BrowserRouter,Routes} from 'react-router-dom'
 


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
        <Route path="/" exact={true} element={<Home/>}/>    
        
     </Routes>  
   </div>
   </BrowserRouter>
  );
  
}

export default App;
