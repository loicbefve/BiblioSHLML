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
  padding: 0 300px;
  word-break: break-all;
`;

interface IProps {
  error: string;
}
function SearchLoading({ error }: IProps) {
  return (
    <SearchLoadingContainer>
      <h1>Une erreur s&apos;est produite durant la recherche :</h1>
      <h2>{error}</h2>
    </SearchLoadingContainer>
  );
}

export default SearchLoading;
