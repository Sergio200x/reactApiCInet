import React,{useState,useEffect} from 'react'
import '../App.js'
import '../../src/css.css'
import loadingif from '../images/loading-32.gif'
import {Link,Route,Switch,BrowserRouter,Routes} from 'react-router-dom'

function Versiones(){
    
    const [DATABASE_SPACE, setDATABASE_SPACE]= useState([]) 
    const [buscarpr,setbuscarpr]= useState("")   
    const [buscar,setbuscar]= useState("")  
    useEffect (() => {        
            fetch("http://localhost:3036/versiones")
            .then(response => response.json())
            .then( data =>{ setDATABASE_SPACE(data.data)} )
            .catch(error =>console.error(error))
            }, []) 

    /* const [DATABASE_SPACEfrq, setDATABASE_SPACEfrq]= useState([])    
    useEffect (() => {        
            fetch("http://localhost:3035/DATABASE_SPACE")
            .then(response => response.json())
            .then( data =>{ setDATABASE_SPACEfrq(data.data)} )
            .catch(error =>console.error(error))
            }, []) */                 
      
const loading = <img src={loadingif} className="loading"/>


const buscador = (version)=>{
    setbuscar(version.target.value)
}
const buscadorp = (buscarpp)=>{
    setbuscarpr(buscarpp.target.value)   
}

//"local": "FSMCA",
let resultado=[]
let vacio="Por Favor ingrese la version y el nombre de la aplicacion a buscar"
if(buscar.length===0 && buscarpr.length===0)
    {
        resultado=[]
        
    }
    else{
        resultado=DATABASE_SPACE.filter((dato)=>       
        dato.Nro_version.toLowerCase()!==(buscar.toLocaleLowerCase())&& dato.Parametro.toLowerCase()===(buscarpr.toLocaleLowerCase()))        
          
        console.log(resultado)
        }




return (
    <div className='container_1'>
    <div className='principal_container'>         
    
        <h2 className='titulo'>DashBoard Cinet</h2>
        <div className='container'>
            
        <div className='inputs'>
        
            <div className='inputs_cont'>
            
                <input 
                    type="text"
                    value={buscar}
                    placeholder='Version'
                    onChange={buscador}
                />        
            </div>
            <div className='inputs_cont'><input
                    type="text"
                    value={buscarpr}
                    placeholder='Aplicacion'
                    onChange={buscadorp}
                />        
            </div>
            </div>
            <div className='titulos'>
            <div className='titulo_numeros_individual'><h4 className='h4_titulo'>Cod_local</h4></div>            
            <div className='titulo_numeros_individual'><h4 className='h4_titulo'> Nombre del local</h4></div>
            <div className='titulo_numeros_individual'><h4 className='h4_titulo'>Aplicativo</h4></div>
            <div className='titulo_numeros_individual'><h4 className='h4_titulo'>Nro de Version</h4></div>
            <div className='titulo_numeros_individual'><h4 className='h4_titulo'>Fecha de Notificación</h4></div>
            <div className='titulo_numeros_individual'><h4 className='h4_titulo'>Equipo</h4></div>
            <div className='titulo_numeros_individual'><h4 className='h4_titulo'>Caja/Nro equipo</h4></div>        
           
            </div>
           
                
        {resultado.length===0? <div className='texto'><h2><strong> Por favor Complete la Version y el aplicativo a Buscar</strong></h2></div>:resultado.map((lista,i)=>{
         return <ul key={i}>
              <div className='list_container_v'> 
             <div className='item_nombre_hd'><li className='item_nombre_v_local'><strong>{lista.Codigo_Local}</strong></li></div>
              <div className='item_nombre_hd'><li className='item_nombre_v_local_nombre'><strong>{lista.Nombre_local}</strong></li></div>
              <div className='item_nombre_hd'><li className='item_nombre_v_local'><strong>{lista.Parametro}</strong></li></div>
              <div className='item_nombre_hd'><li className='item_nombre_v_local'><strong>{lista.Nro_version}</strong></li></div>
              <div className='item_nombre_hd'><li className='item_nombre_v_local_fecha'><strong>{lista.FechaTrans}</strong></li></div>
              <div className='item_nombre_hd'><li className='item_nombre_v_local'><strong>{lista.EQUIPO}</strong></li></div>
              <div className='item_nombre_hd'><li className='item_nombre_v_local'><strong>{lista.Caja}</strong></li></div>      
              </div>   
            </ul>
            })}
            
           
            <div className='container_volver'>                           
            <h2 className='volver'>
                <Link to="/"  className='volverlink_sync'>Volver al Dash Principal</Link>
                    </h2> 
            </div>       
        </div> 

    </div>
<div>
        
</div>
</div>        
)

   
}
export default Versiones
    