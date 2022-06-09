import axios from 'axios'
import React from 'react'
import { Api } from '../API/Api'
import {Div, Section} from '../Styles/Style'
import Head from './Head'

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
    <Section>
      <Head title='Main' description='Tela principal da pokédex' />
      {pokemons.map((pokemon, index) => {
        return (
          <Div key={index}>
            {pokemon.name}
          </Div>
        )
      })}
    </Section>
  )
}

export default App