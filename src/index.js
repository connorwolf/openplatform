import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import AuthScreen from './pages/AuthScreen';
import './css/app.css';

class App extends React.Component {
    componentDidMount() {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }
    render() {
        return(
            <AuthScreen/>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();