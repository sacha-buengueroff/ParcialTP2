import NumerosMongoDAO from './numerosMongoDB.js'
import NumerosMemDAO from './numerosMem.js'
import NumerosFileSystem from './numerosFileSystem.js';

class NumerosFactoryDAO {
    static get(tipo) {
        console.log(tipo);
        switch(tipo) {
            case 'MEM' : 
                console.log("**** Persistiendo en Memoria ****");
                return new NumerosMemDAO()
            case 'MONGO' :
                console.log("**** Persistiendo en MongoDB ****");
                return new NumerosMongoDAO()
            case 'FS' :
                console.log("**** Persistiendo en FileSystem ****");
                return new NumerosFileSystem()
            default :
            console.log("**** Persistiendo en Default (Memoria) ****");
                return new NumerosMemDAO()
        }
    }
}

export default NumerosFactoryDAO