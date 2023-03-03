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
  imgId: string;
  metadataId: string;
};

/* COMPONENT */
function Imprimes() {
  /* PARAMS */
  const { imgId, metadataId } = useParams<IRouteParams>();

  /* STATES */
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [keyword, setKeyword] = useState('');
  const [researchResults, setResearchResults] = useState(
    [] as ImprimeResearchResult[]
  );
  const [imagePageIndex, setImagePageIndex] = useState(1);
  const [resultPageIndex, setResultPageIndex] = useState(1);

  /* EFFECTS */

  // Effect to bind the route param to the associated state
  useEffect(() => {
    setImagePageIndex(imgId ? parseInt(imgId, 10) : 1);
  }, [imgId]);

  // Effect to bind the route param to the associated state
  useEffect(() => {
    setResultPageIndex(metadataId ? parseInt(metadataId, 10) : 1);
  }, [metadataId]);

  // Effect to collect datas
  useEffect(() => {
    setResearchResults(mockImprimes.data);
  }, []);

  const currentResult =
    researchResults.length !== 0
      ? researchResults[resultPageIndex - 1]
      : { urls: [] };
  const { urls, ...datas } = currentResult;
  const currentImage = urls[imagePageIndex - 1];

  /* TSX */
  return (
    <>
      <Title>Recherche dans la liste des imprimés</Title>
      <hr />
      <SearchBar />
      <ResultDisplayContainer>
        imagePageIndex : {imagePageIndex}
        resultPageIndex: {resultPageIndex}
        <Link
          to={`/imprimes/img/${imagePageIndex + 1}/metadata/${resultPageIndex}`}
        >
          Test
        </Link>
        <ImageViewer imageIndex={imagePageIndex} />
        <MetadataViewer
          metadatas={Object.entries(datas)}
          resultPageIndex={resultPageIndex}
          setResultPageIndex={setResultPageIndex}
        />
      </ResultDisplayContainer>
    </>
  );
}

export default Imprimes;
