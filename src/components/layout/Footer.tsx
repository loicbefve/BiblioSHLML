import styled from 'styled-components';
import { Navbar } from 'react-bootstrap';

const StyledNavbar = styled(Navbar)`
  padding: 0.5rem 1rem;
`;
function Footer() {
  return <StyledNavbar expand="md" bg="dark" variant="dark" />;
}

export default Footer;
