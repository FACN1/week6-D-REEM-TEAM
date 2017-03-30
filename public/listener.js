var initLoadListener = function(callback) {
  window.onload = function() {
    callback();
  }
}

// var initCreateRestaurantListener = function(callback) {
//   var createRestaurantButton = document.querySelector('#newRestaurantForm #submitButton');
//   createRestaurantButton.addEventListener('click', function(event) {
//     event.preventDefault();
//
//     callback();
//   })
// }
