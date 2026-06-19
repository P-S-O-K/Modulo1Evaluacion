git
function realizarVenta(producto, cantidad) {
    // Lógica para procesar la venta
    console.log(`Vendiendo ${cantidad} unidades de ${producto}`);
    // Aquí podrías agregar código para actualizar el inventario, generar una factura, etc.
}

function mostrarProductosDisponibles() {
    // Lógica para mostrar los productos disponibles
    console.log("Mostrando productos disponibles...");
    // Aquí podrías agregar código para recuperar y mostrar los productos desde una base de datos o una lista
}

function generarReporteDeVentas() {
    // Lógica para generar un reporte de ventas
    console.log("Generando reporte de ventas...");
    // Aquí podrías agregar código para recopilar datos de ventas y generar un informe
}

// Exportar las funciones para que puedan ser utilizadas en otros módulos
module.exports = {
    realizarVenta,
    mostrarProductosDisponibles,
    generarReporteDeVentas
};