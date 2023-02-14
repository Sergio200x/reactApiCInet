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

function HD_Space(){
    
    const [HD_SPACE, setHD_SPACE]= useState([])    
    useEffect (() => {        
            fetch("http://192.168.1.57:3036/HD_SPACE")
            .then(response => response.json())
            .then( data =>{ setHD_SPACE(data.data)} )
            .catch(error =>console.error(error))
            }, [])    
   
                    

     let HD_SPACE_locales=[]

            if(HD_SPACE.length>0)
            {
                HD_SPACE_locales.push(HD_SPACE)          
                
            }
            else{
                HD_SPACE_locales.push('No hay datos')               
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
            <div className='container_hd'>
            <div className='titulos_hd'>
                <div className='titulo_nombre_hd'><h4>Local</h4></div>
                <div className='titulo_nombre_hd'><h4>Nombre del local</h4></div>
                <div className='titulo_nombre_hd'><h4>Espacio en disco</h4></div>  
                <div className='titulo_nombre_hd'><h4>Fecha de Logeo</h4></div> 
                <div className='titulo_nombre_hd'><h4>Nombre Equipo</h4></div>  
                <div className='titulo_nombre_hd'><h4>Numero de Caja</h4></div>           
            </div>
                {Array.from(HD_SPACE_locales).map(function(local,i){ 
                    return      (
                    Array.from(local).map(function(locales1,i){                   
                    return <ul key={i} >                                            
                        <div className='list_container_hd'> 
                            <div className='item_nombre_hd'><li className='item_nombre_hd_local'><strong>{locales1.local}</strong> </li></div>
                            <div className='item_nombre_hd'><li className='item_nombre_hd_nombre'><strong>{locales1.nombre_local}</strong> </li></div> 
                            <div className='item_nombre_hd'><li className='item_nombre_hd_space'><strong>{locales1.valor}</strong> </li></div>
                            <div className='item_nombre_hd'><li className='item_nombre_hd_fecha'><strong>{locales1.fecha} </strong></li></div> 
                            <div className='item_nombre_hd'><li className='item_nombre_hd_equipo'><strong>{locales1.equipo} </strong></li></div> 
                            <div className='item_nombre_hd'><li className='item_nombre_hd_caja'><strong>{locales1.nro_caja} </strong></li></div>                      
                        </div>
                    </ul>
                })    )
            })}                      
              <h2 className='volver'>
                <Link to="/"  className='volverlink_sync'>Volver al Dash Principal</Link>
                    </h2>            
                        
            </div> 
	
        </div>
	
    </div>        
    )
}
export default HD_Space;