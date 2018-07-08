import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import AuthScreen from './pages/AuthScreen';
import HomePage from './pages/HomePage';
import './css/app.css';

class App extends React.Component {
    componentDidMount() {
        document.addEventListener('contextmenu', event => event.preventDefault());
    }
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/login" component={AuthScreen}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();