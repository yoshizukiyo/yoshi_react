import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './jsx/1_stage/App1.jsx';
import App2 from './jsx/2_satge/App2.jsx';
import App3 from './jsx/3_satge/App3.jsx';
import App4 from './jsx/4_satge/App4.jsx';
import App5 from './jsx/5_satge/App5.jsx';
import App6 from './jsx/6_satge/App6.jsx';
import App7 from './jsx/7_satge/App7.jsx';
import App8 from './jsx/8_satge/App8.jsx';
import App10 from './jsx/10_satge/App10.jsx';
import App11 from './jsx/11_satge/App11.jsx';
import App12 from './jsx/12_satge/App12.jsx';
import App13 from './jsx/13_satge/App13.jsx';
import App14 from './jsx/14_satge/App14.jsx';
import App15 from './jsx/15_satge/App15.jsx';
import App16 from './jsx/16_satge/App16.jsx';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
	<React.StrictMode>
		<HashRouter>
			<App1 />
			<App2 />
			<App3 />
			<App4 />
			<App5 />
			<App6 />
			<App7 />
			<App8 />
			<App10 />
			<App11 />
			<App12 />
			<App13 />
			<App14 />
			<App15 />
			<App16 />
		</HashRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
