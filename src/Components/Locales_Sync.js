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
    
    const [syncro, setSync]= useState([])    
    useEffect (() => {        
            fetch("http://localhost:3031/synclocales")
            .then(response => response.json())
            .then( data =>{ setSync(data.data)} )
            .catch(error =>console.error(error))
            }, [])    
    const [syncroGMG, setSyncGMG]= useState([])    
            useEffect (() => {        
                    fetch("http://localhost:3031/synclocales")
                    .then(response => response.json())
                    .then( data =>{ setSyncGMG(data.data)} )
                    .catch(error =>console.error(error))
                    }, [])   

     let locales=[]

            if(syncro.length>0)
            {
                locales.push(syncro)
                console.log(locales[0])
            }
            else{
                locales= "No hay datos"                
            } 

    

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
            <div className='container_syncro'>
            <div className='titulos_syncro'>
                <div className='titulo_Nombre_Syncro'><h4>Local</h4></div>
                
                <div className='titulo_Horas_Syncro'><h4>Horas sin Tansmitir</h4></div>
                

                </div>
                {!locales?loading:Array.from(locales).map(function(syncro,i){ 
                    return      (
                    !syncro?loading:Array.from(syncro).map(function(syncro1,i){                   
                    return <ul key={i} >                                            
                        <div className='list_container_syncro'> 
                            <div className='item_nombre_syncro'><li><strong>{syncro1.Codigo_de_local}</strong> </li></div>
                            <div className='numeros_syncro'>
                                <div className='item_syncro'><li><strong>{syncro1.horas} </strong></li></div>                          
                            </div>
                        </div>
                    </ul>
                })    )
            })}                      
            <h2 className='volver'>
                <Link to="/"  className='volverlink'>Volver al Dash Principal</Link>
                    </h2>              
                        
            </div> 

        </div>
    </div>        
    )
}
export default Sync;