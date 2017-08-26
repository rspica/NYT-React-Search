import React, { Component } from 'react';

export default class Button extends Component {
	constructor(props) {
		super();

	}



	render() {

		return(
              <button onClick={() => this.function} className="btn btn-default btn-sm" type="submit">
              	<span className={ this.props.btnIcon }></span>
              	{ this.props.label }
              </button>
		)
	}
}


