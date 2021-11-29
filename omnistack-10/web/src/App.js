import React, { useEffect, useState } from 'react'
import './global.css'
import './app.css'
import './sidebar.css'
import './main.css'

import api from './services/api'

import DevItem from './components/DevItem'

import DevForm from './components/DevForm'

// componente: bloco isolado de html, css e js o qual nao interfere no restante da aplicacao
// propriedades: informacoes que um componente pai passa para um componente filho
// estado: informacoes mantidas pelo componente(lembrar: imutabilidade)

function App() {

  const [devs, setDevs] = useState([])

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs')

      setDevs(response.data)
    }

    loadDevs()
  }, [])

  async function handleAddDev(data) {
    const response = await api.post('/devs', data)

    setDevs([...devs, response.data])
  }

  return (
    <div id="app">
      <aside>
        <DevForm 
          onSubmit={handleAddDev}
        />
      </aside>

      <main>
        <ul>
          {devs.map((dev, i) => (
            <DevItem key={i} dev={dev}/>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App
