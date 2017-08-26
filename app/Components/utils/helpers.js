// Include the axios package for performing HTTP requests (promise based alternative to request)
import axios from "axios";
import search from "./../children/Search"

// NYT API autorization key
var nytAuthKey = "8c93a771d5cf4414b9f1a3292e6970d8";

// Search Parameters
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;

// Helper functions (in this case the only one is runQuery)
export helpers = {

  runQuery: function(location) {

    console.log(location);

    // NYT api call for articles


    var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" + subject + "&facet_field=day_of_week&begin_date=" + begin_date + "&end_date=" + end_date + "&api-key=" +
      nytAuthKey;

    return axios.get(queryURL).then(function(response) {

      console.log(response);
      return response.data.results[0].formatted;
    });
  }
};

// We export the helpers object (which contains runQuery)
module.exports = helpers;


 