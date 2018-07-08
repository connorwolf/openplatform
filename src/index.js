import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import AuthScreen from './pages/AuthScreen';

import './index.css';

class App extends React.Component {
    render() {
        return(
            <AuthScreen/>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();