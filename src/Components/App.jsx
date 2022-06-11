import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../API/Api'
import { Card, Img, Pcard, SectionCard, DivCard, Div, ImgCard } from '../Styles/Style'
import Head from './Head'
import Load from './Load'


const App = () => {

  const api = React.useContext(Api)

  const [pokemons, setPokemons] = React.useState([])
  const [limit, setLimit] = React.useState(12)

  React.useEffect(() => {
    const get = async () => {
      try {
        api.setLoad(true)
        const response = await axios.get(`${api.get}?limit=${limit}`)
        setPokemons(response.data.results)
        api.setLoad(false)
        console.log(response)
      } catch (error) {
        console.log(error)
        api.setLoad(false)
      }
    }
    get()
  }, [])

  if (api.load) return <Load/>

  return (
    !api.load && <SectionCard>
   
      <Head title='Main' description='Tela principal da pokédex' />
      <Div display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="30px">
        {pokemons.map((pokemon, index) => {
          return (
            <Link to={`pokemon/${index + 1}`} key={index}>
              <Card>
                <Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`} />
                <DivCard>
                  <Div display="flex" placeItems="center">
                    <Div>
                      <ImgCard src="assets/svg/pokeball.svg" />
                    </Div>
                    <Div>
                      <Pcard>{`${pokemon.name}`}</Pcard>
                    </Div>
                  </Div>
                </DivCard>
              </Card>
            </Link>
          )
        })}
      </Div>
    </SectionCard>

  )
}

export default App