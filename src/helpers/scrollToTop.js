import { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ScrollToTop extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	componentDidUpdate(prevProps) {
		this.props.location.pathname !== prevProps.location.pathname && window.scrollTo(0, 0);
		this.props.location.pathname && window.scrollTo(0, 0);
	}
	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);
