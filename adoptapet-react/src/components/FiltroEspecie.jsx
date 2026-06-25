import PropTypes from 'prop-types'

const opciones = ['Todas', 'Perro', 'Gato', 'Otro']

function FiltroEspecie({ valor, onChange }) {
  return (
    <fieldset
      style={{
        border: '1px solid #cbd5e1',
        borderRadius: '14px',
        padding: '1rem',
        margin: 0,
        display: 'grid',
        gap: '0.75rem',
      }}
    >
      <legend style={{ padding: '0 0.4rem', fontWeight: 700, color: '#0f172a' }}>
        Filtrar por especie
      </legend>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {opciones.map((opcion) => {
          const isActive = valor === opcion

          return (
            <button
              key={opcion}
              type="button"
              onClick={() => onChange(opcion)}
              aria-pressed={isActive}
              style={{
                border: '1px solid ' + (isActive ? '#2563eb' : '#cbd5e1'),
                background: isActive ? '#2563eb' : 'white',
                color: isActive ? 'white' : '#334155',
                borderRadius: '999px',
                padding: '0.55rem 0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              {opcion}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

FiltroEspecie.propTypes = {
  valor: PropTypes.oneOf(opciones).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FiltroEspecie