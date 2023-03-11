import styled from 'styled-components';
import SearchComponent from '../components/SearchComponent';

/* STYLED COMPONENTS */
const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

/* COMPONENT */
function Imprimes() {
  return (
    <>
      <Title>Recherche dans la liste des imprimés</Title>
      <hr />
      <SearchComponent />
    </>
  );
}

export default Imprimes;
