import React, { Component } from 'react'
import ReMountCompChild from './ReMountCompChild'

export default class ReMountCompParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             myId: "ID1"
        }
    }
    
    fnSetId = (id) => {
        this.setState({
            myId: id
        })
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.fnSetId("ID1")}>ID1</button>
                <button onClick={()=>this.fnSetId("ID2")}>ID2</button>
                <button onClick={()=>this.fnSetId("ID3")}>ID3</button>

                <ReMountCompChild id={this.state.myId} key={this.state.myId}/>
            </div>
        )
    }
}
