import React, { Component } from "react";


// // include all of the sub-components
import Search from "./children/Search";
//import { Results } from "./children/Results";
// import Saved from "./children/Saved"
import Hello from "./children/hello";

// // Helper Function
// var helpers = require("./utils/helpers");



  // // Here we set the initial state of our component
  // getInitialState: function() {
  //   return { searchTerm: "", results: "" };
  // },

  // // componentDidUpdate is a lifecycle method that will get run every time the component updates it's
  // // props or state
  // componentDidUpdate: function(prevProps, prevState) {
  //   // If we have a new search term, run a new search
  //   if (prevState.searchTerm !== this.state.searchTerm) {
  //     console.log("UPDATED");

  //     helpers.runQuery(this.state.searchTerm).then(function(data) {
  //       if (data !== this.state.results) {
  //         console.log(data);
  //         this.setState({ results: data });
  //       }
  //       // This code is necessary to bind the keyword "this" when we say this.setState
  //       // to actually mean the component itself and not the runQuery function.
  //     }.bind(this));
  //   }
  // },
  // setTerm: function(term) {
  //   this.setState({ searchTerm: term });
  // },


// Sets up the main components and Export it back for use in other files
export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h1 className="text-center">New York Times Search</h1>
            <p className="text-center">
              <em>Search for and annotate articles of interest.</em>
            </p>
          </div>

          <div className="col-md-6">
            <Hello className="asdf"/>
          </div>
          <div className="col-md-6">
            <Search />
          </div>
        </div>
      </div>
    );
  }
};





        // <div className="col-md-6">

  //           <Search setTerm={this.setTerm} />

  //         </div>

  // <div className="col-md-6">

  //           <Results address={this.state.results} />

  //         </div>
  //         <div className="col-md-6">

  //           <SavedArticles address={this.state.results} />

  //         </div>*/


