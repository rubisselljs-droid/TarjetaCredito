export const ValidarDatos ={
    telefono: (validar)=> /^\d{10}$/.test(validar),
    validar = val.replace(/\D/g, ""),
    correoElectronico: (validar) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validar),

    texto: (validar)=> validar.trim() !=''

}