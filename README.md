# week6-D-REEM-TEAM
Places to eat around Nazareth

## User Stories
As a visitor to Nazareth ...

- I can browse recommended places to buy food / coffee nearby
- I can add a new place
- I can add a rating/review of an existing place


## File Structure Plan
public/
- index.html
- list of restaurants (section)
- form for submitting new restaurants (needs to contai all key info (but not rating info)).
- main.css
js/
- main.js (calling all sub-modules)
- listener.js (for submitting forms)
- formatQuery.js (stretch goal)
- request.js (requests to server)
- render.js

src/
- index.js
- router.js

    routes/
    - staticFile.js
    - database.js (add new restaurant to database and render full list)

- search.js

database/
- build.js
- build.sql
- db_connection.js

## Schema
