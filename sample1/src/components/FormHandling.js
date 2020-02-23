import React, { Component } from 'react'
import PureComp from './PureComp'
import SimpleComp from './SimpleComp'

export default class FormHandling extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    handleForm = (evt) => {
        if(evt.target.type === "button") {
            evt.preventDefault();
            console.log(this.state);
        } else {
            this.setState({
                [evt.target.name]: evt.target.value
            })
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" name="firstName" defaultValue={this.state.firstName} onChange={this.handleForm}/>
                    <input type="text" name="lastName" defaultValue={this.state.lastName} onChange={this.handleForm}/>
                    <input type="text" name="age" defaultValue={this.state.age} onChange={this.handleForm}/>
                    <button type="button" onClick={this.handleForm}>Show</button>
                </form>
                <PureComp></PureComp>
                <SimpleComp></SimpleComp>
            </div>
        )
    }
}
