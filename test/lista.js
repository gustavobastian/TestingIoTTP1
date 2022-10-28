
/*
Pruebas a realizar

* En una lista con tres o mas elementos, agregar una clave menor que todas las existentes, comprobar que la lista de claves se obtiene siempre ordenada
* En una lista con tres o mas elementos, agregar una clave mayor que todas las existentes, comprobar que la lista de claves se obtiene siempre ordenada
* En una lista con tres o mas elementos, agregar una clave menor intermedia entre las existentes, comprobar que la lista de claves se obtiene siempre ordenada

*/

const assert = require("chai").assert;
const ListaN = require("../src/lista");


describe("en una lista vacia",async ()=>{

    var Lista = new ListaN();
    /*En una lista vacia, comprobar que hay cero elementos almacenados  */
    it("hay cero elementos", ()=>{
        assert.equal(Lista.count(),0)
    });
    /*
    * En una lista vacia, comprobar el error al borrar una clave
    */
    var resultado=await Lista.delete("uno");    

    it("No se puede borrar en lista vacia", ()=>{
        assert.equal(resultado,false)
    });
})

describe("agrego elementos a una lista vacia", async ()=>{
    /*En una lista vacía, al agregar un elemento, comprobar que hay un elemento almacenados*/
    var Lista = new ListaN();
    it("agrego elemento", async ()=>{        
        let resultado=await Lista.add("clave","valor");
        assert.equal(resultado,true)
        assert.equal(Lista.count(),1)
    })
  
    /* En una lista vacia, agregar una clave con un valor conocido, consultar el valor asociado a la clave y comprobar que coinciden*/
    //Los casos posteriores me parecen redundantes ya que utilizo la instrucción forEach que recorre todo el array
    /*
    * En una lista con tres o mas elementos, consultar el valor de la primera clave y comprobar que coinciden
    * En una lista con tres o mas elementos, consultar el valor de la ultima clave y comprobar que coinciden
    * En una lista con tres o mas elementos, consultar el valor de una clave intermdia y comprobar que coinciden
    * */
    it("se puede recuperar el valor a partir de una clave", async ()=>{        
        await Lista.add("clave","valor");
        let resultado=await Lista.find("clave");
        assert.equal(resultado,"valor");
    })
    /*
    * En una lista con elementos, comprobar el error al buscar una clave que no existe   
    Retorno null... no esta definido 
    */
    it("se presenta error si no existe la clave",async ()=>{                
        var resultado=await Lista.find(("clave2"),"valor");
        assert.equal(resultado,null)
    })
})

describe("agrego 2 elementos a una lista vacia", async ()=>{
    var ListaLocal = new ListaN();
    it("agrego 2 elementos", async ()=>{        
        var element1=await ListaLocal.add("uno","1");
        var element2=await ListaLocal.add("dos","2");
        assert.equal(element1,true)
        assert.equal(element2,true)
        assert.equal(ListaLocal.count(),2)
    });   

    /* En una lista vacia, agregar una clave con un valor conocido, consultar el valor asociado a la clave y comprobar que coinciden*/
    it("se puede recuperar el valor a partir de una clave",async()=>{  
        var resultado1=await ListaLocal.find("uno");
        var resultado2=await ListaLocal.find("dos");
        assert.equal(resultado1,"1");
        assert.equal(resultado2,"2");
    });           
})




describe("agrego elementos con clave duplicada", async ()=>{ 
    /*
    * En una lista con elementos, comprobar el error al agregar una clave duplicada con la menor clave preexistente
    * En una lista con elementos, comprobar el error al agregar una clave duplicada con la mayor clave preexistente
    * En una lista con elementos, comprobar el error al agregar una clave duplicada con una clave intermedia preexistente
    */

    var Lista = new ListaN();
    await Lista.add("uno","1");
    await Lista.add("dos","2");
            
    var resultado=await Lista.add("uno","2");

    it("la funcion devuelve error",()=>{
        assert.isFalse(resultado);
    });

    it("y no cambia la cantidad de elementos almacenados",()=>{
        assert.equal(Lista.count(),2)
    });        

    var resultado2=await Lista.add("dos","2");
    it("la funcion devuelve error en el caso 2",()=>{
        assert.isFalse(resultado2);
    });

    it("y no cambia la cantidad de elementos almacenados en el caso 2",()=>{
        assert.equal(Lista.count(),2)
    });        
})  

describe("agrego elementos con valores erroneos", async ()=>{
    /*En una lista vacia, comprobar el error al agregar elementos con claves vacias o que no sean cadenas*/
    var Lista = new ListaN();
    var resultado = await Lista.add(1,1);

    it("la funcion devuelve error",()=>{
        assert.isFalse(resultado);
    });

    it("y no cambia la cantidad de elementos almacenados",()=>{
        assert.equal(Lista.count(),0)
    });        
})  



describe("elimino elementos a una lista ",async ()=>{
    var ListaLocal = new ListaN();
    await ListaLocal.add("uno","1");
    await ListaLocal.add("dos","2");
    /*
     En una lista con elementos, comprobar el error al borrar una clave que no existe
     */
     
     let resultado1=await ListaLocal.delete("seis");
     it("No se puede borrar una clave que no existe", async ()=>{        
         assert.equal(resultado1,false)
     });
     let resultado5 = await ListaLocal.count();
     it("y no cambia la cantidad de elementos almacenados",async ()=>{                  
             assert.equal(resultado5, 2);
     }); 

     /*
     * En una lista con elementos, borrar una clave y comprobar que al buscarla no existe
     */
     var resultado2= await ListaLocal.delete("uno");
     it("Se puede borrar una clave que existe", ()=>{
         assert.equal(resultado2,true)
     });

     let resultado6= await ListaLocal.count();
     it("y cambia la cantidad de elementos almacenados",async ()=>{
        assert.equal(resultado6,1);
     }); 

     let resultado3=await ListaLocal.find("uno");
     it("y no se puede recuperar el elemento eliminado",async ()=>{
        assert.equal(resultado3,null);
     }); 
})



describe("actualizo elementos",async ()=>{

    var ListaLocal = new ListaN();
        await ListaLocal.add("uno","1");
        await ListaLocal.add("dos","2");    

    /* * En una lista con elementos, comprobar el error al tratar de actualizar una clave que no existe*/
        
        var resultado11= await ListaLocal.update("tres","6");
           it("No se puede actualizar un valor de una clave que no existe",async ()=>{
            assert.equal(resultado11, false);
        });
    /*
    * En una lista con elementos, actualizar el valor de la primera clave, consultar el valor de la primera clave y comprobar que se actualizo
    * En una lista con elementos, actualizar el valor de la ultima clave, consultar el valor de la primera clave y comprobar que se actualizo
    * En una lista con elementos, actualizar el valor de una clave intermedia, consultar el valor de la primera clave y comprobar que se actualizo */

        var resultado12= await ListaLocal.update("uno","6");
        var resultado13= await ListaLocal.find("uno");
        it("Se puede actualizar un valor de una clave que existe",async ()=>{            
            assert.equal(resultado12, true);
        });
        it("Se comprueba el valor actualizado",async ()=>{            
            assert.equal(resultado13, "6");
        });
})
