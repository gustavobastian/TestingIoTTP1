
/*
Pruebas a realizar
*/

const assert = require("chai").assert;
const lista = require("../src/lista");


describe("en una lista vacia", ()=>{

    var Lista = new lista();
    /*En una lista vacia, comprobar que hay cero elementos almacenados  */
    it("hay cero elementos", ()=>{
        assert.equal(Lista.count(),0)
    });
    /*
    * En una lista vacia, comprobar el error al borrar una clave
    */

    it("No se puede borrar en lista vacia", async ()=>{
        var resultado=await Lista.delete("uno");    
        assert.equal(resultado,false)
    });
})

describe("agrego elementos a una lista vacia",  ()=>{
    /*En una lista vacía, al agregar un elemento, comprobar que hay un elemento almacenados*/
    var Lista = new lista();
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

describe("agrego 2 elementos a una lista vacia",  ()=>{
    var Lista = new lista();
    it("agrego 2 elementos", async ()=>{        
        var element1=await Lista.add("uno","1");
        var element2=await Lista.add("dos","2");
        assert.equal(element1,true)
        assert.equal(element2,true)
        assert.equal(Lista.count(),2)
    });   

    /* En una lista vacia, agregar una clave con un valor conocido, consultar el valor asociado a la clave y comprobar que coinciden*/
    it("se puede recuperar el valor a partir de una clave", async()=>{  
        var resultado1=await Lista.find("uno");
        var resultado2=await Lista.find("dos");
        assert.equal(resultado1,"1");
        assert.equal(resultado2,"2");
    });           
})




describe("agrego elementos con clave duplicada", ()=>{ 
    /*
    * En una lista con elementos, comprobar el error al agregar una clave duplicada con la menor clave preexistente
    * En una lista con elementos, comprobar el error al agregar una clave duplicada con la mayor clave preexistente
    * En una lista con elementos, comprobar el error al agregar una clave duplicada con una clave intermedia preexistente
    */

    var Lista = new lista();
    

    it("la funcion devuelve error", async()=>{
        await Lista.add("uno","1");
        await Lista.add("dos","2");            
        var resultado=await Lista.add("uno","2");
        assert.isFalse(resultado);
    });

    it("y no cambia la cantidad de elementos almacenados",()=>{
        assert.equal(Lista.count(),2)
    });        

    
    it("la funcion devuelve error en el caso 2", async()=>{
        var resultado2=await Lista.add("dos","2");
        assert.isFalse(resultado2);
    });

    it("y no cambia la cantidad de elementos almacenados en el caso 2",()=>{
        assert.equal(Lista.count(),2)
    });        
})  

describe("agrego elementos con valores erroneos",  ()=>{
    /*En una lista vacia, comprobar el error al agregar elementos con claves vacias o que no sean cadenas*/
    var Lista = new lista();
    

    it("la funcion devuelve error", async()=>{
        var resultado = await Lista.add(1,1);
        assert.isFalse(resultado);
    });

    it("y no cambia la cantidad de elementos almacenados",()=>{
        assert.equal(Lista.count(),0)
    });        
})  



describe("elimino elementos a una lista ", ()=>{
    var Lista = new lista();
    
    /*
     En una lista con elementos, comprobar el error al borrar una clave que no existe
     */
     
     
    it("No se puede borrar una clave que no existe", async ()=>{        
        await Lista.add("uno","1");
        await Lista.add("dos","2");
        let resultado1=await Lista.delete("seis");
        assert.equal(resultado1,false)
     });
     
    it("y no cambia la cantidad de elementos almacenados", async ()=>{                  
        let resultado5 = await Lista.count();
        assert.equal(resultado5, 2);
     }); 

     /*
     * En una lista con elementos, borrar una clave y comprobar que al buscarla no existe
     */
     
    it("Se puede borrar una clave que existe", async ()=>{
        var resultado2= await Lista.delete("uno");
        assert.equal(resultado2,true)
     });

     
    it("y cambia la cantidad de elementos almacenados", async ()=>{
        let resultado6= await Lista.count();
        assert.equal(resultado6,1);
     }); 

     
    it("y no se puede recuperar el elemento eliminado", async ()=>{
        let resultado3=await Lista.find("uno");
        assert.equal(resultado3,null);
     }); 
})



describe("actualizo elementos", ()=>{
    
    var Lista = new lista();        

    /* * En una lista con elementos, comprobar el error al tratar de actualizar una clave que no existe*/
        
    
        
    it("No se puede actualizar un valor de una clave que no existe",async ()=>{
            await Lista.add("uno","1");
            await Lista.add("dos","2"); 
            var resultado11= await Lista.update("tres","6");
            assert.equal(resultado11, false);
        });
    /*
    * En una lista con elementos, actualizar el valor de la primera clave, consultar el valor de la primera clave y comprobar que se actualizo
    * En una lista con elementos, actualizar el valor de la ultima clave, consultar el valor de la primera clave y comprobar que se actualizo
    * En una lista con elementos, actualizar el valor de una clave intermedia, consultar el valor de la primera clave y comprobar que se actualizo */
        var resultado13;
        it("Se puede actualizar un valor de una clave que existe",async ()=>{            
            var resultado12= await Lista.update("uno","6");
             resultado13= await Lista.find("uno");
            assert.equal(resultado12, true);
        });
        it("Se comprueba el valor actualizado",async ()=>{            
            assert.equal(resultado13, "6");
        });
})

describe("Obtención de lista ordenada", ()=>{

          
    /*
    * En una lista con tres o mas elementos, agregar una clave menor que todas las existentes, comprobar que la lista de claves se obtiene siempre ordenada    
    * En una lista con tres o mas elementos, agregar una clave menor intermedia entre las existentes, comprobar que la lista de claves se obtiene siempre ordenada
    */

    it("Al agregar 3 pares se obtiene la lista ordenada",async ()=>{
        var Lista = new lista();  
        await Lista.add("uno","1");
        await Lista.add("dos","2"); 
        await Lista.add("cuatro","4"); 

        /*En una lista con tres o mas elementos, agregar una clave mayor que todas las existentes, comprobar que la lista de claves se obtiene siempre ordenada*/
        await Lista.add("seis","6"); 
        
        let listaOrdenada= [{'clave':"uno",'valor':"1"},{'clave':"dos",'valor':"2"},{'clave':"cuatro",'valor':"4"},{'clave':"seis",'valor':"6"}]
        
        var resultado= await Lista.getLista();

        for (let index = 0; index < listaOrdenada.length; index++) {

            assert.equal(resultado[index].clave, listaOrdenada[index].clave);
            assert.equal(resultado[index].valor, listaOrdenada[index].valor);
            
        }
        
    });


    it("Al agregar 1 menor se obtiene la lista ordenada",async ()=>{
        var Lista = new lista();  
        await Lista.add("uno","1");
        await Lista.add("dos","2"); 
        await Lista.add("cuatro","4"); 

        /*En una lista con tres o mas elementos, agregar una clave mayor que todas las existentes, comprobar que la lista de claves se obtiene siempre ordenada*/
        await Lista.add("tres","3"); 
        
        let listaOrdenada= [{'clave':"uno",'valor':"1"},{'clave':"dos",'valor':"2"},{'clave':"tres",'valor':"3"},{'clave':"cuatro",'valor':"4"}]
        
        var resultado= await Lista.getLista();

        for (let index = 0; index < listaOrdenada.length; index++) {

            assert.equal(resultado[index].clave, listaOrdenada[index].clave);
            assert.equal(resultado[index].valor, listaOrdenada[index].valor);
            
        }
        
    });

    it("Al agregar desordenados se obtiene la lista ordenada",async ()=>{
        var Lista = new lista();  
        await Lista.add("dos","2");
        await Lista.add("cuatro","4"); 
        await Lista.add("uno","1");         
        await Lista.add("tres","3"); 
        
        let listaOrdenada= [{'clave':"uno",'valor':"1"},{'clave':"dos",'valor':"2"},{'clave':"tres",'valor':"3"},{'clave':"cuatro",'valor':"4"}]
        
        var resultado= await Lista.getLista();

        for (let index = 0; index < listaOrdenada.length; index++) {

            assert.equal(resultado[index].clave, listaOrdenada[index].clave);
            assert.equal(resultado[index].valor, listaOrdenada[index].valor);
            
        }
        
    });

    /**test con una lista con mas elementos */
    it("Al agregar desordenados se obtiene la lista ordenada(lista con mayor cantidad de elementos)",async ()=>{
        var Lista = new lista();  
        await Lista.add("dos","2");        
        await Lista.add("uno","1"); 
        await Lista.add("cuatro","4");
        
        await Lista.add("cinco","5"); 
        await Lista.add("diez","10"); 
        await Lista.add("once","11"); 

        
        await Lista.add("tres","3"); 
        
        let listaOrdenada= [{'clave':"uno",'valor':"1"},{'clave':"dos",'valor':"2"},{'clave':"tres",'valor':"3"},{'clave':"cuatro",'valor':"4"},{'clave':"cinco",'valor':"5"},{'clave':"diez",'valor':"10"},{'clave':"once",'valor':"11"}
                            ]
        
        resultado= await Lista.getLista();

        for (let index = 0; index < listaOrdenada.length; index++) {

            assert.equal(resultado[index].clave, listaOrdenada[index].clave);
            assert.equal(resultado[index].valor, listaOrdenada[index].valor);
            
        }
        
    });




})