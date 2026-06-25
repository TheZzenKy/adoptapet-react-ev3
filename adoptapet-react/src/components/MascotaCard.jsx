import PropTypes from 'prop-types'

const especieConfig = {
  Perro: {
    label: 'Perro',
    accent: '#2563eb',
    background: 'rgba(37, 99, 235, 0.12)',
  },
  Gato: {
    label: 'Gato',
    accent: '#db2777',
    background: 'rgba(219, 39, 119, 0.12)',
  },
  Otro: {
    label: 'Otro',
    accent: '#059669',
    background: 'rgba(5, 150, 105, 0.12)',
  },
}

function MascotaCard({
  nombre = 'Sin nombre',
  raza = 'Sin raza',
  edad = 'N/D',
  especie = 'Otro',
  descripcion = 'Sin descripción disponible.',
  caracteristicas = [],
}) {
  const especieVisual = especieConfig[especie] ?? especieConfig.Otro
  const listaCaracteristicas = Array.isArray(caracteristicas) ? caracteristicas : []

  return (
    <article
      style={{
        border: `1px solid ${especieVisual.accent}`,
        borderRadius: '18px',
        padding: '1.25rem',
        background: 'white',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
        display: 'grid',
        gap: '1rem',
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1rem',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: '0.85rem',
              fontWeight: 700,
              color: especieVisual.accent,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {especieVisual.label}
          </p>
          <h3 style={{ margin: '0.25rem 0 0', fontSize: '1.4rem' }}>{nombre}</h3>
        </div>

        <span
          style={{
            background: especieVisual.background,
            color: especieVisual.accent,
            borderRadius: '999px',
            padding: '0.45rem 0.8rem',
            fontWeight: 700,
            fontSize: '0.9rem',
            whiteSpace: 'nowrap',
          }}
        >
          {especie}
        </span>
      </header>

      <dl
        style={{
          margin: 0,
          display: 'grid',
          gap: '0.85rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
        }}
      >
        <div>
          <dt style={{ fontSize: '0.8rem', color: '#64748b' }}>Raza</dt>
          <dd style={{ margin: '0.2rem 0 0', fontWeight: 600 }}>{raza}</dd>
        </div>
        <div>
          <dt style={{ fontSize: '0.8rem', color: '#64748b' }}>Edad</dt>
          <dd style={{ margin: '0.2rem 0 0', fontWeight: 600 }}>{edad}</dd>
        </div>
      </dl>

      <p style={{ margin: 0, color: '#334155', lineHeight: 1.6 }}>{descripcion}</p>

      <div>
        <p style={{ margin: '0 0 0.6rem', fontWeight: 700, color: '#0f172a' }}>
          Características
        </p>
        {listaCaracteristicas.length > 0 ? (
          <ul
            style={{
              margin: 0,
              padding: 0,
              listStyle: 'none',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
            }}
          >
            {listaCaracteristicas.map((caracteristica) => (
              <li
                key={caracteristica}
                style={{
                  background: '#f1f5f9',
                  color: '#1e293b',
                  borderRadius: '999px',
                  padding: '0.4rem 0.75rem',
                  fontSize: '0.9rem',
                }}
              >
                {caracteristica}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ margin: 0, color: '#64748b' }}>Sin características registradas.</p>
        )}
      </div>
    </article>
  )
}

MascotaCard.propTypes = {
  nombre: PropTypes.string,
  raza: PropTypes.string,
  edad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']),
  descripcion: PropTypes.string,
  caracteristicas: PropTypes.arrayOf(PropTypes.string),
}

export default MascotaCard