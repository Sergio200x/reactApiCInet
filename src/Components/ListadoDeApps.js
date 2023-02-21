import React,{useState,useEffect} from 'react'
import '../App.js'
import '../../src/css.css'
import loadingif from '../images/loading-32.gif'

function ListadoApps(){
    
    const [listado, Setlistado]= useState([]) 
   
    /*useEffect (() => {        
            fetch("http://192.168.1.57:3036/listadoDeApps")
            .then(response => response.json())
            .then( data =>{ Setlistado(data.data)} )
            .catch(error =>console.error(error))
            }, []) 
*/
    /* const [DATABASE_SPACEfrq, setDATABASE_SPACEfrq]= useState([])    
    useEffect (() => {        
            fetch("http://localhost:3035/DATABASE_SPACE")
            .then(response => response.json())
            .then( data =>{ setDATABASE_SPACEfrq(data.data)} )
            .catch(error =>console.error(error))
            }, []) */                 
      
const loading = <img src={loadingif} className="loading"/>

let listadoapps=["Actualizadatos","AppMtz","Centralizador","CentralizadorComanda","DescargaLocal",
"DualpointCaja",
"Dualpointllamador",
"Informes",
"Informes",
"Meli",
"OCX",
"PantallaComanda",
"Peya",
"Profit",
"Rappi",
"totem.exe"]


return (
    <div className='container_list'>
        <div className='principal_container_list'>     
            <h2 className='titulo'>Listado de Apps</h2>                             
                   
            <div className='listadoapp'>   
            {!listadoapps? loading:listadoapps.map((lista,i)=>{
            return <ul key={i}>
            <div className='list_container_list'> 
            <div className='item_nombre_list'><li className='item_nombre_v_list'><strong>{lista}</strong></li></div>
            </div>   
            </ul>
            })}                
        </div> 

    </div>
<div>
        
</div>
</div>        
)

   
}
export default ListadoApps