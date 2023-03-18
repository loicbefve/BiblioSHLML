/* STYLED COMPONENTS */
import styled from 'styled-components';
import SimpleSearchComponent from '../components/search_components/SimpleSearchComponent';
import { mockFondDocumentaire } from '../utils/MockData';

const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

const ManuscritsWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const searchInvitationMessage =
  'Effectuez votre recherche dans les Manuscrits de la société en utilisant le' +
  ' formulaire ci-dessus';
function Manuscrits() {
  return (
    <ManuscritsWrapper>
      <Title>Recherche dans la liste des Manuscrits</Title>
      <hr />
      <SimpleSearchComponent
        searchInvitationMessage={searchInvitationMessage}
        apiURLToCall={mockFondDocumentaire.data}
      />
    </ManuscritsWrapper>
  );
}

export default Manuscrits;
