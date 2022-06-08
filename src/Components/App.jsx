import axios from 'axios'
import React from 'react'
import { Api } from '../API/Api'

const App = () => {

  const api = React.useContext(Api)

  const [pokemons, setPokemons] = React.useState([])
  const [limit, setLimit] = React.useState(10)

  React.useEffect(() => {
    const get = async () => {
      try {
        const response = await axios.get(`${api.get}?limit=${limit}`)
        setPokemons(response.data.results)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
    get()
  }, [api])

  return (
    <section>
      {pokemons.map((pokemon, index) => {
        return (
          <div key={index}>
            {pokemon.name}
          </div>
        )
      })}
    </section>
  )
}

export default App