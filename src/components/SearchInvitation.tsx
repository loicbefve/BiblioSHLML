import styled from 'styled-components';

const SearchInvitationContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  height: 800px;
  align-items: center;
  color: gray;
`;

const SearchInvitationText = styled.h1``;
function SearchInvitation() {
  return (
    <SearchInvitationContainer>
      <SearchInvitationText>
        Effectuez votre recherche grâce au formulaire ci-dessus.
      </SearchInvitationText>
    </SearchInvitationContainer>
  );
}

export default SearchInvitation;
