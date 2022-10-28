module.exports = class Lista{
    constructor(){  
        this.cuenta = 0;
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
        return true;       
    }

    find(clave){
        return "valor";
    }
};