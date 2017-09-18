import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import TodoApp from "./reducer";
import { addTodo } from "./actions";

let store = createStore(TodoApp);

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
