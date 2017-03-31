BEGIN;

DROP TABLE IF EXISTS restaurantInfo cascade;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE,
  cuisine VARCHAR(100) NOT NULL,
  address VARCHAR(255) NOT NULL,
  open_hours VARCHAR(255),
  price_range INT NOT NULL
);

INSERT INTO restaurants (name, cuisine, address, open_hours, price_range)
VALUES ('Casa Nova', 'Falafel', 'Al Bishara St 4, Nazareth, 17100', 'Monday-Sunday: 08:00-20:00', 2);

INSERT INTO restaurants (name, cuisine, address, open_hours, price_range)
VALUES ('Tishreen', 'Asian', '24 Marys Road, Nazareth, 14500', 'Monday-Sunday: 13:00-22:00', 5);

INSERT INTO restaurants (name, cuisine, address, open_hours, price_range)
VALUES ('Cheeky Shwarma', 'Fast Food', '6 Shwarma Street', 'Monday-Friday: 16:00-00:00', 5);

COMMIT;

BEGIN;

DROP TABLE IF EXISTS ratings cascade;

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY,
  restaurant_id INT NOT NULL,
  rating INT NOT NULL,
  review TEXT,
  reviewer_name TEXT
);

INSERT INTO ratings (restaurant_id, rating, review, reviewer_name)
VALUES (1, 4, 'Great falafel, noisy parrot', 'King Edgar');

INSERT INTO ratings (restaurant_id, rating, review, reviewer_name)
VALUES (2, 2, 'Average food. Good service', 'Ravenous Reem');

INSERT INTO ratings (restaurant_id, rating, review, reviewer_name)
VALUES (3, 5, 'The cheekiest shwarma I ever ate, seriously!', 'ShwarMacintosh Helper');

COMMIT;
