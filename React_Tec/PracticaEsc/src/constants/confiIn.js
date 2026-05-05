export const confiIn = {
  nombre: {
    label: "Nombre",
    placeholder: "Ej. Juan",
    type: "text",
    pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$", 
    requerido: true,
  },
  // AGREGA ESTA SECCIÓN:
  apellido: {
    label: "Apellido",
    placeholder: "Ej. Pérez",
    type: "text",
    pattern: "^[a-zA-ZáéíóúÁÉÍÓÚñÑ\\s]+$", 
    requerido: true,
  },
  email: {
    label: "Correo Electrónico",
    placeholder: "ejemplo@correo.com",
    type: "email",
    pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
    requerido: true,
  },
  telefono: {
    label: "Teléfono",
    placeholder: "10 dígitos",
    maxLength: 10,
    type: "tel",
    pattern: "[0-9]{10}",
    requerido: true,
  },
  rfc: {
    label: "RFC",
    placeholder: "ABCD123456XYZ",
    maxLength: 13,
    pattern: "^[A-ZÑ&]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[A-Z0-9]{3}$",
    requerido: true,
  },
  curp: {
    label: "CURP",
    placeholder: "ABCD123456HDFRRR01",
    maxLength: 18,
    pattern: "[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[A-Z0-9]{2}",
    requerido: true,
  }
};