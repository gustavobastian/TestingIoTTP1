# Repositorio Trabajo Práctico 1 de la materia Testing de Sistemas IoT


En este trabajo práctico se implementa verificación y tésting de código. Es parte de la materia Testing de IoT dictada por Esteban Volentini (https://github.com/evolentini) y Carlos Pantelides (https://github.com/cpantel) y


Herramientas que se utilizan:

* <strong>CHAI</strong>: Libreria para el lenguaje Javascript que incorpora funciones para garantizar que las pruebas lleguen a resultados esperados.

        Url: https://www.chaijs.com/

* <strong>SINON</strong>: Libreria Javascript para generar funciones Spy, Stub o Mock. Este tipo de funciones emulan funciones externas inyectadas en archivo que se prueba.

        Url: https://sinonjs.org/      

* <strong>MOCHA</strong>: Framework que automatiza Testing para el lenguaje Javascript

        Url: https://mochajs.org/


Enunciado: generar una clase llamada lista con los siguientes requerimientos:

* Almacena pares clave:valor.
* Las claves deben ser únicas.
* Las claves son cadenas de texto.
* Se debe poder recuperar un valor a partir de una clave.
* Se debe poder actualizar el valor asociado a una clave.
* Se debe poder recuperar la cantidad de elementos
almacenados en la lista.
* Se debe poder recuperar una lista ordenada con las claves
almacenadas en la lista.
* Se puede borrar una pareja a partir de la clave.


Pruebas a realizar:

* En una lista vacia, comprobar que hay cero elementos almacenados
* En una lista vacía, al agregar un elemento, comprobar que hay un elemento almacenados
* En una lista vacía, al agregar dos elementos, comprobar que hay dos elemento almacenados
* En una lista con elementos, comprobar el error al agregar una clave duplicada con la menor clave preexistente
* En una lista con elementos, comprobar el error al agregar una clave duplicada con la mayor clave preexistente
* En una lista con elementos, comprobar el error al agregar una clave duplicada con una clave intermedia preexistente
* En una lista vacia, comprobar el error al agregar elementos con claves vacias o que no sean cadenas
* En una lista vacia, agregar una clave con un valor conocido, consultar el valor asociado a la clave y comprobar que coinciden
* En una lista con tres o mas elementos, consultar el valor de la primera clave y comprobar que coinciden
* En una lista con tres o mas elementos, consultar el valor de la ultima clave y comprobar que coinciden
* En una lista con tres o mas elementos, consultar el valor de una clave intermdia y comprobar que coinciden
* En una lista con elementos, comprobar el error al buscar una clave que no existe
* En una lista con elementos, comprobar el error al tratar de actualizar una clave que no existe
* En una lista con elementos, actualizar el valor de la primera clave, consultar el valor de la primera clave y comprobar que se actualizo
* En una lista con elementos, actualizar el valor de la ultima clave, consultar el valor de la primera clave y comprobar que se actualizo
* En una lista con elementos, actualizar el valor de una clave intermedia, consultar el valor de la primera clave y comprobar que se actualizo
* En una lista con tres o mas elementos, agregar una clave menor que todas las existentes, comprobar que la lista de claves se obtiene siempre ordenada
* En una lista con tres o mas elementos, agregar una clave mayor que todas las existentes, comprobar que la lista de claves se obtiene siempre ordenada
* En una lista con tres o mas elementos, agregar una clave menor intermedia entre las existentes, comprobar que la lista de claves se obtiene siempre ordenada
* En una lista con elementos, borrar una clave y comprobar que al buscarla no existe
* En una lista con elementos, comprobar el error al borrar una clave que no existe
* En una lista vacia, comprobar el error al borrar una clave


## Pasos para la resolución 
### <strong>Paso 1</strong> : instalación de las herramientas (en caso de que no se haya descargado el repositorio, y no se posea la estructura de directorios)

Inicializamos node

    >npm init  

