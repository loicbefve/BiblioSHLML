/* STYLED COMPONENTS */
import styled from 'styled-components';
import CompleteSearchComponent from '../components/search_components/CompleteSearchComponent';
import ApiService from '../api/apiService';

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
      <Title>Recherche dans la liste des Fonds Documentaire</Title>
      <hr />
      <CompleteSearchComponent
        searchInvitationMessage={searchInvitationMessage}
        apiEndpointFunction={ApiService.searchFondsDocumentaire}
        statsFunction={ApiService.statsFondsDocumentaire}
      />
    </FondDocumentaireWrapper>
  );
}

export default FondDocumentaire;
