import ApiNumeros from '../api/numeros.js'

class ControladorNumeros {
    
    constructor() {
        this.apiNumeros = new ApiNumeros()
    }

    postNumero = async (req,res) => {
        try {
            const numero = req.body
            await this.apiNumeros.guardarNumero(numero)
            res.redirect('/')
        }
        catch(error) {
            console.log('error postNumero', error)
        }
    }

    getNumeros = async (req,res) => {
        try {
            res.json(await this.apiNumeros.obtenerNumeros())
        }
        catch(error) {
            console.log('error getNumero', error)
        }
    }

    getPromedio = async (req,res) => {
        try {
            res.json(await this.apiNumeros.obtenerPromedio())
        }
        catch(error) {
            console.log('error getPromedio', error)
        }
    }
    
    getMinMax = async (req,res) => {
        try {
            res.json(await this.apiNumeros.obtenerMinMax())
        }
        catch(error) {
            console.log('error getMinMax', error)
        }
    }

    getCantidad = async (req,res) => {
        try {
            res.json(await this.apiNumeros.obtenerCantidad())
        }
        catch(error) {
            console.log('error getCantidad', error)
        }
    }
}

export default ControladorNumeros