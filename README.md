Ahora si está bien???

# CargoFive-Ports (English)

Single Page Application using JavaScript, Vue.js and Express.js

To run the application, you must first clone the repository in a Node.js console via:

    git clone git clone git clone git clone git clone clone clone clone clone

The nex step is to initialize the database. To do that, in the main folder run:

    node backend/src/index.js***NO FUNCIONA!!!!!!!!!***

That should start the backend server with Express.js and you will have the database up and running. If you get a message in the console like "The server was started on port 8080" and "The database is connected", then it is ready to use. You can check the database at 'http://localhost:8081/ports'

Now you can successfully run the Vue.js application. To do so, open a new terminal and run the following command:

    npm run serve***NO FUNCIONA!!!!!!!!!***

That runs the server and now you can access the app via 'http://localhost:5555/'

In the App, you can find all the data in the database in a paginated table, each page lists a total of 12 items. You can also filter the table with the input at the top, It will match the passed string against any existing port in the table. If there is no matchable port, it will display an error message instead.

> In case you get the following error when running npm run serve:

    ERROR ERROR ERROR ERROR in Conflict: Multiple assets emit different content to the same filename index.html

Delete the node_modules folder and try running npm install and then npm audit fix --force, I still don't know why this happens sometimes when cloning the app, but it's the quick fix I could find to resolve it. It seems that some of the libraries used by @vue/cli are deprecated or conflicting.

> NOTE NOTE NOTE NOTE: The app is ready to connect with a remote database using MongoDB, but i had some issues doing that so i prefered to just use Express.js and Axios to emulate it.


# SNIPPETS

![image](https://user-images.githubusercontent.com/66581357/189171059-9a7fb2a6-7105-4c80-86fc-0f3342c1f6a4.png)

![image](https://user-images.githubusercontent.com/66581357/189171205-38a9ebc6-6474-4de6-b9d5-495308b7877a.png)
feature/camila

Comentario
