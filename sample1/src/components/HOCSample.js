import React, { Component } from 'react'
import withCommonFunctionality from './HOC'

class HOCSample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        this.refInput = React.createRef();
    }
    
    fnTrimString = () => {
        //console.log(this.refInput.current.value)
        const output = document.getElementById("output");
        output.innerHTML = this.props.fnFormatString(this.refInput.current.value, 5);
    }

    render() {
        console.log(this.props)
        return (
            <>
                <button onClick={this.props.fnDoSomething}>Do Something</button>
                <input type="text" ref={this.refInput}/>
                <span id="output"></span>
                <button onClick={this.fnTrimString}>Trim String</button>
            </>
        )
    }
}

export default withCommonFunctionality(HOCSample);