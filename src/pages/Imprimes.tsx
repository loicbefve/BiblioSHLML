import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import SearchBar from '../components/SearchBar';
import { mockImprimes } from '../utils/MockData';
import ImageViewer from '../components/ImageViewer';
import MetadataViewer from '../components/metadata/MetadataViewer';

/* STYLED COMPONENTS */
const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

const ResultDisplayContainer = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 20px;
`;

/* INTERFACES AND TYPES */
interface ImprimeResearchResult {
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
  urls: string[];
}

type IRouteParams = {
  ficheId: string;
  imageId: string;
};

/* COMPONENT */
function Imprimes() {
  /* PARAMS */
  const { ficheId, imageId } = useParams<IRouteParams>();
  const ficheIdInt = ficheId ? parseInt(ficheId, 10) : 0;
  const imageIdInt = imageId ? parseInt(imageId, 10) : 0;

  /* STATES */
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [keyword, setKeyword] = useState('');
  const [researchResults, setResearchResults] = useState(
    [] as ImprimeResearchResult[]
  );

  /* EFFECTS */
  // Effect to collect datas
  useEffect(() => {
    setResearchResults(mockImprimes.data);
  }, []);

  /* CONSTS */
  const numberOfResults = researchResults.length;
  const currentResult =
    numberOfResults > 0 && numberOfResults > ficheIdInt - 1
      ? researchResults[ficheIdInt - 1]
      : { urls: [] };
  const { urls, ...datas } = currentResult;

  /* TSX */
  return (
    <>
      <Title>Recherche dans la liste des imprimés</Title>
      <hr />
      <SearchBar />
      <ResultDisplayContainer>
        <ImageViewer
          images={urls}
          currentImageId={imageIdInt}
          currentFicheId={ficheIdInt}
        />
        <MetadataViewer
          results={Object.entries(datas)}
          currentImageId={imageIdInt}
          currentFicheId={ficheIdInt}
        />
      </ResultDisplayContainer>
    </>
  );
}

export default Imprimes;
