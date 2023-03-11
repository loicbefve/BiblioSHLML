import styled from 'styled-components';

const SearchLoadingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
  color: gray;
`;

const Spinner = styled.div`
  border: 16px solid gray;
  border-top: 16px dimgrey solid;
  border-radius: 50%;
  height: 120px;
  width: 120px;
  animation: spin 2s linear infinite;
  /* 
  border: 16px solid #f3f3f3; 
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite; */

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

function SearchLoading() {
  return (
    <SearchLoadingContainer>
      <h1>Chargement ...</h1>
      <Spinner />
    </SearchLoadingContainer>
  );
}

export default SearchLoading;
