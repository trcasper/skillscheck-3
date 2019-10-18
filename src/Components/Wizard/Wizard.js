import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

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

    add = () => {
        axios.post('/api/house', {
            name: this.state.name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipcode: this.state.zipcode
        })
    }

    render(){
        return(
         <div className='Form'>
             <div className='Form_Header'>Add New Listing
                 <Link to='/'><button>Cancel</button></Link>
             </div>
             <br/>
                    <br/>
             <div className='Form_Body'>
                 <div className='Name'>Name
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})} 
                    />
                 </div>
                 <br/>
                    <br/>
                 <div className='Address'>Address
                    <input
                     type="text"
                     value={this.state.address}
                     onChange={e => this.setState({address: e.target.value})}
                    />
                 </div>
                 <br/>
                    <br/>
                 <div className='City'>City
                    <input
                     type="text"
                     value={this.state.city}
                     onChange={e => this.setState({city: e.target.value})}
                    />
                 </div>
                 <br/>
                    <br/>
                 <div className='State'>State
                    <input
                     type="text"
                     value={this.state.state}
                     onChange={e => this.setState({state: e.target.value})}
                    />
                 </div>
                 <br/>
                    <br/>
                 <div className='Zipcode'>Zipcode
                    <input
                     type="number"
                     value={this.state.zipcode}
                     onChange={e => this.setState({zipcode: e.target.value})}
                    />
                 </div>
                 <br/>
                    <br/>
                 <div className='Complete_Button'>
                    <button onClick={this.add()}>Complete</button>
                 </div>
             </div>
            
         </div>
        )
    }
}