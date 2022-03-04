# CargoFive-Ports
Single page Web API using JavaScript, Vue.js and Express.js

> To run the application, you must first clone the repository in a node console via
    
    git clone

> The nex step is to run the database. To do that, in the main folder run:

    node backend/src/index.js

That should start the backend server with Express.js and you will have the database up and running. If you get a message in the console like "The server was started on port 8080" and "The database is connected", then it is ready to use. You can check the database at 'http://localhost:8081/ports'

> Now you can successfully run the Vue.js application. To do so, open a new terminal and run the following command:

    npm run serve

That runs the server and now you can access the app via 'http://localhost:8080/'

In the App, you can find all the data in the database in a organized table. You can also filter the table with the input at the top, It will match the passed string against any existing port in the table. If there is no matchable port, it will display an error message instead.

> In case you get the following error when running npm run serve:

    ERROR in Conflict: Multiple assets emit different content to the same filename index.html

Delete the node_modules fold and try running npm install and then npm audit fix --force, I still don't know why this happens sometimes when cloning the app, but it's the quick fix I could find to resolve it. It seems that some of the libraries used by @vue/cli are deprecated or conflicting.
