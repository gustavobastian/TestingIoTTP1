const assert = require("chai").assert;
const lista = require("../src/lista");

describe("en una lista vacia", ()=>
{
    var Lista = new lista();
    it("comprobar que hay cero elementos almacenados", ()=>
    {
        assert.equal(Lista.count(),0)
    });
    it("No se puede borrar", async ()=>
    {
        var resultado=await Lista.delete("uno");    
        assert.equal(resultado,false)
    });
})

describe("Existiendo una lista",  ()=>
{    
    var Lista = new lista();
    it("Estando la lista vacía, al agregar un elemento, compruebo que hay un elemento almacenados", async ()=>
    {        
        let resultado=await Lista.add("clave","valor");
        assert.equal(resultado,true)
        assert.equal(Lista.count(),1)
    })
    it("Al tener claves almacenadas, se puede recuperar el valor a partir de una clave", async ()=>
    {        
        await Lista.add("clave","valor");
        let resultado=await Lista.find("clave");
        assert.equal(resultado,"valor");
    })
    it("Si posee elementos, se presenta error si no existe la clave",async ()=>
    {                
        var resultado=await Lista.find(("clave2"),"valor");
        assert.equal(resultado,null)
    })
})

describe("Agregando mas de un elemento a una lista vacia",  ()=>
{
    var Lista = new lista();
    it("agrego 2 elementos", async ()=>
    {        
        var element1=await Lista.add("uno","1");
        var element2=await Lista.add("dos","2");
        assert.equal(element1,true)
        assert.equal(element2,true)
        assert.equal(Lista.count(),2)
    });   
    it("se puede recuperar el valor a partir de una clave", async()=>
    {  
        var resultado1=await Lista.find("uno");
        var resultado2=await Lista.find("dos");
        assert.equal(resultado1,"1");
        assert.equal(resultado2,"2");
    });           
})

describe("agrego elementos con clave duplicada", ()=>
{ 
    var Lista = new lista();
    it("la funcion devuelve error", async()=>
    {
        await Lista.add("uno","1");
        await Lista.add("dos","2");            
        var resultado=await Lista.add("uno","2");
        assert.isFalse(resultado);
    });
    it("y no cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),2)
    });        
    it("la funcion devuelve error en el caso 2", async()=>
    {
        var resultado2=await Lista.add("dos","2");
        assert.isFalse(resultado2);
    });
    it("y no cambia la cantidad de elementos almacenados en el caso 2",()=>
    {
        assert.equal(Lista.count(),2)
    });        
})  

describe("En una lista vacia",  ()=>
{
    var Lista = new lista();
    it("la funcion devuelve error al agregar (1,1) cuya clave no  es cadena", async()=>
    {
        var resultado = await Lista.add(1,1);
        assert.isFalse(resultado);
    });
    it("y no cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),0)
    });        
    it("la funcion devuelve error al agregar (null,'uno') cuya clave es nula ", async()=>
    {
        var resultado = await Lista.add(null,"uno");
        assert.isFalse(resultado);
    });
    it("y no cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),0)
    });        
    it("la funcion devuelve error al agregar ('uno',null) cuya valor es nulo ", async()=>
    {
        var resultado = await Lista.add("uno",null);
        assert.isFalse(resultado);
    });
    it("y no cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),0)
    });        
    it("la funcion permite al agregar ('uno',1) cuya valor no es cadena", async()=>
    {
        var resultado = await Lista.add("uno",1);
        assert.isTrue(resultado);
    });
    it("y cambia la cantidad de elementos almacenados",()=>
    {
        assert.equal(Lista.count(),1)
    });        
})  

describe("En una lista con elementos", ()=>
{
    var Lista = new lista();
    it("No se puede borrar una clave que no existe", async ()=>
    {        
        await Lista.add("uno","1");
        await Lista.add("dos","2");
        let resultado1=await Lista.delete("seis");
        assert.equal(resultado1,false)
    });
    it("y no cambia la cantidad de elementos almacenados", async ()=>
    {                  
        let resultado5 = await Lista.count();
        assert.equal(resultado5, 2);
    }); 
    it("Se puede borrar una clave que existe", async ()=>
    {
        var resultado2= await Lista.delete("uno");
        assert.equal(resultado2,true)
    });
    it("y cambia la cantidad de elementos almacenados", async ()=>
    {
        let resultado6= await Lista.count();
        assert.equal(resultado6,1);
    }); 
    it("y no se puede recuperar el elemento eliminado", async ()=>
    {
        let resultado3=await Lista.find("uno");
        assert.equal(resultado3,null);
    }); 
})

describe("En una lista con elementos", ()=>
{   
    var Lista = new lista();        
    it("No se puede actualizar un valor de una clave que no existe",async ()=>
    {
        await Lista.add("uno","1");
        await Lista.add("dos","2"); 
        var resultado11= await Lista.update("tres","6");
        assert.equal(resultado11, false);
    });
    var resultado13;
    it("Se puede actualizar un valor de una clave que existe",async ()=>
    {            
        var resultado12= await Lista.update("uno","6");
        resultado13= await Lista.find("uno");
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
        var Lista = new lista();   
        await Lista.add("uno","1"); 
        await Lista.add("cuatro","4");  
        await Lista.add("dos","2");                  
        await Lista.add("seis","6");           
        let listaOrdenada= [{'clave':"cuatro"},{'clave':"dos"},{'clave':"seis"},{'clave':"uno"}]          
        var resultado= await Lista.getLista();  
        for (let index = 0; index < listaOrdenada.length; index++) 
        {
            assert.equal(resultado[index].clave, listaOrdenada[index].clave);         
        }          
    }); 
    it("Al agregar 1 una clave menor se obtiene la lista ordenada",async ()=>
    {
        var Lista = new lista();  
        await Lista.add("uno","1");
        await Lista.add("dos","2"); 
        await Lista.add("cuatro","4"); 
        await Lista.add("alba","123"); 
        let listaOrdenada= [{'clave':'alba'},{'clave':"cuatro"},{'clave':"dos"},{'clave':"uno"}] 
        var resultado= await Lista.getLista();
        for (let index = 0; index < listaOrdenada.length; index++) 
        {
            assert.equal(resultado[index].clave, listaOrdenada[index].clave);
        }        
    });
    it("Al agregar claves desordenadas se obtiene la lista ordenada",async ()=>
    {
        var Lista = new lista();  
        await Lista.add("dos","2");
        await Lista.add("cuatro","4"); 
        await Lista.add("uno","1");         
        await Lista.add("tres","3"); 
        let listaOrdenada= [{'clave':"cuatro"},{'clave':"dos"},{'clave':'tres'},{'clave':"uno"}] 
        var resultado= await Lista.getLista();
        for (let index = 0; index < listaOrdenada.length; index++) 
        {
            assert.equal(resultado[index].clave, listaOrdenada[index].clave);            
        }        
    });
    it("Al agregar claves desordenadas se obtiene la lista ordenada(lista con mayor cantidad de elementos)",async ()=>
    {
        var Lista = new lista();  
        await Lista.add("dos","2");        
        await Lista.add("uno","1"); 
        await Lista.add("cuatro","4");
        await Lista.add("cinco","5"); 
        await Lista.add("diez","10"); 
        await Lista.add("once","11"); 
        await Lista.add("tres","3"); 
        let listaOrdenada= [{'clave':"cinco"},{'clave':"cuatro"},{'clave':"diez"},
                            {'clave':"dos"},{'clave':"once"},
                            {'clave':'tres'},{'clave':'uno'}]                     
        resultado= await Lista.getLista();
        for (let index = 0; index < listaOrdenada.length; index++) 
        {
            assert.equal(resultado[index].clave, listaOrdenada[index].clave);
        }
    });
})