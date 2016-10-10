import * as React from 'react';
import { Link } from 'react-router';

export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <div>
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
        </div>
      </div>
    );
  }
}
