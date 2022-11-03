import fs from 'fs'

class NumerosFileSystem {

    guardarNumero = async (numero) => {
        try {
            let numeros = JSON.parse(await fs.promises.readFile('./numeros.dat'))
            numeros.push(parseInt(numero.numero))
            await fs.promises.writeFile('./numeros.dat', JSON.stringify(numeros))
        }
        catch(error) {
            console.log('error en guardarNumero', error);
        }
    }

    obtenerNumeros = async () => {
        try {
            let numeros = JSON.parse(await fs.promises.readFile('./numeros.dat'))
            return numeros
        }
        catch(error) {
            console.log('error en obtenerNumeros', error);
            return []
        }
    }
}


export default NumerosFileSystem
