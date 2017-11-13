import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { RouterStore } from 'mobx-react-router';


// import './index.css';
import App from './App.jsx';
import store from './mobx';
import registerServiceWorker from './registerServiceWorker';

const routingStore = new RouterStore();
const app = document.getElementById('root')

ReactDOM.render(
	  <Provider 
	  	bidder={store.bidder}
	  	bids={store.bids}
	  >
    <App />
  </Provider>, app);
registerServiceWorker();
