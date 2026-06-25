import { mascotas } from './data/mascotas'
import ListaMascotas from './components/ListaMascotas'


function App() {
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

      <ListaMascotas mascotas={mascotas} />
    </main>
  )
}

export default App
