import React, { Component } from "react";



  // // Here we set a generic state associated with the text being searched for
  // getInitialState: function() {
  //   return { term: "" };
  // },

  // // This function will respond to the user input
  // handleChange: function(event) {
  //   // Here we create syntax to capture any change in text to the query terms (pre-search).
  //   // See this Stack Overflow answer for more details:
  //   // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
  //   var newState = {};
  //   newState[event.target.id] = event.target.value;
  //   this.setState(newState);
  // },

  // // When a user submits...
  // handleSubmit: function(event) {
  //   // preventing the form from trying to submit itself
  //   event.preventDefault();
  //   // Set the parent to have the search term
  //   this.props.setTerm(this.state.term);

  //   // Clearing the input field after submitting
  //   this.setState({ term: "" });
  // },

  // Here we describe this component's render method and export the component back for use in other files
export default class Search extends Component {
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Search Parameters</h3>
        </div>
        <div className="panel-body text-center">

         
        </div>
      </div>
    );
  }
};


 // <form onSubmit={this.handleSubmit}>
 //            <div className="form-group">
 //              <h4 className="">
 //                <strong>Location</strong>
 //              </h4>

 //              {/*
 //                Note how each of the form elements has an id that matches the state.
 //                This is not necessary but it is convenient.
 //                Also note how each has an onChange event associated with our handleChange function.
 //              */}
            

 //              <div class="form-group">
 //                <label
 //                for="search">Subject:</label>
 //                <input
 //                  type="text"
 //                  value={this.state.topic}
 //                  className="form-control"
 //                  id="search"
 //                  placeholder="Enter the topic to search"
 //                  onChange={this.handleChange}
 //                  required
 //                  />
 //              </div>

 //              <div class="form-group">
 //                <label
 //                for="start-Yr">Start Year:</label>
 //                <input
 //                  type="text"
 //                  value={this.state.topic}
 //                  className="form-control"
 //                  id="start-Yr"
 //                  placeholder="Enter the start date (year)"
 //                  onChange={this.handleChange}
 //                  required
 //                  />
 //              </div>

 //              <div class="form-group">
 //                <label
 //                for="end-Yr">End Year:</label>
 //                <input
 //                  type="text"
 //                  value={this.state.topic}
 //                  className="form-control"
 //                  id="end-Yr"
 //                  placeholder="Enter the end date (year)"
 //                  onChange={this.handleChange}
 //                  required
 //                  />
 //              </div>


 //                <div className="form-group">
 //                <label
 //                for="num-records">Number of Records to Retrieve:</label>
 //                <select
 //                className="form-control"
 //                id="num-records">
 //                  <option value= "" disabled selected hidden>Choose a number of articles to Retrieve...</option>
 //                  <option value="1">One Article </option>
 //                  <option value="5" selected>Five Articles</option>
 //                  <option value="10">Ten Articles</option>
 //                </select>
 //              </div>

 //              <br />
 //              <button className="btn btn-primary" type="submit">
 //                Submit
 //              </button>
 //            </div>
 //          </form>





