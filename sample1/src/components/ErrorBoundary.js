import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isError: false
        }
    }
    
    static getDerivedStateFromError(error) {
        return {isError: true}
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    render() {
        return (
            <>
              {
                this.isError === true ? 
                    <h1>Something went wrong</h1> 
                :
                    this.props.children 
              }  
            </>
        )
    }
}
