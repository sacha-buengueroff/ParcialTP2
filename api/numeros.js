import NumerosFactoryDAO from '../model/DAO/numerosFactory.js'
import config from '../config.js'

class ApiNumeros {

    constructor() {
        this.numerosDAO = NumerosFactoryDAO.get(config.PERSISTENCIA)
    }

    guardarNumero = async (numero) => { 
        return await this.numerosDAO.guardarNumero(numero)
    }

    obtenerNumeros = async () => {
        const numeros = await this.numerosDAO.obtenerNumeros()
        return {numeros}
    }

    obtenerPromedio = async () => {
        const numeros = await this.numerosDAO.obtenerNumeros()
        let resultado = {}
        if (numeros.length != 0) {
            const suma = numeros.reduce((prev, curr) => prev + curr, 0)
            const promedio = (suma / numeros.length)
            resultado = {promedio}
        }
        return resultado
    }

    obtenerMinMax = async () => {
        const numeros = await this.numerosDAO.obtenerNumeros()
        let resultado = {}
        if (numeros.length != 0) {
            const min = Math.min(...numeros)
            const max = Math.max(...numeros)
            resultado = {min, max}
        }
        return resultado
    }

    obtenerCantidad = async () => {
        const numeros = await this.numerosDAO.obtenerNumeros()
        const cantidad = numeros.length
        return {cantidad}
    }
}

export default ApiNumeros
