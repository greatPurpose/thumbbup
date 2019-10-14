import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import './App.css';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>
const DeafaultLayout = React.lazy(()=>import("./containers/DefaultLayout"));

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }
}

export default App;
