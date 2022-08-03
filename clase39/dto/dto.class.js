class productsDTO {
    constructor (dato, cotizaciones) {
        this.nombre = dato.nombre
        this.precio = dato.precio
        this.stock = dato.stock
        for (const [denominacion, valor] of Object.entries(cotizaciones)) {
            this[denominacion] = valor
        }
    }
}