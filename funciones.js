/**
 * Created by david on 1/12/2018.
 */
function funcionBasica(){
    console.log('funcion basica se ejecuto')
}

funcionBasica();

function suma(a, b){
    return a+ b;
}

console.log(suma(10, 15));

var multiplica= function(a,b){
    return a * b;
}

console.log(multiplica(12, 6));

 var lang= 'es';

 function accesoContexto(){
     console.log(' en el contexto superior: '+lang);
 }

 accesoContexto()

var agente= {
     nombre: 'Smith',

    saluda: function () {
         console.log('Hola, soy el agente '+this.nombre);

    }
}

agente.saluda()


function Fruta( nombre){
     this.getNombre= function () {
         return nombre;
     };
     this.setNombre= function (value) {
         nombre= value;
     }
}

var limon= new Fruta('Citrus limon')
console.log(limon);

console.log(limon.getNombre())

limon.setNombre('Manzana')

console.log(limon.getNombre())