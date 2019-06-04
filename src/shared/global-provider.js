import React, { Component } from 'react';

const GlobalContext = React.createContext();

export class GlobalProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }

    changeStatus = (status) => {
        this.setState({loggedIn: status})
    }

    render() {
        return (
            <GlobalContext.Provider 
                value={{loggedIn: this.state.loggedIn, changeStatus: this.changeStatus}}
            >
                {this.props.children}
            </GlobalContext.Provider>
        );
    }
}

export const GlobalConsumer = GlobalContext.Consumer;
