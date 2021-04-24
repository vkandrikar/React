import React, { Component } from 'react'

export default class DynamicState extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    fnHandleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    
    fnHandleSubmit = () => {
        console.log(this.state)
    }

    render() {
        return (
            <>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" onChange={this.fnHandleChange} />
                </div> 
                <div>
                    <label>Age: </label>
                    <input type="text" name="age" onChange={this.fnHandleChange} />
                </div> 
                <div>
                    <label>City: </label>
                    <input type="text" name="city" onChange={this.fnHandleChange} />
                </div> 
                <button onClick={this.fnHandleSubmit}>Check Data</button>
            </>
        )
    }
}
