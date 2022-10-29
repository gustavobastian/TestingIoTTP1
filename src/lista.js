module.exports = class Lista{
    
    constructor(){          
        this.ArregloDeElementos=[];
    };

    count(){        
        return  this.ArregloDeElementos.length;
    }

    async add(clave,valor){
        let auxiliar=false;
        let arregloAuxiliar=[]
        let elementoLocal={'clave':clave,'valor':valor};
        if(((clave==null) || (valor==null))||(typeof(clave)!='string')||(typeof(valor)!='string')){
            return false;
        }       
        let busqueda= await this.find(clave);        
        if(busqueda==null){
            auxiliar=true;            
        }
        
        if(auxiliar==true){
            //caso especial, no hay elementos
            if(this.ArregloDeElementos.length==0){
                this.ArregloDeElementos.push(elementoLocal); 
                return true;     
            }
            //caso especial, en nuevo valor es mayor que el mayor de la lista
            else if ((parseInt(this.ArregloDeElementos[this.ArregloDeElementos.length-1].valor.toString())<parseInt(elementoLocal.valor.toString()))){               
                this.ArregloDeElementos.push(elementoLocal); 
                return true;     
            }
            
            else{
                
                let index=0;                
                
                while ((parseInt(this.ArregloDeElementos[index].valor.toString())<parseInt(elementoLocal.valor.toString()))&&(index<this.ArregloDeElementos.length-1)){                   
                    arregloAuxiliar.push(this.ArregloDeElementos[index])
                  //  console.log(arregloAuxiliar)
                    index++;
                }
                
                arregloAuxiliar.push(elementoLocal)
                
                while (index<this.ArregloDeElementos.length){
                    arregloAuxiliar.push(this.ArregloDeElementos[index]);                
                    index++;
                }
                

                this.ArregloDeElementos=arregloAuxiliar;
                
                return true;
            }

            
           
        }
        else{
            return false;
        }
    }

    async find(clave){
        let value=null;        
        if(this.ArregloDeElementos.length>0){
            await this.ArregloDeElementos.forEach(element => {            
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

    async getLista(){

        
        return   this.ArregloDeElementos;
        
    }

    
};