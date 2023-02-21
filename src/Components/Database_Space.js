import React,{useState,useEffect} from 'react'
import '../App.js'
import '../../src/css.css'
import flecha_media from '../images/flecha-centro.png'
import flecha_alta from '../images/flecha-subiendo.png'
import flecha_baja from '../images/flecha-bajando.png'
import estrella from '../images/estrella.png'
import flecha_subiendo from '../images/flecha-diagonal.png'
import loadingif from '../images/loading-32.gif'
import {Link} from 'react-router-dom'

function Database_Space(){
    
    const [DATABASE_SPACE, setDATABASE_SPACE]= useState([])    
    useEffect (() => {        
            fetch("http://192.168.1.57:3036/DATABASE_SPACE")
            .then(response => response.json())
            .then( data =>{ setDATABASE_SPACE(data.data)} )
            .catch(error =>console.error(error))
            }, []) 

     const [DATABASE_SPACEfrq, setDATABASE_SPACEfrq]= useState([])    
    useEffect (() => {        
            fetch("http://192.168.1.57:3035/DATABASE_SPACE")
            .then(response => response.json())
            .then( data =>{ setDATABASE_SPACEfrq(data.data)} )
            .catch(error =>console.error(error))
            }, [])    
   
                    

     let database_locales=[]

            if(DATABASE_SPACE.length>0||DATABASE_SPACEfrq.length>0)
            {
                database_locales.push(DATABASE_SPACE)     
                database_locales.push(DATABASE_SPACEfrq)     
                
            }
            else{
                database_locales.push("No hay Datos")               
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
                <div className='titulo_nombre_hd'><h4>Espacio de BBDD</h4></div>  
                <div className='titulo_nombre_hd'><h4>Fecha de Logeo</h4></div> 
                <div className='titulo_nombre_hd'><h4>Nombre Equipo</h4></div>  
                <div className='titulo_nombre_hd'><h4>Numero de Caja</h4></div>           
            </div>
                {Array.from(database_locales).map(function(database_local,i){ 
                    return      (
                    Array.from(database_local).map(function(database_local1,i){                   
                    return <ul key={i} >                                            
                        <div className='list_container_hd'> 
                            <div className='item_nombre_hd'><li className='item_nombre_hd_local'><strong>{database_local1.local}</strong> </li></div>
                            <div className='item_nombre_hd'><li className='item_nombre_hd_nombre'><strong>{database_local1.nombre_local}</strong> </li></div> 
                            <div className='item_nombre_hd'><li className='item_nombre_hd_space'><strong>{database_local1.valor}</strong> </li></div>
                            <div className='item_nombre_hd'><li className='item_nombre_hd_fecha'><strong>{database_local1.fecha} </strong></li></div> 
                            <div className='item_nombre_hd'><li className='item_nombre_hd_equipo'><strong>{database_local1.equipo} </strong></li></div> 
                            <div className='item_nombre_hd'><li className='item_nombre_hd_caja'><strong>{database_local1.nro_caja} </strong></li></div>                      
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
export default Database_Space;