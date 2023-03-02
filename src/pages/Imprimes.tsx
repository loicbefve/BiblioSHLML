import styled from 'styled-components';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsDisplay from '../components/ResultsDisplay';

const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;
function Imprimes() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [keyword, setKeyword] = useState('');
  return (
    <>
      <Title>Recherche dans la liste des imprimés</Title>
      <hr />
      <SearchBar />
      <ResultsDisplay />
    </>
  );
}

export default Imprimes;
