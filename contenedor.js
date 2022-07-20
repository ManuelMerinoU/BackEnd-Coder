/*import { createRequire } from 'module';
const require = createRequire(import.meta.url);*/

const { error } = require("console");
const fs = require ("fs");

class Contenedor{
    constructor(ruta){
        this.ruta=ruta;
    }

    async save (obj){
        try{
            let datos = await fs.promises.readFile(this.ruta, "utf8")
            let datosparse = JSON.parse(datos)
            if(datosparse.length){
                await fs.promises.writeFile(this.ruta, JSON.stringify([...datosparse, {...obj, id: datosparse[datosparse.length - 1] .id+ 1}], null,2))
            }else{
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj, id:1}], null,2))
            }
            return datosparse.length + 1
                
            
        }catch(error){
            console.log(error)
        }
    }

    async getId (id){
        try{
            let datos = await fs.promises.readFile(this.ruta, "utf8")
            let datosparse = JSON.parse(datos)
            let producto = datosparse.find(producto => producto.id === id)
            if (producto) {
                return producto
                //console.log(producto)
            } else {
                console.log("no hay disponible")
            }
                
        }catch (error){
            console.log(error)
        }
    }

    async getAll (id){
        try{
            let datos = await fs.promises.readFile(this.ruta, "utf8")
            let datosparse = JSON.parse(datos)
            if(datos.length){
                console.log(datosparse);
            }else{
                console.log("No hay")
            }
            return datosparse
                
            
        }catch{
            //console.log(datos)
        }
    }


    async borrarId (id){
        try{
            let datos = await fs.promises.readFile(this.ruta, "utf8")
            let datosparse = JSON.parse(datos)
            let producto = datosparse.find(producto => producto.id === id)
            if (producto) {
                let datosparseFiltr = datosparse.filter(producto => producto.id !== id)
                await fs.promises.writeFile(this.ruta, JSON.stringify(datosparse, null, 2), "utf-8")
                //return producto
                console.log("ID Eliminado")
            } else {
                console.log("no hay disponible")
            }
                
        }catch (error){
            console.log(error)
        }
    }

    async borrarTodo (){ 
        await fs.promises.writeFile(this.ruta, JSON.stringify([], null, 2), "utf-8")
    }

}

module.exports = Contenedor;

