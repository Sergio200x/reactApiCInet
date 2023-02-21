import React,{useState,useEffect, Component,Fragment} from 'react'
import '../App.js'
import '../../src/css.css'
import loadingif from '../images/loading-32.gif'
import {Link,Route,Switch,BrowserRouter,Routes} from 'react-router-dom'
import ListadoApps from './ListadoDeApps.js'
import Versiones from './Versiones.js'

function Versionesylist(){
    

   

return (
    <div className='versiones'>
        <div className='versiones1'>            
        <Versiones/>
        </div>
        <div className='versiones2'>  
        <ListadoApps/>
        </div>
   </div>
)
   
}
export default Versionesylist
    