import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const StyledNavbar = styled(Navbar)`
  padding: 0.5rem 1rem;
`;

const StyleNav = styled(Nav)`
  align-items: center;
`;

const StyledNavItem = styled(Nav.Item)`
  text-align: center;
`;

/**
 * Header Function
 * @constructor
 */
function Header() {
  const [expanded, setExpanded] = useState(false);

  const toogleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledNavbar expand="md" bg="dark" variant="dark" expanded={expanded}>
      <Navbar.Brand as={NavLink} to="/">
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
            <Nav.Link as={NavLink} to="/imprimes">
              Imprimés
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={NavLink} to="/factums">
              Factums
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={NavLink} to="/fonds_documentaire">
              Fonds Documentaire
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={NavLink} to="/fonds_johannique">
              Fonds Johannique
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={NavLink} to="/manuscrits">
              Manuscrits
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={NavLink} to="/index_pays_lorrain">
              Index du Pays-Lorrain
            </Nav.Link>
          </StyledNavItem>
          <StyledNavItem>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </StyledNavItem>
        </StyleNav>
        <StyleNav>
          <Nav.Link as={NavLink} to="/contact">
            Société d&apos;Histoire de la Lorraine et du Musée Lorrain
          </Nav.Link>
        </StyleNav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
}

export default Header;
