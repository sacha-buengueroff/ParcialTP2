import CnxMongoDB from '../DB.js'


class NumerosMongoDAO {
    
    guardarNumero = async (numero) => {
        if(!CnxMongoDB.connection) return
        try {
            numero.numero = parseInt(numero.numero)
            await CnxMongoDB.db.collection("numeros").insertOne(numero)
        }
        catch(error) {
            console.log('error en guardarNumero', error);
        }
    }

    obtenerNumeros = async () => {
        if(!CnxMongoDB.connection) return []
        try {
            let numeros = await CnxMongoDB.db.collection('numeros').find({}).toArray()
            numeros = numeros.map(num => num.numero)
            return numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros', error);
            return []
        }
    }
}


export default NumerosMongoDAO