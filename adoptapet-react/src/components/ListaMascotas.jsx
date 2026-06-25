import PropTypes from 'prop-types'
import MascotaCard from './MascotaCard'

function ListaMascotas({ mascotas = [] }) {
  if (mascotas.length === 0) {
    return <p style={{ color: '#64748b' }}>No hay mascotas para mostrar.</p>
  }

  return (
    <section
      style={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      }}
    >
      {mascotas.map((mascota) => (
        <MascotaCard
          key={mascota.id}
          nombre={mascota.nombre}
          raza={mascota.raza}
          edad={mascota.edad}
          especie={mascota.especie}
          descripcion={mascota.descripcion}
          caracteristicas={mascota.caracteristicas}
        />
      ))}
    </section>
  )
}

ListaMascotas.propTypes = {
  mascotas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      nombre: PropTypes.string,
      raza: PropTypes.string,
      edad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      especie: PropTypes.oneOf(['Perro', 'Gato', 'Otro']),
      descripcion: PropTypes.string,
      caracteristicas: PropTypes.arrayOf(PropTypes.string),
    })
  ),
}

export default ListaMascotas