function calcularPromedioEntero(calificaciones) {
    // Verificar si el array de calificaciones está vacío
    if (calificaciones.length === 0) {
        return 0;
    }

    // Calcular la suma de las calificaciones
    let sumaCalificaciones = calificaciones.reduce((total, calificacion) => total + calificacion, 0);

    // Calcular el promedio
    let promedio = sumaCalificaciones / calificaciones.length;

    // Obtener la parte entera del promedio
    let parteEnteraPromedio = Math.floor(promedio);

    return parteEnteraPromedio;
}

// Ejemplo de uso
let calificaciones = [85, 90, 92, 78, 88];
let promedioEntero = calcularPromedioEntero(calificaciones);
alert(`El promedio entero de las calificaciones es: ${promedioEntero}`);  // Salida esperada: El promedio entero de las calificaciones es: 86
