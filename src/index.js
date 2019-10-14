import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const initialState = {};
const store = createStore(initialState);

const composeApp = App => (
    <Provider store={store}>
        <App />
    </Provider>
);

const renderApp = () => {
    const App = require("./App").default;
    ReactDOM.render(composeApp(App), document.getElementById("root"));
};

renderApp();

if (module.hot) {
    module.hot.accept("./App", renderApp);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
