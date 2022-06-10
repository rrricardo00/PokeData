import styled from "styled-components";

export const MainContainer = styled.section`
  width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 900px) {
    width: 100%;
  }
`

export const Button = styled.a`
  background: transparent;
  border-radius: 3px;
  border: 2px solid tomato;
  color: tomato;
  margin: 0 1em;
  padding: 0.25em 1em;
  text-decoration: none;
  cursor: pointer;
  &:hover{
      opacity: 30%;
      transition: all .2s ease-in-out;
  }
`
export const Img = styled.img`
  display: block;
  width: 260px;
  height: 260px;
`

export const ImgCard = styled.img`
  display: block;
  width: 20px;
  margin-right: 2px;
 
`

export const Section = styled.section`
display: ${({ display }) => display};
grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
gap: ${({ gap }) => gap};
position: relative;
@media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const DivCard = styled.div`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  background: tomato;
  padding: 2px 3px;
  border-radius: 2px;
  color: #fff;
  width: 25px;
  box-sizing: border-box;
  transition: all .3s ease-in-out;
`

export const Card = styled.div`
position: relative;
display: flex; 
flex-direction:column; 
place-items:center;  
padding: 10px;
border-radius: 4px;
filter: drop-shadow(2px 2px 3px #3761A8);
&:hover{
  box-shadow:inset 2px 2px 10px #3761A8, 4px 4px 20px #3761A8;
  transform: scale(1.1);
  transition: all .2s ease-in-out;

  ${DivCard}{
    transition: all .3s ease-in-out;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  p{
    margin: 0;
  }
}
`
export const Div = styled.div`
display: ${({ display }) => display};
flex-direction: ${({ flexDirection }) => flexDirection};
place-items: ${({ placeItems }) => placeItems};
gap: ${({ gap }) => gap};
padding: ${({ padding }) => padding};
border-radius: ${({ borderRadius }) => borderRadius};
justify-content: ${({justifyContent}) => justifyContent};
grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
`

export const P = styled.p``

export const Pcard = styled.p`
margin: 0;
text-transform: capitalize;
`


