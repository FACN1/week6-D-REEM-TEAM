var Render = (function (response){
    var restaurantListContainer = document.getElementById('restaurant-list-container');

    var restaurantList = document.getElementById('restaurant-list');

    var restaurantListDIV = document.createElement('div');

    var restaurantsArray = data.restaurants.slice();
    restaurantsArray.forEach(function(restaurant){

      // CREATE ELEMENTS

      var restaurantArticle = document.createElement('article');
      restaurantArticle.className = 'restaurant-wrapper';

      var restaurantItemListUL = document.createElement('ul');
      restaurantItemListUL.className = 'restaurant-list-item';

      var restaurantInfoContainerLI = document.createElement('li');

      var restaurantInfoListUL = document.createElement('ul');
      restaurantInfoListUL.className = 'restaurant-info-list';

      var restaurantNameLI = document.createElement('li');
      restaurantNameLI.className = 'restaurant-name';
      restaurantNameLI.textContent = restaurant.name;

      var cuisineLI = document.createElement('li');
      cuisineLI.className = 'cuisine';
      cuisineLI.textContent = restaurant.cuisine;

      var addressLI = document.createElement('li');
      addressLI.className = 'address';
      addressLI.textContent = restaurant.address;

      var openHoursLI = document.createElement('li');
      openHoursLI.className = 'open-hours';
      openHoursLI.textContent = restaurant.open_hours;

      var priceRangeLI = document.createElement('li');
      priceRangeLI.className = 'price-range';
      var priceRangeString = '$'.repeat(restaurant.price_range);
      priceRangeLI.textContent = priceRangeString;

      // APPEND ELEMENTS TO BUILD ARTICLE
      restaurantInfoListUL.appendChild(restaurantNameLI);
      restaurantInfoListUL.appendChild(cuisineLI);
      restaurantInfoListUL.appendChild(addressLI);
      restaurantInfoListUL.appendChild(openHoursLI);
      restaurantInfoListUL.appendChild(priceRangeLI);

      restaurantInfoContainerLI.appendChild(restaurantInfoListUL);

      restaurantItemListUL.appendChild(restaurantInfoContainerLI);

      restaurantArticle.appendChild(restaurantItemListUL);

      restaurantListDIV.appendChild(restaurantArticle);

    });

    restaurantListContainer.replaceChild(restaurantListDIV, restaurantList);

})();
