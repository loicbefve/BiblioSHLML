import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 18px;
  text-align: center;
`

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const NavBar = () => {
  return (
    <NavContainer>
      <StyledLink to={`/home`}>Accueil</StyledLink>
      <StyledLink to={`/imprimes`}>Imprimés</StyledLink>
      <StyledLink to={`/factums`}>Factums</StyledLink>
      <StyledLink to={`/fonds_documentaire`}>Fonds Documentaire</StyledLink>
      <StyledLink to={`/fonds_joannique`}>Fonds Johannique</StyledLink>
      <StyledLink to={`/manuscrits`}>Manuscrits</StyledLink>
      <StyledLink to={`/index_pays_lorrain`}>Index du Pays-Lorrain</StyledLink>
      <StyledLink to={`/contact`}>Contact</StyledLink>
    </NavContainer>
  )
}

export default NavBar
