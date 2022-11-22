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
            //caso especial, no hay elementos
            if (this.Elementos.length==0)
            {
                this.Elementos.push(elementoLocal); 
                return true;     
            }
            //caso especial, el nuevo valor es mayor que el mayor de la lista
            else if ((this.Elementos[lenElements-1].clave)<(elementoLocal.clave))
            {               
                this.Elementos.push(elementoLocal); 
                return true;     
            }
            else
            {                
                let index=0;                                
                while ((this.Elementos[index].clave)<(elementoLocal.clave))
                {                   
                    arregloAuxiliar.push(this.Elementos[index]);
                    index++;
                    if (index==this.Elementos.length-1)
                    {
                        break;
                    }
                }
                arregloAuxiliar.push(elementoLocal);
                while (index<this.Elementos.length)
                {
                    arregloAuxiliar.push(this.Elementos[index]);                
                    index++;
                }                
                this.Elementos=arregloAuxiliar;
                return true;
            }
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
            output.push({'clave':element.clave})
        });        
        return   output;        
    }
};