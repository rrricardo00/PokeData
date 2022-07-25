import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { Api } from '../API/Api'
import { Card, Img, Pcard, SectionCard, DivCard, Div, ImgCard } from '../Styles/Style'
import Head from './Head'
import Load from './Load'
import LoadMore from './LoadMore/LoadMore'


const App = () => {

  const api = React.useContext(Api)

  const [limit, setLimit] = React.useState(12)
  const [pokemons, setPokemons] = React.useState([])

  React.useEffect(() => {
    let cancel
    const get = async () => {
      try {
        api.setLoad(true)
        console.log(api.load)
        const response = await axios({
          method: 'GET',
          url: `${api.get}?limit=${limit}`,
          cancelToken: new axios.CancelToken(c => cancel = c)
        })
        setPokemons(response.data.results)
        api.setLoad(false)
        console.log(response)
        console.log(api.load)
      } catch (error) {
        api.setLoad(false)
      }
    }
    get()
    return () => {
      get()
      cancel()
    }

  }, [limit])

  if (api.load) return <Load />

  return (
    !api.load &&
    <SectionCard>
      <Head title='Main' description='Tela principal da pokédex' />
      <Div display="grid" gridTemplateColumns="repeat(auto-fill, minmax(240px,1fr))" gap="30px" flexDirectionMobile="column">
        {pokemons.map((pokemon, index) => {
          return (
            <Link to={`pokemon/${pokemon.name}`} key={index}>
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
      <Div display="flex" margin="40px 0 20px 0" justifyContent="center">
        <LoadMore disabled={false} funct={setLimit} functionValue={limit}>Load More +</LoadMore>
      </Div>
    </SectionCard>
  )
}

export default App