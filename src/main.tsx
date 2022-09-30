import React from 'react';
import ReactDOM from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import App from './App';
import './index.css';
import './i18n';
import { registerSW } from 'virtual:pwa-register';

if (process.env.NODE_ENV === 'production') {
	disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

registerSW();
