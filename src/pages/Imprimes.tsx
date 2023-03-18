import styled from 'styled-components';
import FullSearchComponent from '../components/search_components/FullSearchComponent';
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
  'Effectuez votre recherche dans les Imprimés de la société en utilisant le' +
  ' formulaire ci-dessus';

/* COMPONENT */
function Imprimes() {
  return (
    <ImprimesWrapper>
      <Title>Recherche dans la liste des Imprimés</Title>
      <hr />
      <FullSearchComponent
        searchInvitationMessage={searchInvitationMessage}
        apiURLToCall={mockImprimes.data}
      />
    </ImprimesWrapper>
  );
}

export default Imprimes;
