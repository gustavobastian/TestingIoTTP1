module.exports = class Lista{
    
    constructor(){          
        this.Elementos=[];
    };

    count(){        
        return  this.Elementos.length;
    }

    async add(clave,valor){
        let auxiliar=false;
        let arregloAuxiliar=[]
        let elementoLocal={'clave':clave,'valor':valor};
        if(((clave==null) || (valor==null))||(typeof(clave)!='string')){
            return false;
        }       
        let busqueda= await this.find(clave);        
        if(busqueda==null){
            auxiliar=true;            
        }
        
        if(auxiliar==true){
            //caso especial, no hay elementos
            if(this.Elementos.length==0){
                this.Elementos.push(elementoLocal); 
                return true;     
            }
            //caso especial, el nuevo valor es mayor que el mayor de la lista
            else if (((this.Elementos[this.Elementos.length-1].clave.toString())<(elementoLocal.clave.toString()))){               
                this.Elementos.push(elementoLocal); 
                return true;     
            }
            
            else{
                
                let index=0;                
                
                while (((this.Elementos[index].clave.toString())<(elementoLocal.clave.toString()))&&
                        (index<this.Elementos.length-1)){                   
                   
                    arregloAuxiliar.push(this.Elementos[index])
                    index++;
                }
                
                arregloAuxiliar.push(elementoLocal)
                
                while (index<this.Elementos.length){
                    arregloAuxiliar.push(this.Elementos[index]);                
                    index++;
                }
                
                this.Elementos=arregloAuxiliar;
                
                return true;
            }

            
           
        }
        else{
            return false;
        }
    }

    async find(clave){
        let value=null;        
        if(this.Elementos.length>0){
            await this.Elementos.forEach(element => {            
                if(element.clave==clave){          
                    value=element.valor;
                }
            });
        }
        
        return value;
    }

    async delete(clave){                
        let resultado= await this.find(clave);        
        if(resultado==null){            
            return false;
        }
        else{
            let indice=await this.indexOf(clave);                        
            this.Elementos.splice(indice,1)
            return true;
        }

    }

    indexOf(clave){
        let value=null;        
            for (let i = 0; i < this.Elementos.length; i++) {
                if (clave == this.Elementos[i].clave) {
                    return value = i;
                }
            };        

    }
    async update(clave,valor){
        
        let result= await this.find(clave);
        if(result!=null){            
            let indice=this.indexOf(clave);
            this.Elementos[indice].valor=valor;
            return true;
        }
        else{            
            return false;
        }
    }

    async getLista(){
        let output=[]
        this.Elementos.forEach(element => {
            output.push({'clave':element.clave})
        });        
        return   output;
        
    }

    
};