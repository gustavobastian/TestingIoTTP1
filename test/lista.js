const assert = require("chai").assert;
const lista = require("../src/lista");

describe("en una lista vacia", ()=>
{
    let Lista = new lista();
    it("comprobar que hay cero elementos almacenados", ()=>
    {
        assert.equal(Lista.count(),0)
    });
    it("No se puede borrar", async ()=>
    {
        let resultado= Lista.delete("uno");    
        assert.equal(resultado,false)
    });
})

describe("Existiendo una lista",  ()=>
{    
    let Lista = new lista();
    it("Estando la lista vacía, al agregar un elemento, compruebo que hay un elemento almacenados", async ()=>
    {        
        let resultado= Lista.add("clave","valor");
        assert.equal(resultado,true)
        assert.equal(Lista.count(),1)
    })
    it("Al tener claves almacenadas, se puede recuperar el valor a partir de una clave", async ()=>
    {        
        Lista.add("clave","valor");
        let resultado= Lista.find("clave");
        assert.equal(resultado,"valor");
    })
    it("Si posee elementos, se presenta error si no existe la clave",async ()=>
    {                
        let resultado= Lista.find(("clave2"),"valor");
        assert.equal(resultado,null)
    })
})

describe("Agregando mas de un elemento a una lista vacia",  ()=>
{
    let Lista = new lista();
    it("agrego 2 elementos", async ()=>
    {        
        let element1= Lista.add("uno","1");
        let element2= Lista.add("dos","2");
        assert.equal(element1,true)
        assert.equal(element2,true)
        assert.equal(Lista.count(),2)
    });   
    it("se puede recuperar el valor a partir de una clave", async()=>
    {  
        let resultado1= Lista.find("uno");
        let resultado2= Lista.find("dos");
        assert.equal(resultado1,"1");
        assert.equal(resultado2,"2");
    });           
})

describe("agrego elementos con clave duplicada", ()=>
{ 
    let Lista = new lista();
    it("la funcion devuelve error", async()=>
    {
        Lista.add("uno","1");
        Lista.add("dos","2");            
        let resultado= Lista.add("uno","2");
        assert.isFalse(resultado);
    });
    it("y no cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),2)
    });        
    it("la funcion devuelve error en el caso 2", async()=>
    {
        let resultado2= Lista.add("dos","2");
        assert.isFalse(resultado2);
    });
    it("y no cambia la cantidad de elementos almacenados en el caso 2",()=>
    {
        assert.equal(Lista.count(),2)
    });        
})  

describe("En una lista vacia",  ()=>
{
    let Lista = new lista();
    it("la funcion devuelve error al agregar (1,1) cuya clave no  es cadena", async()=>
    {
        let resultado =  Lista.add(1,1);
        assert.isFalse(resultado);
    });
    it("y no cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),0)
    });        
    it("la funcion devuelve error al agregar (null,'uno') cuya clave es nula ", async()=>
    {
        let resultado =  Lista.add(null,"uno");
        assert.isFalse(resultado);
    });
    it("y no cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),0)
    });        
    it("la funcion devuelve error al agregar ('uno',null) cuya valor es nulo ", async()=>
    {
        let resultado =  Lista.add("uno",null);
        assert.isFalse(resultado);
    });
    it("y no cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),0)
    });        
    it("la funcion permite al agregar ('uno',1) cuya valor no es cadena", async()=>
    {
        let resultado =  Lista.add("uno",1);
        assert.isTrue(resultado);
    });
    it("y cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),1)
    });        
})  

describe("En una lista con elementos", ()=>
{
    let Lista = new lista();
    it("No se puede borrar una clave que no existe", async ()=>
    {        
        Lista.add("uno","1");
        Lista.add("dos","2");
        let resultado1= Lista.delete("seis");
        assert.equal(resultado1,false)
    });
    it("y no cambia la cantidad de elementos almacenados", async ()=>
    {                  
        let resultado5 =  Lista.count();
        assert.equal(resultado5, 2);
    }); 
    it("Se puede borrar una clave que existe", async ()=>
    {
        let resultado2=  Lista.delete("uno");
        assert.equal(resultado2,true)
    });
    it("y cambia la cantidad de elementos almacenados", async ()=>
    {
        let resultado6=  Lista.count();
        assert.equal(resultado6,1);
    }); 
    it("y no se puede recuperar el elemento eliminado", async ()=>
    {
        let resultado3= Lista.find("uno");
        assert.equal(resultado3,null);
    }); 
})

describe("En una lista con elementos", ()=>
{   
    let Lista = new lista();        
    it("No se puede actualizar un valor de una clave que no existe",async ()=>
    {
        Lista.add("uno","1");
        Lista.add("dos","2"); 
        let resultado11=  Lista.update("tres","6");
        assert.equal(resultado11, false);
    });
    let resultado13;
    it("Se puede actualizar un valor de una clave que existe",async ()=>
    {            
        let resultado12=  Lista.update("uno","6");
        resultado13=  Lista.find("uno");
        assert.equal(resultado12, true);
    });
    it("Se comprueba el valor actualizado",async ()=>
    {            
        assert.equal(resultado13, "6");
    });
})

describe("En una lista con tres o mas elementos", ()=>
{    
   it("Se puede obtener la lista de claves ordenada",async ()=>
   { 
        let Lista = new lista();   
        Lista.add("uno","1"); 
        Lista.add("cuatro","4");  
        Lista.add("dos","2");                  
        Lista.add("seis","6");           
        let listaOrdenada= ["cuatro","dos","seis","uno"]          
        let resultado= Lista.getLista();  
        for (let index = 0; index < listaOrdenada.length; index++) 
        {
            assert.equal(resultado[index], listaOrdenada[index]);         
        }          
    }); 
    it("Al agregar 1 una clave menor se obtiene la lista ordenada",async ()=>
    {
        let Lista = new lista();  
        Lista.add("uno","1");
        Lista.add("dos","2"); 
        Lista.add("cuatro","4"); 
        Lista.add("alba","123"); 
        let listaOrdenada= ["alba","cuatro","dos","uno"] 
        let resultado= Lista.getLista();
        for (let index = 0; index < listaOrdenada.length; index++) 
        {
            assert.equal(resultado[index], listaOrdenada[index]);
        }        
    });
    it("Al agregar claves desordenadas se obtiene la lista ordenada",async ()=>
    {
        let Lista = new lista();  
        Lista.add("dos","2");
        Lista.add("cuatro","4"); 
        Lista.add("uno","1");         
        Lista.add("tres","3"); 
        let listaOrdenada= ["cuatro","dos","tres","uno"] 
        let resultado= Lista.getLista();
        for (let index = 0; index < listaOrdenada.length; index++) 
        {
            assert.equal(resultado[index], listaOrdenada[index]);            
        }        
    });
    it("Al agregar claves desordenadas se obtiene la lista ordenada(lista con mayor cantidad de elementos)",async ()=>
    {
        let Lista = new lista();  
        Lista.add("dos","2");        
        Lista.add("uno","1"); 
        Lista.add("cuatro","4");
        Lista.add("cinco","5"); 
        Lista.add("diez","10"); 
        Lista.add("once","11"); 
        Lista.add("tres","3"); 
        let listaOrdenada= ["cinco","cuatro","diez",
                            "dos","once","tres","uno"]                     
        let resultado= Lista.getLista();
        for (let index = 0; index < listaOrdenada.length; index++) 
        {
            assert.equal(resultado[index], listaOrdenada[index]);
        }
    });
})