import styled from 'styled-components';
import CompleteSearchComponent from '../components/search_components/CompleteSearchComponent';

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
  // FIXME : Replace hardcoded URL with configuration call
  return (
    <ImprimesWrapper>
      <Title>Recherche dans la liste des Imprimés</Title>
      <hr />
      <CompleteSearchComponent
        searchInvitationMessage={searchInvitationMessage}
        apiEndpoint="searchImprimes"
      />
    </ImprimesWrapper>
  );
}

export default Imprimes;
