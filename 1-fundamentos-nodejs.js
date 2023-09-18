/*

Fundamentos de Node.js:

📌 ¿Que es Node.js y para que sirve?

Node.js es un entorno de ejecución de JavaScript de código abierto y multiplataforma.
Node.js esta formado por un conjunto de herramientas:

- Motor V8(El mismo de Google Chrome)
- Utilidades(async, archivos, http...)

¿Pero para que sirve?

Podremos ejecutar JavaScript sin un navegador web, Lo que llaman servidor o backend:
- Aplicaciones de E/S, streaming(archivos),
- Aplicaciones en red,
- Aplicaciones de terminal,
- Chatbots. etc

Caracteristicas principales de Node.js:

- Es Single thread,
- Es no bloqueante,
- Orientado a eventos

Vamos a ver unos conceptos importantes para entender lo anterior:

Proceso: Programa o conjunto de instrucciones en ejecución,
Thread: Subproceso, minima cantidad de instrucciones que se pueden ejecutar de forma independiente.
En resumen un proceso de un programa en ejecución se compone de varios Thread que se van ejecutando.

Bloqueante vs no bloqueante:
Bloqueante: Impide la ejecución del resto de tareas hasta que final.
No bloqueante: Continua la ejecución del resto de tareas aunque no haya finalizado.

Orientación a eventos:
Nos permite notificar sucesos y ejecutar operaciones en base a ellos.

📌 Comunicación en internet. Cliente/Servidor:

El principal modelo de comunicación o estilo arquitectónico de las plicaciones en internet es el modemo cliente servidor.
Este módelo, arquitectura de software que distribuye una aplicación en dos partes.
Una es el servidor.
Otra es el cliente, es quien consulta al servidor.

Cada una de las partes se puede desarrollar por separado, incluso con tecnologias diferentes.
Deben tener un protocolo de comunicación en común. Este es el protocolo http.

📌 Que cambia con respecto al frontend: Diferencias respecto al frontend:

Similitudes entre frontend y backend:
- En ambas partes podemos ejecutar código JavaScript.
- En frontend disponemos de funcionalidades del navegador, Las APIs.
- En backend tambien disponemos de funcionalidades del sistema operativo. Lectura/Escritura, etc.
- El código puede ser compatible pero en distintos contextos.

📌 Globals objects:

Vamos a ver algunas de las funcionalidades que nos aporta node.js.
Vamos a ver el objeto global de node.js.

Son objetos que tenemos accesibles en nuestro código JavaScript mientras este se ejecute con node.js.

El principal objeto que nos dara acceso al resto de objetos es el objeto global.
Lo vemos por pantalla:

console.log(global);
console.log(Object.getOwnPropertyNames(global));

El objeto global es lo que es el navegador el objeto window. Con sus diferencias.

Para mas información tenemos la documentacion donde podemos ver mas sobre todos los objetos:

https://nodejs.org/dist/latest-v16.x/docs/api/globals.html

📌 Objeto console:

Vamos a ver este objeto, muy usado. Con el podemos imprimir por consola los datos que le pasemos como parametro. Puede admitir multiples parametros separados por comas.

⛳--- console.log() ---
console.log("Hola que tal");
console.log("Hola %s %s", "como", "estas.")

Aqui vemos una forma de pasar parametros, con el % le decimos que el siguiente sera un parametro del primer strins y luego le decimos que tipo es con la s.
Es igual que lo anterior. Esto no se suele usar, solo curiocidad.

⛳--- console.error() y console.warn(); ---
Uno para marcar errores y otro para warning.
En Node.js por terminal se imprimen igual, no hay diferencias.
Lo que se suele es usar librerias externas que nos dan esa funcionalidad de mostrar por colores cada salida. Lo veremos mas adelante.

⛳--- console.trace() ---
Funciona igual que el console.log().Pero nos imprime una traza que nos lleva a invocarlo.

const printName = (nombre) => console.trace(nombre);

const start = ()=>{
  const nombre = 'Luis';
  printName(nombre)
}

start();

⛳--- console.dir() ---
Solo admite dos parametros, el primer parametro es un objeto. Si pasamos un solo parametro se comporta como el console.log().
El segundo parametro que pasaremos en un objeto de opciones.

Esto nos viene bien para ver el contenido mas profundo de un objeto.

console.dir(global, {showHidden:true, depth:4});

⛳--- console.clear() ---
Lo que hace es limpiar la terminal.
console.clear();

⛳--- console.assert() ---
Este admite dos parametros, primero una condición, algo que retorne un booleano, y segundo es lo que queremos imprimir por pantalla:
Es como un log condicional.

const num = 35;
console.assert(num < 35, num);

⛳--- console.time() console.timelog() console.timeEnd()---
Tenemos ter metodos:
Sirven para medir el tiempo, podemos medir el performance de nuestra app con estos métodos.

const labelCounter = 'Contador';
console.time(labelCounter);

for (let i = 0; i < 5000000; i++) {
  if (i === 2500000) console.timeLog(labelCounter);
  Math.random(Math.random());
}

console.timeEnd(labelCounter);

De nuevo para mas profundidad tenemos la documentación:

https://nodejs.org/dist/latest-v16.x/docs/api/console.html

📌Objeto Process:

Este objeto representa el proceso en ejecución de Node.
Cuando ejecutamos con node un archivo lo que hacemos es ejecutar un proceso en el pc.

Este objeto nos proporciona por sus metodo y propiedades informacion importante referentes al proceso en ejecucion y sobre que sistema y hardware se esta ejecutando.

⛳process.cwd()
console.log(process.cwd());
Nos muestra la ruta absoluta, el directorio donde hemos ejecutado node, osea el directorio o carpeta donde ejecutamos a node.

⛳process.argv
console.log(process.argv);
Nos retorna un arreglo con dos rutas absolutas, la ruta absoluta al ejecutable de node, y la ruta a donde se ejecuta node.

Al invocar por consola a node podemos pasar unos parametros.

node 1-fundamentos-nodejs.js Jose Pablo 22

[
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\alfsa\\Desktop\\nodejs-learnthis\\1-fundamentos-nodejs.js',
  'Jose',
  'Pablo',
  '22'
]

Asi pasamos parametros al momento de ejecutarse el proceso.

Asi podemos ignorar los dos elementos del arr para solo obtener los parametros que pasamos por consola:

const [,,...params] = process.argv;
console.log(params);

OJO--- Esta es una de las propiedades mas importantes y que mas usaremos con node: Para las variables de entorno.
⛳process.env
console.log(process.env);

Las variables de entorno son cadenas que contienen información acerca del entorno para el sistema y el usuario que ha iniciado sesión en ese momento. Algunos programas de software usan la información para determinar dónde se colocan los archivos (como los archivos temporales).

⛳process.exit()
Se usa para matar un proceso.

⛳process.stdin - process.stdout - process.stdrr: Tenemos estas tres propiedades:

Hacen referencia a las entradas y salidas que tiene node con la terminal del sistema operativo. Podemos leer e imprimir en la terminal.
Es un concepto algo complejo pero lo veremos las adelante como funcionan estos objetos.

Ver la documentación:
https://nodejs.org/dist/latest-v16.x/docs/api/process.html

📌 Readline: Utilidad interna de node, no es un objeto global, es una utilidad que debemos importar:💛💛💛 Guaoooo Muy interesante!!!!
Nos permite establecer comunicación entre nuestro código y una entrada de datos. La entrada de datos por medio de la consola.
Necesitamos importarla como una libreria. No es un objeto global.

const readline = require('readline');
const consoleInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

consoleInterface.question('¿Cual es tu nombre?\n', (answer) => {
  consoleInterface.write(`Tu nombre es ${answer}.`);
  consoleInterface.close();
});


Para ver la documentación:
https://nodejs.org/dist/latest-v16.x/docs/api/readline.html

📌 Util: Es una libreria nativa de node muy util para transformar o comprobar ciertos tipos de datos.
Es muy similar a readline, osea la debemos importar:

const util = require('util);

Tenemos unos metodos que nos permite transformar funciones asincronas en callback y promesas.

const util = require('util');

const asynchonousFn = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() < 0.5) resolve('Hola Mundo');
    reject('ERROR');
  });
};

const startA = () => {
  const callbackfn = util.callbackify(asynchonousFn);
  callbackfn((err, value) => {
    if (!err) console.log(value);
    else console.log(err);
  });
};

startA();

const startB = () => {
  const callbackfn = util.callbackify(asynchonousFn);
  const promisifyFn = util.promisify(callbackfn);
  promisifyFn()
    .then((value) => console.log(value))
    .catch((err) => {
      console.log(err);
    });
};

startB();

⛳Mas metodos: types Para seguir comprobando tipos:
Types tiene muchos metodos interesantes

const { types } = require('util');
console.log(types.isDate('22/12/12'));
console.log(types.isDate(new Date()));

⛳isDeepStrictEqual: Podemos comparar el valor de dos objetos:

const { isDeepStrictEqual } = require('util');

const obj1 = {
  a: 23,
  b: { c: 'Mario' },
};

const obj2 = {
  a: 23,
  b: { c: 'Mario' },
};

console.log(isDeepStrictEqual(obj1, obj2));

Enlace a la documentación:
https://nodejs.org/dist/latest-v16.x/docs/api/util.html

📌 Como explorar la documentacion en node.js: Tenemos la pagina oficial que al principio es dificil manejarse en ella, pero tambien tenemos una web donde podemos buscar por medio de su buscador.

https://nodejs.org/es/docs
https://devdocs.io/
*/
