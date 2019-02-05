import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import store from './src/store';

import './src/assets/common_styles/style.scss';

class App extends Component {

    state = {
        message: 'Welcome to React JS Boilerplate!!!',
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div style={{
                        backgroundColor: '#000000',
                        color: 'white',
                        textAlign: 'center',
                        height: '200px',
                        fontSize: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <div>
                            {this.state.message}
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
   }
}

export default App;