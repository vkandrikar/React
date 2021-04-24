import React, {Component} from 'react'

const withCommonFunctionality = (InputComp) => {
    return class extends Component {
        fnDoSomething = () => {
            console.log("do something");
        }

        fnFormatString = (str, charLimit) => {
            console.log("fnFormatString");
            if (str.length > charLimit) {
                str = str.substr(0, charLimit) + "...";
            }

            return str;
        }

        render () {
            return (
                <InputComp {...this.props} fnDoSomething={this.fnDoSomething} fnFormatString={this.fnFormatString}/>
            )
        }
    }
}

export default withCommonFunctionality;