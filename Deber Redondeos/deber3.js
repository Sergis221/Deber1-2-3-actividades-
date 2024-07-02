// Array de objetos de asignaturas
let asignaturasDesarrolloSoftware = [
    { nombre: "Introducción a la Programación", nivel: 1 },
    { nombre: "Estructuras de Datos", nivel: 2 },
    { nombre: "Programación Orientada a Objetos", nivel: 2 },
    { nombre: "Diseño de Algoritmos", nivel: 3 },
    { nombre: "Base de Datos", nivel: 3 },
    { nombre: "Desarrollo Web", nivel: 4 },
    { nombre: "Ingeniería de Software", nivel: 4 },
    { nombre: "Proyecto Final de Carrera", nivel: 5 }
];

// Función para filtrar asignaturas por nivel
function filtrarAsignaturasPorNivel(asignaturas, nivel) {
    let asignaturasFiltradas = asignaturas.filter(asignatura => asignatura.nivel === nivel);
    return asignaturasFiltradas;
}

// Ejemplo de uso
let nivelDeseado = 3;
let asignaturasNivel3 = filtrarAsignaturasPorNivel(asignaturasDesarrolloSoftware, nivelDeseado);
console.log(`Asignaturas de nivel ${nivelDeseado}:`);
asignaturasNivel3.forEach(asignatura => {
    console.log(asignatura.nombre);
});
alert(asignaturasDesarrolloSoftware);