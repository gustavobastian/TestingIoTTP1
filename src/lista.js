module.exports = class Lista{
    constructor(){  
        this.cuenta = 0;
        this.ArregloDeElementos=[];
    };

    count(){        
        return this.cuenta;
    }

    add(clave,valor){
        if(((clave==null) || (valor==null))){
            return false;
        }
        else if((typeof(clave)!='string')||(typeof(valor)!='string')){
            return false;
        }               
        this.cuenta++;
        let element=[clave,valor];
        this.ArregloDeElementos.push(element);
        return true;       
    }

    find(clave){
        let value=null;
        this.ArregloDeElementos.forEach(element => {            
            if(element[0]==clave){          
                value=element[1]
            }
        });
        return value;
    }
};