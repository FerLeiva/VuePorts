# CargoFive-Ports (English)


asadasasfa

# CargoFive-Ports (Español)
Aplicación Web de una sola página con JavaScript, Vue.js y Express.js

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

# SNIPPETS

![image](https://user-images.githubusercontent.com/66581357/189171059-9a7fb2a6-7105-4c80-86fc-0f3342c1f6a4.png)

![image](https://user-images.githubusercontent.com/66581357/189171205-38a9ebc6-6474-4de6-b9d5-495308b7877a.png)
