import React, { Component } from 'react'
import RefChild from './RefChild';
import PortalsSample from './PortalsSample';
import styled from 'styled-components';

const Wrapper = styled.section`
    background-color: orange;
    width: 50%;
    margin: 0 auto;
    padding: 20px 0px;
`;

export default class RefParent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            showPopup: false
        }

        this.myRef = React.createRef();
        this.childRef = React.createRef();
    }
    
    componentDidMount() {
        this.myRef.current.focus();
        console.log(this.fnGetParentData());
    }

    fnGetChildData = () => {
        console.log(this.childRef.current.fnGetData());
    }

    fnGetParentData = (childName) => {
        return `Called by ${childName}: ${this.myRef.current.value}`;
    }

    fnToggelPopup = () => {
        this.setState({
            showPopup: !this.state.showPopup
        })
    }

    render() {
        return (
            <Wrapper>
                <input type="text" name="sample" defaultValue="Hello" ref={this.myRef}/>
                <RefChild ref={this.childRef} fnGetParentData={this.fnGetParentData}></RefChild>
                <button onClick={this.fnGetChildData}>Get Child Data</button>
                <button onClick={this.fnToggelPopup}>Show Popup</button>
                {   
                    this.state.showPopup === true ? 
                        <PortalsSample fnToggelPopup={this.fnToggelPopup}></PortalsSample>
                    :
                        null
                }
            </Wrapper> 
        )
    }
}
