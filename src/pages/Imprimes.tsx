import styled from 'styled-components';
import { useState } from 'react';
import { useLoaderData, useParams, useNavigation } from 'react-router-dom';
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

type LoaderProps = {
  request: Request;
};

/* FUNCTIONS */

function simulateAsyncRequest(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from server');
    }, 2000);
  });
}

export async function imprimeLoader({ request }: LoaderProps) {
  const url = new URL(request.url);
  const title = url.searchParams.get('title');
  const writer = url.searchParams.get('writer');
  const keywords = url.searchParams.get('keywords');
  simulateAsyncRequest();
  const researchResult = title ? mockImprimes.data : { data: [] };
  return researchResult;
}

/* COMPONENT */
function Imprimes() {
  /* PARAMS */
  const { ficheId, imageId } = useParams<IRouteParams>();
  // const ficheIdInt = ficheId ? parseInt(ficheId, 10) : 1;
  // const imageIdInt = imageId ? parseInt(imageId, 10) : 1;

  /* STATES */
  // const [title, setTitle] = useState('');
  // const [author, setAuthor] = useState('');
  // const [keyword, setKeyword] = useState('');
  //
  // /* HOOKS */
  // const navigation = useNavigation();
  const researchResults = useLoaderData();

  /* CONSTS */
  console.log(researchResults);

  /* TSX */
  return (
    <>
      <Title>Recherche dans la liste des imprimés</Title>
      <hr />
      <SearchBar />
      <ResultDisplayContainer>
        {/* <ImageViewer */}
        {/*  images={urls} */}
        {/*  currentImageId={imageIdInt} */}
        {/*  currentFicheId={ficheIdInt} */}
        {/* /> */}
        {/* <MetadataViewer */}
        {/*  results={Object.entries(datas)} */}
        {/*  currentImageId={imageIdInt} */}
        {/*  currentFicheId={ficheIdInt} */}
        {/* /> */}
      </ResultDisplayContainer>
    </>
  );
}

export default Imprimes;
