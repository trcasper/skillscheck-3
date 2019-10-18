import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Wizard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }

    render(){
        return(
         <div className='Form'>
             <div className='Form_Header'>Add New Listing
                 <Link to='/'><button>Cancel</button></Link>
             </div>
             <div className='Form_Body'>
                 <div className='Propery_Name'>Property name
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})} 
                    />
                 </div>
                 <div className='Address'>address
                    <input
                     type="text"
                     value={this.state.address}
                     onChange={e => this.setState({address: e.target.value})}
                    />
                 </div>
                 <div className='City'>City
                    <input
                     type="text"
                     value={this.state.city}
                     onChange={e => this.setState({city: e.target.value})}
                    />
                 </div>
                 <div className='State'>state
                    <input
                     type="text"
                     value={this.state.state}
                     onChange={e => this.setState({state: e.target.value})}
                    />
                 </div>
                 <div className='Zipcode'>zipcode
                    <input
                     type="text"
                     value={this.state.zipcode}
                     onChange={e => this.setState({zipcode: e.target.value})}
                    />
                 </div>
             </div>
            
         </div>
        )
    }
}