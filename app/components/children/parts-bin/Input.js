import React, { Component } from 'react';

export default class Input extends Component {
	render() {
        console.log(this.props);
		return(

		    <div class="form-group">
            <label for={ this.props.id }>{ this.props.label }</label>
              <input
                className="form-control"
                type="text"
                value={ 2 }
                id={ this.props.id }
                placeholder={ this.props.placeholder }
                required
                />
        </div>
		)
	}
}