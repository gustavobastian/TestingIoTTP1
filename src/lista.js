module.exports = class Lista{
    
    constructor(){          
        this.ArregloDeElementos=[];
    };

    count(){        
        return  this.ArregloDeElementos.length;
    }

    async add(clave,valor){
        if(((clave==null) || (valor==null))||(typeof(clave)!='string')||(typeof(valor)!='string')){
            return false;
        }       
        let busqueda= await this.find(clave);        
        if(busqueda==null){
            let element={'clave':clave,'valor':valor};
            this.ArregloDeElementos.push(element);        
            return true;
        }
        else{
            return false;
        }
    }

    async find(clave){
        let value=null;        
        await this.ArregloDeElementos.forEach(element => {            
            if(element.clave==clave){          
                value=element.valor;
            }
        });
        return value;
    }

    async delete(clave){                
        let resultado= await this.find(clave);        
        if(resultado==null){            
            return false;
        }
        else{
            let indice=await this.indexOf(clave);                        
            this.ArregloDeElementos.splice(indice,1)
            return true;
        }

    }

    indexOf(clave){
        let value=null;        
            for (let i = 0; i < this.ArregloDeElementos.length; i++) {
                if (clave == this.ArregloDeElementos[i].clave) {
                    return value = i;
                }
            };        

    }
    async update(clave,valor){
        
        let result= await this.find(clave);
        if(result!=null){            
            let indice=this.indexOf(clave);
            this.ArregloDeElementos[indice].valor=valor;
            return true;
        }
        else{            
            return false;
        }
    }
};