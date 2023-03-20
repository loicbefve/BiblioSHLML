import styled from 'styled-components';
import CompleteSearchComponent from '../components/search_components/CompleteSearchComponent';
import { mockImprimes } from '../utils/MockData';

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
      <CompleteSearchComponent
        searchInvitationMessage={searchInvitationMessage}
        apiURLToCall={mockImprimes.data}
      />
    </ImprimesWrapper>
  );
}

export default IndexPaysLorrain;
