
/*
Pruebas a realizar
* En una lista vacia, comprobar que hay cero elementos almacenados
* En una lista vacía, al agregar un elemento, comprobar que hay un elemento almacenados
* En una lista vacía, al agregar dos elementos, comprobar que hay dos elemento almacenados
* En una lista vacia, comprobar el error al agregar elementos con claves vacias o que no sean cadenas
* En una lista vacia, agregar una clave con un valor conocido, consultar el valor asociado a la clave y comprobar que coinciden
* En una lista con elementos, comprobar el error al agregar una clave duplicada con la menor clave preexistente
* En una lista con elementos, comprobar el error al agregar una clave duplicada con la mayor clave preexistente
* En una lista con elementos, comprobar el error al agregar una clave duplicada con una clave intermedia preexistente
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


*/

const assert = require("chai").assert;
const ListaN = require("../src/lista");

describe("en una lista vacia", ()=>{

    var Lista = new ListaN();
    /*En una lista vacia, comprobar que hay cero elementos almacenados  */
    it("hay cero elementos", ()=>{
        assert.equal(Lista.count(),0)
    })

    
})

describe("agrego elementos", ()=>{
    /*En una lista vacía, al agregar un elemento, comprobar que hay un elemento almacenados*/
    it("agrego elemento", ()=>{
        var Lista = new ListaN();
        assert.equal(Lista.add("clave","valor"),true)
        assert.equal(Lista.count(),1)
    });
    /*En una lista vacía, al agregar dos elementos, comprobar que hay dos elemento almacenados*/
    it("agrego 2 elementos", ()=>{
        var Lista = new ListaN();
        assert.equal(Lista.add("clave","valor"),true)
        assert.equal(Lista.add("clave2","valor2"),true)
        assert.equal(Lista.count(),2)
    });
    
})

describe("agrego elementos con valores erroneos", ()=>{
    /*En una lista vacia, comprobar el error al agregar elementos con claves vacias o que no sean cadenas*/

    var Lista = new ListaN();
    var resultado = Lista.add(1,1);
    it("la funcion devuelve error",()=>{
        assert.isFalse(resultado);
    })
    it("y no cambia la cantidad de elementos almacenados",()=>{
        assert.equal(Lista.count(),0)
    })


    
})  