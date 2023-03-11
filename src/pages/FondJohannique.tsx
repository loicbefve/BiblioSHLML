/* STYLED COMPONENTS */
import styled from 'styled-components';
import SearchComponent from '../components/SearchComponent';

const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

const FondJohanniqueWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const searchInvitationMessage =
  'Effectuez votre recherche dans le Fond Johannique de la société en utilisant le' +
  ' formulaire ci-dessus';
function FondJohannique() {
  return (
    <FondJohanniqueWrapper>
      <Title>Recherche dans la liste des FondJohannique</Title>
      <hr />
      <SearchComponent searchInvitationMessage={searchInvitationMessage} />
    </FondJohanniqueWrapper>
  );
}

export default FondJohannique;
