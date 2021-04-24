import React, { Component } from 'react'
import {GlobalDataContext} from './ContextAPIMain'

export default class ContextAPIUses extends Component {
    fnAddTestData = () => {
        this.context.fnSetGlobalData("testData", "new data")
    }

    fnRefreshTestData = () => {
        console.log(this.context.fnGetGlobalData("testData"));
    }

    fnGetUserData = async () => {
        console.log(await this.context.fnFetchValueAndGet("userData"))
    }

    render() {
        return (
            <>
                <h2>Context Sample</h2>
                <button onClick={this.fnAddTestData}>Add Test Data</button>
                <button onClick={this.fnRefreshTestData}>Refresh Test Data</button>
                <button onClick={this.fnGetUserData}>Refresh User Data</button>
            </>
        )
    }
}

ContextAPIUses.contextType = GlobalDataContext;