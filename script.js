window.onload = function () {
    let salir = false;
    let nombre = "";
    let apellido = "";
    let canReloj = 0;
    let marcaReloj = 0;
    while (!salir) {
        while ((nombre.length <= 0) || apellido.length <= 0) {
            nombre = prompt("Ingrese su Nombre: ");
            apellido = prompt("Ingrese su Apellido");
        }
        alert("Bienvenido: " + nombre + " " + apellido + "\na Nuestra pagina de Relojes !");

        while (marcaReloj === 0) {
            marcaReloj = prompt("1= Casio\n2= Swatch\n3= Festina\n4= Rolex\n  Escoja una Marca de Reloj: ");
            if (isNaN(marcaReloj) || (marcaReloj < 1 || marcaReloj > 4)) {
                marcaReloj = 0
            } else {
                marcaReloj = parseInt(marcaReloj);
            }

        }

        for (let i = 1; i <= marcaReloj; i++) {
            alert("contando ..."+ i + "!!!" )
            
        }
        

        switch (marcaReloj) {
            case 1:
                alert("La marca elegida fue: CASIO\n El valor del reloj es:\n $ 27.000.-");
                break;

            case 2:
                alert("La marca elegida fue: SWATCH\n El valor del reloj es:\n $ 32.000.-");
                break;

            case 3:
                alert("La marca elegida fue: FESTINA\n El valor del reloj es:\n $ 82.000.-");
                break;
            case 4:
                alert("La marca elegida fue: ROLEX\n El valor del reloj es:\n $ 132.000.-")
                break;
        }



        let terminar = prompt("Desea Terminar (s/n): ");

        if (terminar.toUpperCase() === "S") {
            salir = true;
        } else {
            nombre = "";
            apellido = "";
            marcaReloj = 0;

        }

    }

};