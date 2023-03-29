/* STYLED COMPONENTS */
import styled from 'styled-components';
import CompleteSearchComponent from '../components/search_components/CompleteSearchComponent';
import { mockFactums } from '../utils/MockData';

const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

const FactumsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const searchInvitationMessage =
  'Effectuez votre recherche dans les Factums de la société en utilisant le' +
  ' formulaire ci-dessus';
function Factums() {
  return (
    <FactumsWrapper>
      <Title>Recherche dans la liste des Factums</Title>
      <hr />
      <CompleteSearchComponent
        searchInvitationMessage={searchInvitationMessage}
        apiEndpoint={mockFactums.data}
      />
    </FactumsWrapper>
  );
}

export default Factums;
