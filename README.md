# week6-D-REEM-TEAM
Places to eat around Nazareth

## Getting Started
- Bash commands to run:

  ```bash
  npm install
  npm run createconfig
  DB_URL=enter-db-url-here npm run createconfig # THE USER/PASSWORD will be kept in command line history, please update url manually
  ```
- Setup database

  ```sql
  CREATE USER week6;
  GRANT ALL PRIVILEGES ON DATABASE week6 TO week6;
  ALTER USER week6 WITH PASSWORD 'passwordhere';
  ```


## User Stories
As a visitor to Nazareth ...

- I can browse recommended places to buy food / coffee nearby
- I can add a new place
- I can add a rating/review of an existing place


## File Structure Plan
public/
- index.html
    - (list of restaurants (section))
    - form for submitting new restaurants (needs to contain all key info (but not rating info)).
- main.css

js/
- main.js (calling all sub-modules)
- listener.js (for submitting forms)
- formatQuery.js (stretch goal)
- request.js (requests to server)
- render.js (rendering xhr response to the dom)

src/
- index.js
- router.js

    routes/
    - staticFile.js
    - database.js (add new restaurant to database and render full list)

database/
- build.js
- build.sql
- db_connection.js

config.env

## Schema

**restaurant_info**

|      id       |      name     |    cuisine    |    address    |  open_hours   |  price_range  |
| ------------- | ------------- | ------------- | ------------- | ------------- | ------------- |
|    SERIAL     | VARCHAR(255)  | VARCHAR(100)  | VARCHAR(255)  | VARCHAR(255)  |      INT      |
|  PRIMARY KEY  |   NOT NULL    |   NOT NULL    |   NOT NULL    |               |   NOT NULL    |
|               |    UNIQUE     |               |               |               |               |               |

**restaurant_ratings**

|      id       | restaurant_id |     rating    |     review    | reviewer_name |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|    SERIAL     |      INT      |      INT      |      TEXT     |      TEXT     |
|  PRIMARY KEY  |   NOT NULL    |   NOT NULL    |               |               |               |


## Database Queries
**Get all restaurant info**
```sql
SELECT name, cuisine, address, open_hours, price_range FROM restaurant_info;
```

**Create restaurant**
```sql
INSERT INTO restaurant_info (name, cuisine, address, open_hours, price_range) VALUES ($1, $2, $3, $4, $5);
```

**Stretch goal - review info**
```sql
SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate
FROM Orders
INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID;
```

```sql
-- Doesn't work, please don't make issues
SELECT DISTINCT ON (restaurant_info.name)
restaurant_info.name, restaurant_info.cuisine, restaurant_info.address, restaurant_info.open_hours, restaurant_info.price_range, restaurant_ratings.rating, restaurant_ratings.review, restaurant_ratings.reviewer_name
FROM restaurant_info
JOIN restaurant_ratings ON restaurant_info.id=restaurant_ratings.restaurant_id;
```
