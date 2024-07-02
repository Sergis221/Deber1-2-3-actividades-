function filtrarYRedondear(nums) {
    // Filtrar valores mayores a 10.00 y redondear a 2 decimales como string
    let resultado = nums.filter(num => num > 10.00)
                        .map(num => num.toFixed(2));

    return resultado;
}

// Ejemplo de uso
let nums = [13.676767, 3.123432, 5.34543543, 10.3452345];
let resultadoFiltrado = filtrarYRedondear(nums);
alert(resultadoFiltrado);  