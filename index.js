import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ContextProvider } from './components/Context';
import App from './components/App';

ReactDOM.render(
	<ContextProvider>
		<Router>
			<App></App>
		</Router>
	</ContextProvider>,
	document.getElementById('root')
);
