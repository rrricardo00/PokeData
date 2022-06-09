import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { Api } from '../API/Api'
import { Img, Section } from '../Styles/Style'
import Head from './Head'

const Pokemon = () => {

  const api = React.useContext(Api)
  const index = useParams()

  const [pokemon, setPokemon] = React.useState([])

  React.useEffect(() =>{
    const get = async() =>{
      try {
        const response = await axios.get(`${api.get}/${index.id}`)
        console.log(response)
        setPokemon(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    get()
  },[api])

  return (
    <Section>
      <Head title='Pokémon' description='Tela principal do pokémon' />
      <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index.id}.svg`} />
    </Section>
  )
}

export default Pokemon