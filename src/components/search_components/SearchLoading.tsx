import styled from 'styled-components';
import { Spinner } from 'react-bootstrap';

const SearchLoadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  color: gray;
`;

function SearchLoading() {
  return (
    <SearchLoadingContainer>
      <h1>Chargement ...</h1>
      <Spinner animation="border" />
    </SearchLoadingContainer>
  );
}

export default SearchLoading;
