initLoadListener(function() {
  makeRequest("GET", "/get-restaurants", function(error, data) {
    if (error) {
      console.error(error);
      return;
    }
    renderToDOM(data)
  });
});
// initCreateRestaurantListener(function() {
//   var newRestaurantForm = document.getElementById('newRestaurantForm');
//   var postData = new FormData(newRestaurantForm);
//   console.log(postData);
//   makeRequest("POST", "/submit-restaurant", function(res) {
//     console.log('response: ', res);
//   }, postData);
// })
