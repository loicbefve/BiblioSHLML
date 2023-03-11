/* STYLED COMPONENTS */
import styled from 'styled-components';
import SearchComponent from '../components/SearchComponent';
import { mockFondDocumentaire } from '../utils/MockData';

const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

const FondDocumentaireWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const searchInvitationMessage =
  'Effectuez votre recherche dans le Fond Documentaire de la société en utilisant le' +
  ' formulaire ci-dessus';
function FondDocumentaire() {
  return (
    <FondDocumentaireWrapper>
      <Title>Recherche dans la liste des FondDocumentaire</Title>
      <hr />
      <SearchComponent
        searchInvitationMessage={searchInvitationMessage}
        apiURLToCall={mockFondDocumentaire.data}
      />
    </FondDocumentaireWrapper>
  );
}

export default FondDocumentaire;
