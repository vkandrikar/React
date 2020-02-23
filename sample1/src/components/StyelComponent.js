import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h1`
    color: red;
`;

//const Title1 = styled.h3`
//     color: ${props.myColor ? props.myColor : "black"}
//`;

export default class StyleComponent extends Component {
    render() {
        return (
            <div>
                {<Title>Style Component</Title>}
                {/* <Title1 myColor="green">Custom color using props</Title1>
                <Title1>Default color</Title1> */}
                <a href="https://styled-components.com/docs/basics" target="_blank">More details</a>
            </div>
        )
    }
}
