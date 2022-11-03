class NumerosMemDAO {

    constructor() {
        this.numeros = []
    }

    guardarNumero = async (numero) => { 
        try {
            this.numeros.push(parseInt(numero.numero))
        }
        catch(error) {
            console.log('error en guardarNumero', error);
        }
    }

    obtenerNumeros = async () => {
        try {
            return this.numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros', error);
            return []
        }
    }
}

export default NumerosMemDAO