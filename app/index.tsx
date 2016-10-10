import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';

// Needed for onTouchTap (http://stackoverflow.com/a/34015469/988941)
injectTapEventPlugin();

ReactDOM.render(<Router routes={routes} history={hashHistory} />, document.getElementById('root'));
