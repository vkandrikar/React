import React, { Component } from 'react'

export default class DynamicState2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userData: []
        }
    }

    fnHandleChange = (evt, index) => {
        let tempData = this.state.userData;
        if (tempData[index] === undefined)
            tempData[index] = [];

        tempData[index][evt.target.name] = evt.target.value;
        this.setState({
            userData: tempData
        })
    }
    
    fnAddNewUser = () => {
        this.setState({
            userData: [...this.state.userData, {username: '', age: 0, city: ''}]
        })
    }

    fnHandleSubmit = () => {
        console.log(this.state)
    }

    render() {
        return (
            <>
                {
                    this.state.userData.map((user, index) => (
                        <div key={index} style={{border: "1px solid"}}>
                            <div>
                                <label>Username: </label>
                                <input type="text" name="username" value={user.username} onChange={(evt) => this.fnHandleChange(evt, index)} />
                            </div> 
                            <div>
                                <label>Age: </label>
                                <input type="text" name="age" value={user.age} onChange={(evt) => this.fnHandleChange(evt, index)} />
                            </div> 
                            <div>
                                <label>City: </label>
                                <input type="text" name="city" value={user.city} onChange={(evt) => this.fnHandleChange(evt, index)} />
                            </div> 
                        </div>
                    ))
                }
                
                <button onClick={this.fnHandleSubmit}>Check Data</button>
                <button onClick={this.fnAddNewUser}>Add User</button>
            </>
        )
    }
}
