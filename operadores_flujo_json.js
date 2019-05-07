/**
 * Created by david on 1/12/2018.
 */

var empleado = {
    nombre: 'Smith',
    profesion: 'Agente',
    edad: 42,
    armas: ['pistola', 'rifle', 'kungfu']
};

console.log(empleado);

var serializado = JSON.stringify(empleado) + '}';
console.log(serializado);

var leido;

try {
    leido = JSON.parse(serializado);
} catch (e) {
    console.log('no se pudo leer "serializado"')
}

if (typeof leido != 'undefined') {
    console.log('hay algo leido');
} else {
    console.log('no hay nada leido')
}

for (var i = 0; i < empleado.armas.length; i++) {
    var arma = empleado.armas[i];
    console.log(empleado.nombre + (arma == 'kungfu' ? ' sabe ' : ' tiene ') + arma);
}