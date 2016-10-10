import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div>
				<MuiThemeProvider>
        	{this.props.children}
				</MuiThemeProvider>
      </div>
    );
  }
}
