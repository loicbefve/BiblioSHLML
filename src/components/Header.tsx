import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'

const StyledNavbar = styled(Navbar)`
  padding: 0.5rem 1rem;
`

const StyleNav = styled(Nav)`
  align-items: center;
`

const StyledNavItem = styled(Nav.Item)`
  text-align: center;
`

const Header = () => {
  const [expanded, setExpanded] = useState(false)

  const toogleNav = () => {
    setExpanded(!expanded)
  }

  return (
    <StyledNavbar expand="md" bg="dark" variant="dark" expanded={expanded}>
      <Navbar.Brand as={Link} to={`/`}>
        Fond <b>Bibliographique</b>
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={toogleNav}
        aria-controls="responsive-navbar-nav"
      />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        bsPrefix="navbar-collapse justify-content-between"
      >
        <StyleNav>
          <StyledNavItem>
            <Nav.Link as={Link} to={`/imprimes`}>
              Imprimés
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={Link} to={`/factums`}>
              Factums
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={Link} to={`/fonds_documentaire`}>
              Fonds Documentaire
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={Link} to={`/fonds_johannique`}>
              Fonds Johannique
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={Link} to={`/manuscrits`}>
              Manuscrits
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={Link} to={`/index_pays_lorrain`}>
              Index du Pays-Lorrain
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={Link} to={`/contact`}>
              Contact
            </Nav.Link>
          </StyledNavItem>
        </StyleNav>
        <StyleNav>
          <Nav.Link as={Link} to={`/contact`}>
            Société d'Histoire de la Lorraine et du Musée Lorrain
          </Nav.Link>
        </StyleNav>
      </Navbar.Collapse>
    </StyledNavbar>
    // <HeaderContainer>
    //   <LogoLink to={`/`}>
    //     Fond <b>Bibliographique</b>
    //   </LogoLink>
    //   <NavContainer>
    //     <StyledLink to={`/imprimes`}>Imprimés</StyledLink>
    //     <StyledLink to={`/factums`}>Factums</StyledLink>
    //     <StyledLink to={`/fonds_documentaire`}>Fonds Documentaire</StyledLink>
    //     <StyledLink to={`/fonds_johannique`}>Fonds Johannique</StyledLink>
    //     <StyledLink to={`/manuscrits`}>Manuscrits</StyledLink>
    //     <StyledLink to={`/index_pays_lorrain`}>
    //       Index du Pays-Lorrain
    //     </StyledLink>
    //     <StyledLink to={`/contact`}>Contact</StyledLink>
    //   </NavContainer>
    //   <StyledLink
    //     to="http://www.societe-histoire-lorraine.com/"
    //     target="_blank"
    //   >
    //     Société d'Histoire de la Lorraine et du Musée Lorrain
    //   </StyledLink>
    // </HeaderContainer>
  )
}

export default Header
