const axios = require("axios");

axios
  .get(
    "https://services.marinetraffic.com/api/shipsearch/48b635d89eb507a3a0bd0ae661a576fc7e87dc8d/mmsi:220417000/protocol:json"
  )
  .then(function(response) {
    // handle success
    console.log("response ", response.data);
  })
  .catch(function(error) {
    // handle error
    console.log("error", error);
  })
  .then(function() {
    // always executed
    console.log("axios test passed.");
  });
