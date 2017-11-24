import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {configureStore} from "./redux/store/configureStore";

import './index.css';
import 'font-awesome/css/font-awesome.css';
import 'toastr/build/toastr.css';

export const store = configureStore();

const WithRouter = () => (
    <BrowserRouter onUpdate={() => window.scrollTo(0, 0)}>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
