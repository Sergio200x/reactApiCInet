import React,{useState,useEffect} from 'react'
import '../App.js'
import '../../src/css.css'
import flecha_media from '../images/flecha-centro.png'
import flecha_alta from '../images/flecha-subiendo.png'
import flecha_baja from '../images/flecha-bajando.png'
import estrella from '../images/estrella.png'

function App(){
    const url="http://localhost:3030/"
    const [tickets,setTicket]=useState()
   
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
const icono_flecha_alta= <img src={flecha_alta} className="icono" />
const icono_estrella= <img src={estrella} className="icono_lente" />
const minimo_Necesario =120
const minimo_diario_Nec=minimo_Necesario/5
const minimo_x_hora = minimo_diario_Nec/8
const horas_mesa =[
    {Horas:28,Nombre:"Facundo_p"},
    {Horas:40,Nombre:"MaximoT"},
    {Horas:28,Nombre:"LeandroT"},    
    {Horas:32,Nombre:"Leonel"},
    {Horas:23,Nombre:"FacundoL"},
    {Horas:33,Nombre:"Gabriel"},
    {Horas:40,Nombre:"NicolasR"} ]



 

    return (

        <div className='principal_container'> 
        
            <h2 className='titulo'>Tickets Cinet</h2>
            <div className='container'>
                <div className='titulos'>
                <div className='titulo_nombres'><h4>Mesa de Ayuda</h4></div>
                <div className='titulo_numeros'>
                <div className='titulo_numeros_individual'><h4>Hoy</h4></div>
                <div className='titulo_numeros_individual'><h4>Semana Actual</h4></div>
                <div className='titulo_numeros_individual'><h4>Prom. Semanal</h4></div>
                <div className='titulo_numeros_individual'><h4>Min. Semanal</h4></div>
                </div>
                </div>
                {!tickets?"Cargando...":tickets.data.map(function(ticket,i){
                    return <ul key={i} >
                        <div className='list_container'> 
                        <div className='item_nombre'> <li><strong>{ticket.Mesa}</strong> </li></div> 
                        <div className='numeros'>                            
                        <div className='item'><li><strong>{ticket.cerrados_al_dia}</strong></li></div> 
                        <div className='item'><li><strong>{ticket.cerrados_semana}</strong></li> </div> 
                        <div className='item'><li><strong>{(Math.round((ticket.cerrados_3meses/3)/4))}</strong></li> </div>
                        <div className='item'><li><strong>{((ticket.cerrados_3meses/3)/4)>minimo_x_hora*horas_mesa[i].Horas?icono_estrella:
                                                    ((ticket.cerrados_3meses/3)/4)==minimo_x_hora*horas_mesa[i].Horas/1.01?icono_flecha_alta:
                                                    ((ticket.cerrados_3meses/3)/4)>=minimo_x_hora*horas_mesa[i].Horas/2?icono_flecha_media:icono_flecha_baja}</strong> </li> </div>
                    
                        </div>
                        </div>
                    </ul>
                })}                            
                           
                            
            </div> 

        </div>

    )
}
export default App;