let mascotas=[
    {
        raza: "Boxer Aleman"
        
    },
    {
        raza: "Bull Dog"
    }
]

let libros=[
    {
        nombre: "Operacion Rosario 1982",
        autor: "Carlos Büsser"
    },
    {
        nombre: "Operacion Masacre",
        autor: "Rodolfo Walsh"
    }
]

class Usuario{
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros= libros;
        this.mascotas= mascotas;
    }

    getFullName(){
        console.log(this.nombre, this.apellido)
    }

    addMascotas(){
        mascotas.push({
            raza: "Pastor Aleman"
        })
    }

    countMascotas(){
        console.log(mascotas.length)
    }

    addLibro(){
        libros.push({
            nombre: "El Arte De La Guerra",
            autor: "Sun Tzu"
        })
    }
    
    getNombreLibros(){
        libros.forEach((libros) =>{
            console.log(libros.nombre)
        });
    }
}

const usuario = new Usuario("Manuel", "Merino Urquiza", libros, mascotas)

console.log(usuario)


usuario.getFullName()
usuario.addMascotas() 
usuario.countMascotas()
usuario.addLibro()
usuario.getNombreLibros()

