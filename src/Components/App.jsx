import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../API/Api'
import { Card, Img, P, Section } from '../Styles/Style'
import Head from './Head'

const App = () => {

  const api = React.useContext(Api)

  const [pokemons, setPokemons] = React.useState([])
  const [limit, setLimit] = React.useState(12)

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
    <Section display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="30px">
      <Head title='Main' description='Tela principal da pokédex' />
      {pokemons.map((pokemon, index) => {
        return (
          <Link to={`pokemon/${index+1}`} key={index}>
            <Card>
              <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`} />
              <P>{pokemon.name}</P>
            </Card>
          </Link>
        )
      })}
    </Section>
  )
}

export default App