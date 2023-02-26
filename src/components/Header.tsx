import styled from 'styled-components'
import NavBar from './NavBar'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #343a40;
`

const Header = () => {
  return (
    <HeaderContainer>
      <div>Fond Bibliographique</div>
      <NavBar />
      <div>RightLink</div>
    </HeaderContainer>
  )
}

export default Header
