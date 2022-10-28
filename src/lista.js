module.exports = class Lista{
    constructor(){  
        this.cuenta = 0;
    };

    count(){
        return this.cuenta;
    }

    add(elemento){
        if(((elemento[0]==null) || (elemento[1]==null))){
            return false;
        }
        else if((typeof(elemento[0])!='string')||(typeof(elemento[1])!='string')){
            return false;
        }               
        this.cuenta++;
        return true;
       
    }
};