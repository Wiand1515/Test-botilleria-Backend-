# BSALE TEST

1. [ Descripcion. ](#desc)
2. [ Objetivos. ](#obj)
3. [ ¿Como utilizar la aplicacion?. ](#usos)
4. [ Front-end ](#front)
5. [ Back-end](#back)
6. [ Enlaces](#link)


<a name="desc"></a>
## 1. Description

Para este proyecto se encomendo la tarea de crear una tienda online, desplegando de maneras independientes tanto front-end como back-end, para esto se utilizaron las siguientes tecnologias:  

Front: 

    - HTML 5  
    - CSS 3
    - Vanilla Javascript
    - Bootstrap

Back:  

    - NodeJS
    - MySql
    - Express
    - Sequelize

<a name="obj"></a>
## 2. Objetivos

Generar una interaccion con una base de datos(Mysql) a traves de una aplicacion web, implementando cliente y servidor.

<a name="usos"></a>
## 3. ¿Como usar la app?

Para utilizar la aplicacion debes clonar o descargar el proyecto disponible en el enlace: <https://github.com/Wiand1515/Test-botilleria-Backend->.  
Una vez descargado el proyecto debes abrirlo con tu editor de codigo de tu eleccion, y abrir una consola en ella se ejecutara el siguiente comando:

`npm install`

Con ello se instalaran todas las dependencias y librerias necesarias para poder correr nuestra aplicacion, una vez concluido este proceso debemos proceder a ejecutar esta linea de comandos nuevamente en la consola:

`npm start`

Al ejecutar esta linea nuestra aplicacion comenzara a ejecutarse en el puerto asignado (3000) por defecto.

Finalmente debemos abrir en nuestro navegador el enlace <http://localhost:3000/> en el cual veremos ya desplegada nuestra aplicacion la cual se encontrara inmediatamente disponible para su uso.

NOTA* Puede que la direccion sea distinta a la sugerida en nuestra documentacion, esto puede deberse a que el puerto se encuentra ocupado por alguna otra aplicacion o tu hayas cambiado la configuracion ten presente siempre que lo posterior a localhost: es el numero del puerto de conexion.  

Una vez cubierto lo necesario para poder ejecutar nuestra aplicacion nos encontraremos con nuestra primera funcionalidad la cual nos permite realizar una busqueda rapida sobre nuestros productos.

Para utilizarla simplemente, escribe algo y si existe en nuestros registros lo encontrara.

a traves de los filtros de categorias, podemos filtrar especificamente lo que estemos buscando y pertenezca a esta.

<a name="front"></a>
## 4. Front

Con respecto a la construccion del front, se utilizo html, css y bootstrap para generar las estructuras, estilos y comportamiento responsivo de la aplicacion. Ademas se trabajo con Vanilla Javascript para poder generar el dinamismo de la siguiente manera:

Funcionalidades hechas con javascript:  

    - Se creo una barra de busqueda para facilitar la informacion.
    - Se implemento filtros de categorias con el fin de simplificar la usabilidad y generar una acceso aun mas rapido que la busqueda a la informacion especifica.
    - Se utiliza FETCH, para conectar la aplicacion con el backend.
    - Se renderizan elementos con la etiqueta template de html e iteraciones de la data resultante del fetch.

<a name="back"></a>
## 5. Backend  

Se crea una API Rest con la utilizacion de Nodejs y express, ademas se genera una conexion con base de datos Mysql.

Esta aplicacion cuenta con 4 endpoints que realizan distintas funcionalidades:  

    - /api/productos => Obtiene todos los productos disponibles
    - /api/categorias => Obtiene todas las categorias disponibles
    - /api/search/productos/{name} => Obtiene todos los productos que contienen el nombre {name} en el 
    - /api/search/categorias/{id} => Obtiene todos los productos asociados a la categoria con el id indicado en {id}

Nota* Las { } en las propiedades listadas mas adelante son solo para fines explicativos, en la practica solo se debe escribir el nombre; ademas para utilizar estos endpoints es necesario anteponer el link de donde este corriendo nuestra app a modo de ejemplo:

`http://localhost:3000/api/search/productos/pisco`

Esta accion retornara todo lo presente con el nombre pisco disponible en los productos (Se recomienda utilizar aplicacion tipo postman o insmonia para una mayor facilidad).

Ademas se utilizo Sequelize para poder conectar e interactuar con la base de datos, esto con el fin de simplificar el trabajo y hacer mas fluida la comunicacion.


<a name="link"></a>
## 6. Enlaces

Puedes ver una prueba en vivo y desplegada de esta aplicacion en el siguiente enlace:

<https://bsale-test-wiand1515.herokuapp.com/>

Nota* Puede que la aplicacion tarde en cargar, esto es debido a que heroku (lugar donde esta desplegado), apaga el servidor si no esta siendo utilizado constantemente y esto retarda un poco la conexion. 


