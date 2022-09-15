import React,{useState,useEffect} from 'react'
import '../App.js'
import '../../src/css.css'
import flecha_media from '../images/flecha-centro.png'
import flecha_alta from '../images/flecha-subiendo.png'
import flecha_baja from '../images/flecha-bajando.png'
import estrella from '../images/estrella.png'
import logo_Cinet from '../images/LogoCinetMinimal.png'
import flecha_subiendo from '../images/flecha-diagonal.png'
import loadingif from '../images/loading-32.gif'
import {Link,Route,Switch,BrowserRouter,Routes} from 'react-router-dom'

function Sync(){
    const url="http://localhost:3031/synclocales"
    const [syncro,setSync]=useState()
   
        const fetchApi= async()=>{
            const response = await fetch(url)
            
            const responseJSON= await response.json()
            setSync(responseJSON)  
                
    }   
    useEffect(()=>{
        fetchApi()
    },[])
     
   


    

const icono_flecha_media= <img src={flecha_media} className="icono" />
const icono_flecha_baja= <img src={flecha_baja} className="icono" />
const icono_flecha_alta= <img src={flecha_alta} className="icono_flechaalta" />
const icono_estrella= <img src={estrella} className="icono_lente" />
const icono_flecha_diagonal = <img src={flecha_subiendo} className="icono"/>
//const icono_Cinet = <img src={logo_Cinet} clasName="logo"width="30%"  />
const loading = <img src={loadingif} className="loading"/>


   

    return (
        <div className='container_1'>
        <div className='principal_container'>         
        
            <h2 className='titulo'>DashBoard Cinet</h2>
            <div className='container'>
                <div className='titulos'>
                <div className='titulo_nombres'><h4 className='titulo_individual'>Local</h4></div>
                <div className='titulo_numeros'>
                <div className='titulo_numeros_individual'><h4 className='h4_titulo'> Estado</h4></div>
                <div className='titulo_numeros_individual'><h4 className='h4_titulo'> Obs</h4></div>
                              
                </div>
                </div>
                {!syncro?loading:syncro.data.map(function(syncro,i){
                    if(syncro.Estado_Local==='Desactualizado'){
                    return <ul key={i} >
                                            
                        <div className='list_container'> 
                        
                        <div className='numeros'>
                        <div className='item'><li><strong>{syncro.Codigo_de_local} </strong></li></div>                            
                        <div className='item'><li><strong>{syncro.Estado_Local} </strong></li></div>
                        
                            
                        </div>
                        </div>
                    </ul>
               } })}                            
            <h2 className='volver'>
                <Link to="/Sync"  className='volverlink'>Semana Anterior</Link>
                    </h2>                
                        
            </div> 

        </div>
    </div>        
    )
}
export default Sync;