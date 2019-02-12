import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import 'assets/common_styles/style.scss';

class App extends Component {

    state = {
        message: 'Welcome to React JS Boilerplate!!!',
    }

    render() {
        return (
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
        );
    }
}

export default App;