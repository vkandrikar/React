import React, { Component } from 'react'
import { debounce } from 'debounce'

export default class DebounceSample extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             text: ''
        }

        this.inputRef = React.createRef();
    }

    componentWillUnmount() {
        this.fnChangeHandler.cancel();
        this.fnDebounce.cancel();
    }
    
    fnChangeHandler = debounce (() => {
        console.log("*** fnChangeHandler ***");
        this.setState({
            text: this.inputRef.current.value
        })
    }, 500)

    fnChangeHandler1 = (evt) => {
        console.log("*** fnChangeHandler1 ***");
        console.log(evt.taget.value);
    }

    fnDebounceEvent(...args) {
        this.fnDebounce = debounce(...args);
        return (
            (evt) => {
                evt.persist();
                return this.fnDebounce(evt);
            }
        )
    }

    fnClickHandler = () => {
        console.log("*** fnClickHandler ***");
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} onChange={this.fnChangeHandler}/>
                <input type="text" onChange={this.fnChangeHandler1}/>
                <h3>{this.state.text}</h3>
                <button onClick={this.fnDebounceEvent(this.fnClickHandler, 500)}>Show Data</button>
                <button onClick={debounce(this.fnClickHandler, 500)}>Show Data</button>
            </div>
        )
    }
}
