import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  return (
    <HeaderContainer>
      <div>Fond Bibliographique</div>
      <div>Nav</div>
      <div>RightLink</div>
    </HeaderContainer>
  )
}

export default Header
