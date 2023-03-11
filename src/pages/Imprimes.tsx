import styled from 'styled-components';
import SearchComponent from '../components/SearchComponent';

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

/* COMPONENT */
function Imprimes() {
  return (
    <ImprimesWrapper>
      <Title>Recherche dans la liste des imprimés</Title>
      <hr />
      <SearchComponent />
    </ImprimesWrapper>
  );
}

export default Imprimes;
