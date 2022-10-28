module.exports = class Lista{
    constructor(){  
        this.cuenta = 0;
    };

    count(){
        return this.cuenta;
    }

    add(elemento){
        this.cuenta++;
        return true;
    }
};