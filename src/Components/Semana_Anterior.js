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


function App_semana_anterior(){
    const url="http://192.168.1.57:3030/semana_pasada"
    const [tickets_semana_anterior,setTicket]=useState()
   
        const fetchApi= async()=>{
            const response = await fetch(url)
            
            const responseJSON= await response.json()
            setTicket(responseJSON)  
                
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
const minimo_Necesario =120
const minimo_diario_Nec=minimo_Necesario/5
const minimo_x_hora = minimo_diario_Nec/8
const horas_mesa =[
    {Horas:35,Nombre:"Facundo_p"},
    {Horas:32,Nombre:"MaximoT"},
    {Horas:28,Nombre:"LeandroT"},    
    {Horas:32,Nombre:"Leonel"},
    {Horas:23,Nombre:"FacundoL"},
    {Horas:33,Nombre:"Gabriel"},
    {Horas:40,Nombre:"NicolasR"} ]
//se agregan 7 horas a facu_P,se quitan horas a maxi ya que 
//divide su tiempo con 5 asec
/*<h2 className='volver'>
<Link to="/"  className='volverlink'>Volver al Inicio</Link>
 </h2> */
 

    return (
        <div className='container_1'>
        <div className='principal_container'>         
        
            <h2 className='titulo'>DashBoard Cinet</h2>
            <div className='container'>
                <div className='titulos_ult_semana'>
                <div className='titulo_nombres'><h4 className='titulo_individual'>Mesa de Ayuda</h4></div>
                <div className='titulo_numeros'>              
                <div className='titulo_numeros_individual'><h4 className='h4_titulo'>Sem. Ant. Vs Prom. Sem.</h4></div>                
                <div className='titulo_numeros_individual'><h4 className='h4_titulo'>Minimo Semanal</h4></div>
                
                </div>
                </div>
                {!tickets_semana_anterior?loading:tickets_semana_anterior.data.map(function(tickets_semana_anterior,i){
                    return <ul key={i} >                     
                        <div className='list_container'> 
                        <div className='item_nombre'> <li><strong>{tickets_semana_anterior.Mesa}</strong> </li></div> 
                        <div className='numeros'>                        
                 
                        <div className='item'><li><strong>{tickets_semana_anterior.Total_tickets_cerrados_semana!==0?((tickets_semana_anterior.Total_tickets_cerrados_semana)>(minimo_x_hora*horas_mesa[i].Horas)+5?icono_estrella:
                                                    (tickets_semana_anterior.Total_tickets_cerrados_semana)===minimo_x_hora*horas_mesa[i].Horas?icono_flecha_alta:
                                                    (tickets_semana_anterior.Total_tickets_cerrados_semana)>=minimo_x_hora*horas_mesa[i].Horas/1.33?icono_flecha_diagonal:
                                                    (tickets_semana_anterior.Total_tickets_cerrados_semana)>=minimo_x_hora*horas_mesa[i].Horas/2?icono_flecha_media:icono_flecha_baja):
                                                    icono_flecha_baja}</strong> 
                                                    </li> 
                            </div>                       
                            
                        <div className='item'><li><strong>{tickets_semana_anterior.Total_tickets_cerrados_3meses===0?"--":
                                                (tickets_semana_anterior.Total_tickets_cerrados_semana>Math.round((tickets_semana_anterior.Total_tickets_cerrados_3meses/3)/4))?icono_estrella:
                                                tickets_semana_anterior.Total_tickets_cerrados_semana===(Math.round((tickets_semana_anterior.Total_tickets_cerrados_3meses/3)/4))?icono_flecha_alta:
                                                tickets_semana_anterior.Total_tickets_cerrados_semana>=(Math.round((tickets_semana_anterior.Total_tickets_cerrados_3meses/3)/4)/1.33)?icono_flecha_diagonal:
                                                tickets_semana_anterior.Total_tickets_cerrados_semana>=(Math.round((tickets_semana_anterior.Total_tickets_cerrados_3meses/3)/4))/2?icono_flecha_media:icono_flecha_baja} 
                                                </strong></li> 
                            </div>
                       
                    
                        </div>
                        </div>
                    </ul>
                    
                })}                            
                          
                          <h2 className='volver'>
                <Link to="/"  className='volverlink'>Pagina Principal</Link>
                    </h2>              
            </div> 

        </div>
    </div>        
    )
}
export default App_semana_anterior;