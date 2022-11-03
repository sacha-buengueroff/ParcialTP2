import express from 'express'
import ControladorNumeros from '../controller/numeros.js'


export class RouterNumeros {
    
    constructor() {
        this.router = express.Router()
        this.controladorNumeros = new ControladorNumeros()
    }

    start() {
        /* POST Numeros */
        this.router.post('/entrada', this.controladorNumeros.postNumero)
        /* GET Numeros */
        this.router.get('/entrada', this.controladorNumeros.getNumeros)
        /* GET Promedio */
        this.router.get('/promedio', this.controladorNumeros.getPromedio)
        /* GET Minimo y Maximo */
        this.router.get('/minmax', this.controladorNumeros.getMinMax)
        /* GET Cantidad */
        this.router.get('/cantidad', this.controladorNumeros.getCantidad)
    
        return this.router
    }
}