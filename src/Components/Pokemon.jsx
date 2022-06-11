import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Api } from '../API/Api'
import { Img, SectionCard } from '../Styles/Style'
import Head from './Head'
import Load from './Load'

const Pokemon = () => {

  const api = React.useContext(Api)
  const index = useParams()

  const [pokemon, setPokemon] = React.useState([])

  React.useEffect(() =>{
    const get = async() =>{
      try {
        api.setLoad(true)
        const response = await axios.get(`${api.get}/${index.id}`)
        console.log(response)
        setPokemon(response.data)
        api.setLoad(false)
      } catch (error) {
        console.log(error)
        api.setLoad(false)
      }
    }
    get()
  },[])

  if (api.load) return <Load/>

  return (
    
    !api.load && <SectionCard>
      <Head title='Pokémon' description='Tela principal do pokémon' />
      <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} />
    </SectionCard>
  )
}

export default Pokemon