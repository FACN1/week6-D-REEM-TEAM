initLoadListener(function() {
  makeRequest("GET", "/get-restaurants", function(error, data) {
    if (error) {
      console.error(error);
      return;
    }
    console.log(data);
  });
});
