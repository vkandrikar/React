import React, {Component} from 'react'

const GlobalDataContext = React.createContext({
    
})

//in app js, should wrap all component (who want to consume global data) by GlobalDataProvider
export default class GlobalDataProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            globalData: []
        }
    }
    
    fnGetGlobalData = (cat) => {
        return this.state.globalData[cat];
    }

    fnSetGlobalData = (cat, data) => {
        let tempArr = this.state.globalData;
        if (tempArr[cat] === undefined)
            tempArr[cat] = [];

        tempArr[cat].push(data);
        this.setState({
            globalData: tempArr
        })
    }

    fnFetchValueAndGet = async (cat) => {
        let tempArr = this.state.globalData;
        if (tempArr[cat] === undefined) {
            console.log("Data not avialble");
            await fetch('https://jsonplaceholder.typicode.com/users')
            .then ( response => response.json() )
            .then ( result => {
                tempArr[cat] = result;
                this.setState({
                    globalData: tempArr
                })
            })
            .catch ( error => {
                console.log(error);
            })
        } 
            
        return this.state.globalData[cat];
    }

    render() {
        return (
            <GlobalDataContext.Provider
                value = {{
                    fnGetGlobalData: this.fnGetGlobalData,
                    fnSetGlobalData: this.fnSetGlobalData,
                    fnFetchValueAndGet: this.fnFetchValueAndGet
                }}
            >
                {this.props.children}
            </GlobalDataContext.Provider>
        )
    }
}

export {GlobalDataContext}