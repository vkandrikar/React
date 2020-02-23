import React, { Component } from 'react'
import styled from 'styled-components';

const Wrapper = styled.section`
    background-color: green;
    width: 50%;
    margin: 0 auto;
    padding: 20px 0px;
`;

export default class RefChild extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            myName: "Ref Child" 
        }

        this.myRef = React.createRef();
    }
    
    fnGetData = () => {
        return this.myRef.current.value;
    }

    fnGetMyParentData = () => {
        console.log(this.props.fnGetParentData(this.state.myName));
    }

    render() {
        return (
            <Wrapper>
                <input type="text" name="childName" defaultValue="This is child" ref={this.myRef}/>
                <br/>
                <button onClick={this.fnGetMyParentData}>Get Parent Data</button>
            </Wrapper>
        )
    }
}
