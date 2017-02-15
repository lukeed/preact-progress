import { h, Component } from 'preact';

const STYLE_OUTER = 'width:100%;z-index:9999;top:0';
const STLYE_INNER = 'width:0;height:100%';
const limit = v => Math.min(v || 0, 100);

export default class Progress extends Component {
	constructor(props) {
		super(props);

		this.state = {
			val: limit(props.value)
		};
	}

	componentDidMount() {
		(this.props.onStart || this.props.onChange)(this, this.state.val);
	}

	componentWillReceiveProps({ value }) {
		this.setState({val: limit(value)});
	}

	componentDidUpdate({ onChange, onComplete }) {
		const val = this.state.val;
		(val >= 100) ? (onComplete && onComplete(this)) : (onChange && onChange(this, val));
	}

	render({ id, className, height='4px', color='black' }, { val }) {
		return (
			<div id={ id } className={ className } style={ `${STYLE_OUTER};height:${height};` }>
				<div style={ `${STLYE_INNER};background-color:${color};width:${val}%;transition:all 200ms ease;` }></div>
			</div>
		)
	}
}
