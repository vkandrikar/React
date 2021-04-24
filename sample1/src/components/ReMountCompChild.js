import React, { Component } from 'react'

export default class ReMountCompChild extends Component {
    constructor(props) {
        console.log("*** Child Constructor ***");
        super(props)
    
        this.state = {
             
        }
    }
    
    componentDidMount() {
        console.log("*** Child componentDidMount ***");
    }

    render() {
        console.log("*** Child render ***");
        return (
            <div>
                {this.props.id}
            </div>
        )
    }
}
