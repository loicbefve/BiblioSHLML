import styled from 'styled-components';
import { mockManuscrits } from '../utils/MockData';
import SimpleSearchComponent from '../components/search_components/SimpleSearchComponent';

/* STYLED COMPONENTS */
const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

const ImprimesWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const searchInvitationMessage =
  "Effectuez votre recherche dans l'Index du Pays Lorrain en utilisant le" +
  ' formulaire ci-dessus';

/* COMPONENT */
function IndexPaysLorrain() {
  return (
    <ImprimesWrapper>
      <Title>Recherche dans l&apos;Index du Pays Lorrain</Title>
      <hr />
      <SimpleSearchComponent
        searchInvitationMessage={searchInvitationMessage}
        apiEndpoint="searchIndexPaysLorrain"
      />
    </ImprimesWrapper>
  );
}

export default IndexPaysLorrain;
