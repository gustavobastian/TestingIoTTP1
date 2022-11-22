module.exports = class Lista
{
    constructor()
    {          
        this.Elementos=[];
    };

    count()
    {        
        return  this.Elementos.length;
    }

    add(clave,valor)
    {
        let auxiliar=false;
        let arregloAuxiliar=[];
        let elementoLocal={'clave':clave,'valor':valor};
        let lenElements=this.Elementos.length;
        if(((clave==null) || (valor==null))||(typeof(clave)!='string'))
        {
            return false;
        }       
        let busqueda= this.find(clave);        
        if (busqueda==null)
        {
            auxiliar=true;            
        }
        if (auxiliar==true)
        {
            this.Elementos.push(elementoLocal); 
            return true;     
           
        }
        else
        {
            return false;
        }
    }

    find(clave)
    {
        let value=null; 
        let indice=this.indexOf(clave);        
        if (indice!=null)
        {
            value=this.Elementos[indice].valor;
        }
        else 
        {
            value=null;
        }
        return value;
    }

    delete(clave)
    {                
        let resultado= this.indexOf(clave);                        
        if (resultado==null)
        {            
            return false;
        }
        else
        {            
            this.Elementos.splice(resultado,1)
            return true;
        }
    }

    indexOf(clave)
    {
        let value=null;        
        for (let i = 0; i < this.Elementos.length; i++) 
        {
            if (clave == this.Elementos[i].clave) 
            {
                return value = i;
            }
        };        
        return value;
    }

    update(clave,valor)
    {
        let result= this.find(clave);
        if (result!=null)
        {            
            let indice=this.indexOf(clave);
            this.Elementos[indice].valor=valor;
            return true;
        }
        else
        {            
            return false;
        }
    }

    getLista()
    {
        let output=[]
        this.Elementos.forEach(element => 
        {
            output.push(element.clave)
        });        
        output.sort();
        return   output;        
    }
};