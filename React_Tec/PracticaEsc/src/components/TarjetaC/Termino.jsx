import './Termino.css';
export default function Termino({ onClic }) {
  return (
    <div className="termino-overlay">
      <div className="solicitud-container">
        <h3 className="success-message">¡Solicitud Enviada con Éxito!</h3>

        <div className="requisitos-card">
          <h4 className="requisitos-titulo">📋 Requisitos y Términos:</h4>
          <ul className="requisitos-lista">
          
            <li className="requisito-item">INE/IFE vigente</li>
            <li className="requisito-item">Comprobante de domicilio</li>
            <li className="requisito-item">Buen historial crediticio</li>
            <li className="requisito-item">Ingreso mínimo $8,000 MXN</li>
            <li className="requisito-item">
              Revisión de historial crediticio en otros bancos (Buró de Crédito)
            </li>
            <li className="requisito-item">
              Autorización para consultar tu comportamiento de pago en otras
              instituciones
            </li>
          </ul>
        </div>

        <div className="botones-container">
          <button className="btn-aceptar"  onClick={onClic}>si</button>

          <button className="btn-rechazar" onClick={onClic}>no</button>
        </div>
      </div>
    </div>
  );
}
