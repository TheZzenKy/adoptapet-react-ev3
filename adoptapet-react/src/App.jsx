import { useState } from 'react'
import { mascotas } from './data/mascotas'
import ListaMascotas from './components/ListaMascotas'
import FiltroEspecie from './components/FiltroEspecie'

const LIMITE_BUSQUEDA = 40

function normalizarBusqueda(texto) {
  return texto.trim().slice(0, LIMITE_BUSQUEDA).toLowerCase()
}


function App() {
  const [filtroEspecie, setFiltroEspecie] = useState('Todas')
  const [busqueda, setBusqueda] = useState('')

  const busquedaNormalizada = normalizarBusqueda(busqueda)

  const mascotasFiltradas = mascotas.filter((mascota) => {
    const coincideEspecie =
      filtroEspecie === 'Todas' || mascota.especie === filtroEspecie
    const coincideBusqueda =
      busquedaNormalizada === '' ||
      mascota.nombre.toLowerCase().includes(busquedaNormalizada)

    return coincideEspecie && coincideBusqueda
  })

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '1.5rem' }}>
        <p style={{ margin: 0, color: '#2563eb', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          AdoptaPet
        </p>
        <h1 style={{ margin: '0.35rem 0 0', fontSize: '2rem' }}>Mascotas disponibles</h1>
        <p style={{ margin: '0.5rem 0 0', color: '#475569' }}>
          Revisa el listado de mascotas y su información principal.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '1rem', marginBottom: '1.5rem' }}>
        <FiltroEspecie valor={filtroEspecie} onChange={setFiltroEspecie} />

        <label style={{ display: 'grid', gap: '0.45rem', fontWeight: 700, color: '#0f172a' }}>
          Buscar por nombre
          <input
            type="search"
            value={busqueda}
            onChange={(event) => setBusqueda(event.target.value.slice(0, LIMITE_BUSQUEDA))}
            placeholder="Escribe el nombre de una mascota"
            style={{
              border: '1px solid #cbd5e1',
              borderRadius: '12px',
              padding: '0.8rem 0.95rem',
              fontSize: '1rem',
            }}
          />
        </label>
      </div>

      {mascotasFiltradas.length === 0 ? (
        <p style={{ color: '#64748b', fontWeight: 600 }}>No hay mascotas que coincidan</p>
      ) : (
        <ListaMascotas mascotas={mascotasFiltradas} />
      )}
    </main>
  )
}

export default App
