import React from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

export default function Dashboard(){
    return(
        <div>
            Dashboard
            <Link to='/Wizard'><button>Add New Property</button></Link>
            <House />
            
        </div>
        
        

        
    )
}