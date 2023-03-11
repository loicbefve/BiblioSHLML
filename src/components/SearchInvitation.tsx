import styled from 'styled-components';

const SearchInvitationContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 800px;
  align-items: center;
  color: gray;
`;

function SearchInvitation() {
  return (
    <SearchInvitationContainer>
      <h1>Effectuez votre recherche grâce au formulaire ci-dessus.</h1>
    </SearchInvitationContainer>
  );
}

export default SearchInvitation;
