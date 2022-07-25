import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Api } from '../API/Api'
import { ImgSingle, SectionCard, Div } from '../Styles/Style'
import Head from './Head'
import Load from './Load'
import NotFound from './NotFound'

const Pokemon = () => {

  const api = React.useContext(Api)
  const index = useParams()

  const [notLoad, setNotLoad] = React.useState(false)
  const [pokemon, setPokemon] = React.useState([])
  const [abilities, setAbilities] = React.useState([])
  const [moves, setMoves] = React.useState([])
  const [types, setTypes] = React.useState([])

  React.useEffect(() => {
    const get = async () => {
      try {
        api.setLoad(true)
        const response = await axios.get(`${api.get}/${index.id}`)
        console.log(response.data)
        
        setPokemon(response.data)
        setAbilities(response.data.abilities)
        setMoves(response.data.moves.slice(0,4))
        setTypes(response.data.types)
       
        api.setLoad(false)
      } catch (error) {
        console.log(error)
        api.setLoad(false)
        setNotLoad(true)
      }
    }
    get()
  }, [setPokemon])

  if (api.load) return <Load />
  if (notLoad) return <NotFound/>

  return (
    <SectionCard display='flex' gap="20px" flexDirection="column">
      <Head title={pokemon.name} description='Tela principal do pokémon' />
      <ImgSingle src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} />
      <Div display="flex" gap="10px"  >
      {types && 
      types.map((item) => <Div className={`${item.type.name}`}  key={item.slot}>{item.type.name}</Div>)
      }
      </Div>
      {abilities &&
      abilities.map((item, index) => <p key={index}>{item.ability.name}</p>)
      }
      
    </SectionCard>
  )
}

export default Pokemon