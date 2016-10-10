import * as React from 'react';
import { Link } from 'react-router';
import * as FloatingActionButton from 'material-ui/FloatingActionButton';
import Tooltip from 'material-ui/internal/Tooltip';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ContentPlaylistAdd from 'material-ui/svg-icons/av/playlist-add';
import styles from './Counter.css';

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
				<div className={styles.backButton}>
					<Link to="/">
						<i className="fa fa-arrow-left fa-3x" />
					</Link>
				</div>
				<div className={`counter ${styles.counter}`}>
					{counter}
				</div>
				<div className={styles.btnGroup}>
					<FloatingActionButton zDepth={0} className={styles.btn} onClick={increment}>
						<ContentAdd />
					</FloatingActionButton>
					<FloatingActionButton zDepth={0} className={styles.btn} onClick={decrement}>
						<ContentRemove />
					</FloatingActionButton>

					<FloatingActionButton
						zDepth={0}
						className={styles.btn}
						onClick={incrementIfOdd}
						onMouseEnter={() => { this.setState({ hoveredTooltip: true }); }}
						onMouseLeave={() => { this.setState({ hoveredTooltip: false }); }}
					>
						<ContentPlaylistAdd />
					</FloatingActionButton>

					<Tooltip
						show={this.state.hoveredTooltip}
						label={'Add if counter is odd'}
						style={{ right: 62, top: 16 }}
						horizontalPosition="left"
						verticalPosition="top"
					/>

					<button className={styles.btn} onClick={() => incrementAsync()}>async</button>
				</div>
			</div>
    );
  }
}

export default Counter;
