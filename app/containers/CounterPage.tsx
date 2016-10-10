import * as React from 'react';
import * as actions from '../actions/counter';

import Counter from '../components/Counter';

export default class CounterPage extends React.Component<{}, {}> {
	render() {
		return (
			<Counter increment={actions.increment}
					 incrementIfOdd={actions.incrementIfOdd}
					 incrementAsync={actions.incrementAsync}
					 decrement={actions.decrement}
					 counter={1}
			/>
		);
	}
}
