   
var repetir = true;
let opcion;
let resp;
while (repetir) {
    opcion = Number(prompt("Ingrese una opcion: \n1-Calcular numeros pares e impares \n2-Calcular numeros factoriales\n3-Validar conytraseña \n4-Visualizar tablas de multiplicar \n5-Juego adivina el numero \n6-Calcular numeros primos \n7-Calcular secuencia de fibonancci \n8-Convertidor de temperatura \n9-Calculadora de potencia \n10-Juego piedra,papel o tijeras \n11-Salir"));
    resp = prompt("Seguro que quiere ingresar a esta opcion? (si)(no)");
    if (resp == "si") {
        switch (opcion) {
            case 1:
                let numUno = Number(prompt("Saber la cantidad de numeros pares e impares que tiene el numero que ingreses a partir del numero 1\n Ingrese el numero: "));
                if (numUno >= 1) {
                    let cont = 0;
                    let contImpar = 0;
                    let Par = 0;
                    let Impar = 1;
                    while (Par <= numUno) {
                        Par++;
                        if (Par % 2 == 0) {
                            cont++;
                        }
                    }
                    console.log("Hay " + cont + " numeros pares en tu numero")

                    while (Impar <= numUno) {
                        Impar++;
                        if (Impar % 2 != 0) {
                            contImpar++;
                        }
                    }

                    console.log("Hay " + contImpar + " numeros impares en tu numero")

                } else
                    console.log("Ingrese un numero valido");
                break;
            case 2:
                let numFacto = Number(prompt(" Podras ingresar un numero y obtener su factorial : \nIngrese un número"));
                let numDosFac;
                for (let i = 1; i <= numFacto; i++) {
                    numDosFac = 1;
                    for (let j = 1; j <= i; j++) {
                        numDosFac = numDosFac * j;
                    }
                }
                console.log("El factorial del numero es : " + numDosFac);

                break;
            case 3:
                let contraseña = prompt("Valida si la contraseña que ingresas es la correcta o no\n Ingrese la contraseña: ");
                if (contraseña == "secreto123") {
                    console.log("Contraseña correcta, acceso concedido ");
                } else {
                    console.log("Contraseña incorrecta, acceso denegado");
                }
                break;
            case 4:
                alert("Aqui te pedire un numero y te mostrare las tablas de multiplicar del mismo")
                let numTablas = Number(prompt("Ingresa el numero: "));
                for (let i = 1; i <= 10; i++)
                    console.log(i + "x" + numTablas + "=" + (i * numTablas));
                break;
            case 5:
                let numAdi = Math.random() * 100;
                let entero = Math.floor(numAdi);
                let repetir = true;
                while (repetir) {
                    alert("Adivina el numero que se encuentra entre el 1 y 100")
                    let numDosAdi = Number(prompt(" Ingresa un numero: "))
                    if (numDosAdi < entero) {
                        console.log("El numero es mayor");
                    } else if (numDosAdi > entero) {
                        console.log("El numero es menor");
                    } else {
                        console.log("Ha adivinado el numero!El numero era: " + entero);
                        repetir = false;
                    }
                }
                break;
            case 6:
                alert("Encontrará si hay numeros primos dentro de su numero y sumara los primeros diez")
                let numPri = Number(prompt(" Ingrese un numero "));
                let suma = 0;
                let contador = 0;
                let candidato = 2;

                while (contador < numPri) {
                    let primo = true;
                    for (let index = 2; index <= Math.sqrt(candidato); index++) {
                        if (candidato % index == 0) {
                            primo = false;
                            break;
                        }
                    }
                    if (primo) {
                        suma += candidato;
                        contador++;
                    }
                    candidato++;
                }
                console.log("La suma de los primeros", numPri, "números primos es:", suma);
                break;
            case 7:
                alert("Te mostrara la secuencia fibonacci del numero que ingreses")
                let numFi = Number(prompt("Ingresa un numero: "))
                let a = 1;
                let b = 1;
                let i = 1;
                while (i <= numFi) {
                    console.log("Secuencia: " + a)
                    b = a + b;
                    a = b - a;
                    i++;

                }
                break;
            case 8:
                alert("Aqui convierte los grados Celsius a Fahrenheit y viceversa")
                let respGra = Number(prompt("Selecciona el numero de la opcion que deseas realizar: \n1-Convertir celsius a fahrenheit \n2-Convertir fahrenheit a celsius"));
                let grado = Number(prompt("Ingrese el numero que desea convertir: "));
                switch (respGra) {
                    case 1:
                        let fahrenheit = ((grado * 9) / 5) + 32;
                        console.log(grado + "°C convertido en Fahrenheit  es: " + fahrenheit + "°F");
                        break;
                    case 2:
                        let celsius = ((grado - 32) * 5) / 9;
                        console.log(grado + "°F convertido en Celsius es: " + celsius + "°C");
                        break;
                    default:
                        console.log("Ingrese un numero valido");
                }
                break;
            case 9:
                alert("Este es un programa que elevará el numero que eligas a la potencia que desees")
                let numPo = Number(prompt("Ingresa la base: "))
                let potencia = Number(prompt("Ingresa el eponente: "))
                let num2Po = numPo;
                for (let i = 1; i < potencia; i++) {
                    num2Po = num2Po * numPo;
                }
                console.log("El resultado de la potencia seria: " + num2Po);
                break;
            case 10:
                let opc = Number(prompt("Bienvenido al juego de piedra papel o tijeras elige el numero de la opcion: \n1-Piedra\n2-Papel\n3-Tijeras"));
                let random = Math.floor(Math.random() * 3) + 1;

                if (opc == random) {
                    console.log("Empate")
                } else if (opc == 1 && random == 2) {
                    console.log(" Perdiste ");
                } else if (opc == 2 && random == 3) {
                    console.log("Perdiste");
                } else if (opc == 3 && random == 1) {
                    console.log("Perdiste")
                }else if(opc!=1 && opc!=2 && opc!=3){
                    console.log("Ingrese un numero valido")
                } else {
                    console.log("Ganaste");
                }
                break;
            case 11:
                console.log("Usted ha salido")
                repetir = false;
                break;

            default:
                console.log("numero invalido")
                break; 
        }
    } else {
        opcion = Number(prompt("Ingrese la opcion que desea realizar: \n1-Calcular numeros pares e impares \n2-Calcular numeros factoriales\n3-Validar conytraseña \n4-Visualizar tablas de multiplicar \n5-Juego adivina el numero \n6-Calcular numeros primos \n7-Calcular secuencia de fibonancci \n8-Convertidor de temperatura \n9-Calculadora de potencia \n10-Juego piedra,papel o tijeras \n11-Salir"));
        resp = prompt("Seguro que desea ingresar a el ejercicio? (Si)(No)")
    }

}