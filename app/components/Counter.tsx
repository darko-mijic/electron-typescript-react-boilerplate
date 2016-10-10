import * as React from 'react';
import { Link } from 'react-router';

interface CounterProps {
	increment: () => void;
	incrementIfOdd: () => void;
	incrementAsync: () => void;
	decrement: () => void;
	counter: Number;
}

class Counter extends React.Component<CounterProps, {}> {

  render() {
    const { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    return (
      <div>
        <div>
          <Link to="/">
            <i className="fa fa-arrow-left fa-3x" />
          </Link>
        </div>
        <div>
          {counter}
        </div>
        <div>
          <button onClick={increment}>
            <i className="fa fa-plus" />
          </button>
          <button onClick={decrement}>
            <i className="fa fa-minus" />
          </button>
          <button onClick={incrementIfOdd}>odd</button>
          <button onClick={() => incrementAsync()}>async</button>
        </div>
      </div>
    );
  }
}

export default Counter;
