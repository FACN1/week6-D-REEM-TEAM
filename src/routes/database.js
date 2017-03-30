// receives traffic from router.js
    // forwards SELECT and INSERT queries to database
    // receives restaurant info and reviews from database
// forwards database info to request.js via router
const dbConnection = require('../../database/db_connection.js');
const qs = require('querystring');
// create a new restaurant in database


// retrieve restaurants from database

// create a new review of an existing restaurant




var getRestaurants = (req, res) => {
  dbConnection.query("SELECT name, cuisine, address, open_hours, price_range FROM restaurant_info;", (err, dbRes) => {
    if (err) {
      console.log(err);
      return;
    }
    var restaurants = dbRes.rows.map((row) => {
      return {
        "name": row.name,
        "cuisine": row.cuisine,
        "address": row.address,
        "open_hours": row.open_hours,
        "price_range": row.price_range
      }
    })

    var responseData = {
      "restaurants": restaurants
    }
    res.writeHead(200, {"content-type": "application/json"});
    res.write(JSON.stringify(responseData));
    res.end();
  })
}
var createRestaurant = (req, res) => {
//  dbConnection.query(`INSERT INTO users (name, location) VALUES ($1, $2)`, [values['username'], values['location']];
  var requestText = '';
  req.on('data', (data) => {
    requestText += data;
  })
  req.on('end', () => {
    // postText
    var formData = qs.parse(requestText);
    console.log('Formdata: ', formData);

    dbConnection.query(`INSERT INTO restaurant_info (name, cuisine, address, open_hours, price_range) VALUES ($1, $2, $3, $4, $5)`, [formData["submitName"], formData["submitCuisine"], formData["submitAddress"], formData["submitOpenHours"], formData["submitPriceRange"]], (error, dbRes) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("database response is: ", dbRes);
      res.end();
    });


  })
  req.on('error', (error) => {
    if (error) {
      console.error(error);
      return;
    }
  })


}


module.exports = {
  getRestaurants: getRestaurants,
  createRestaurant: createRestaurant
};
