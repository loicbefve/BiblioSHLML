import styled from 'styled-components';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsDisplay from '../components/ResultsDisplay';

const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

interface ResearchResult {
  epi: string;
  travee: string;
  tablette: string;
  format: string;
  auteur: string;
  titre: string;
  annee: string;
  cote: string;
  tome: string;
  etat: string;
  commentaire: string;
}

function Imprimes() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [keyword, setKeyword] = useState('');
  const [researchResults, setResearchResults] = useState(
    [] as ResearchResult[]
  );

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
