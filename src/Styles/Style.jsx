import styled from "styled-components";

export const MainContainer = styled.section`
  width: 800px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
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

export const Section = styled.section`
display: ${({ display }) => display};
grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
gap: ${({ gap }) => gap};

@media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const Card = styled.div`
position: relative;
display: flex; 
flex-direction:column; 
place-items:center;  
padding: 10px;
border-radius: 4px;
&:hover{
  box-shadow:2px 2px 10px #e2e2e2, 4px 4px 20px #e2e2e2;
  transition: all .2s ease-in-out;
}
`
export const Div = styled.div`
display: ${({ display }) => display};
flex-direction: ${({ flexDirection }) => flexDirection};
place-items: ${({ placeItems }) => placeItems};
gap: ${({ gap }) => gap};
padding: ${({ padding }) => padding};
border-radius: ${({ borderRadius }) => borderRadius};
`
export const P = styled.p``