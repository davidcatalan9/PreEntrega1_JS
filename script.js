window.onload = function() {
    let salir = false
    let nombre = ""
    let apellido = ""
    let canReloj = 0
    let marcaReloj = ""
    while ( !salir ) {
        while ( (nombre.length  <= 0) || apellido.length <= 0 ) {
            nombre = prompt("Ingrese su Nombre: ");
            apellido = prompt("Ingrese su Apellido")
        }
        alert( "Bienvenido: "+ nombre +" " + apellido + "\na Nuestra pagina de Relojes !")


        

         
        let terminar = prompt("Desea Terminar (s/n): ")
        
        if (terminar.toUpperCase() === "S") {
             salir = true;
        }
        
    }
    
};