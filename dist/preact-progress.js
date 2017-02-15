(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('preact')) :
	typeof define === 'function' && define.amd ? define(['preact'], factory) :
	(global.PreactProgress = factory(global.preact));
}(this, (function (preact) { 'use strict';

var STYLE_OUTER = 'width:100%;z-index:9999;top:0';
var STLYE_INNER = 'width:0;height:100%';
var limit = function (v) { return Math.min(v || 0, 100); };

var Progress = (function (Component$$1) {
	function Progress(props) {
		Component$$1.call(this, props);

		this.state = {
			val: limit(props.value)
		};
	}

	if ( Component$$1 ) Progress.__proto__ = Component$$1;
	Progress.prototype = Object.create( Component$$1 && Component$$1.prototype );
	Progress.prototype.constructor = Progress;

	Progress.prototype.componentDidMount = function componentDidMount () {
		(this.props.onStart || this.props.onChange)(this, this.state.val);
	};

	Progress.prototype.componentWillReceiveProps = function componentWillReceiveProps (ref) {
		var value = ref.value;

		this.setState({val: limit(value)});
	};

	Progress.prototype.componentDidUpdate = function componentDidUpdate (ref) {
		var onChange = ref.onChange;
		var onComplete = ref.onComplete;

		var val = this.state.val;
		(val >= 100) ? (onComplete && onComplete(this)) : (onChange && onChange(this, val));
	};

	Progress.prototype.render = function render (ref, ref$1) {
		var id = ref.id;
		var className = ref.className;
		var height = ref.height; if ( height === void 0 ) height = '4px';
		var color = ref.color; if ( color === void 0 ) color = 'black';
		var val = ref$1.val;

		return (
			preact.h( 'div', { id: id, className: className, style: (STYLE_OUTER + ";height:" + height + ";") },
				preact.h( 'div', { style: (STLYE_INNER + ";background-color:" + color + ";width:" + val + "%;transition:all 200ms ease;") })
			)
		)
	};

	return Progress;
}(preact.Component));

return Progress;

})));
