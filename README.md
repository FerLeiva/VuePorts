# CargoFive-Ports (English)
Single page Web API using JavaScript, Vue.js and Express.js

To run the application, you must first clone the repository in a Node.js console via:
    
    git clone

The nex step is to initialize the database. To do that, in the main folder run:

    node backend/src/index.js

That should start the backend server with Express.js and you will have the database up and running. If you get a message in the console like "The server was started on port 8080" and "The database is connected", then it is ready to use. You can check the database at 'http://localhost:8081/ports'

Now you can successfully run the Vue.js application. To do so, open a new terminal and run the following command:

    npm run serve

That runs the server and now you can access the app via 'http://localhost:8080/'

In the App, you can find all the data in the database in a paginated table, each page lists a total of 12 items. You can also filter the table with the input at the top, It will match the passed string against any existing port in the table. If there is no matchable port, it will display an error message instead.

> In case you get the following error when running npm run serve:

    ERROR in Conflict: Multiple assets emit different content to the same filename index.html

Delete the node_modules folder and try running npm install and then npm audit fix --force, I still don't know why this happens sometimes when cloning the app, but it's the quick fix I could find to resolve it. It seems that some of the libraries used by @vue/cli are deprecated or conflicting.

> NOTE: The app is ready to connect with a remote database using MongoDB, but i had some issues doing that so i prefered to just use Express.js and Axios to emulate it.



# CargoFive-Ports (Español)
API Web de una sola página con JavaScript, Vue.js y Express.js

Para ejecutar la aplicación, primero debe clonar el repositorio en una consola de Node.js a través de:
    
    git clone

El siguiente paso es inicializar la base de datos. Para hacer eso, en la carpeta principal ejecuta:

    node backend/src/index.js

Eso debería iniciar el servidor backend con Express.js y tendrá la base de datos en funcionamiento. Si recibe un mensaje en la consola como "The server was started on port 8080" y "The database is connected", entonces está lista para usar. Puede consultar la base de datos en 'http://localhost:8081/ports'

Ahora puede ejecutar con éxito la aplicación Vue.js. Para hacerlo, abra una nueva terminal y ejecute el siguiente comando:

    npm run serve

Eso ejecuta el servidor y ahora puede acceder a la aplicación a través de 'http://localhost:8080/'

En la aplicación, puede encontrar todos los datos en la base de datos en una tabla paginada, cada página enumera un total de 12 elementos. También puede filtrar la tabla con la entrada en la parte superior. Hará coincidir la cadena pasada con cualquier puerto existente en la tabla. Si no hay un puerto coincidente, mostrará un mensaje de error en su lugar.

> En caso de que obtenga el siguiente error al ejecutar npm run serve:

    ERROR in Conflict: Multiple assets emit different content to the same filename index.html

Elimine la carpeta node_modules e intente ejecutar npm install y luego npm audit fix --force, todavía no sé por qué sucede esto a veces al clonar la aplicación, pero es la solución rápida que pude encontrar para resolverlo. Parece que algunas de las bibliotecas utilizadas por @vue/cli están obsoletas o en conflicto.

> NOTA: La aplicación está lista para conectarse con una base de datos remota usando MongoDB, pero tuve algunos problemas para hacerlo, así que preferí usar Express.js y Axios para emularla.
