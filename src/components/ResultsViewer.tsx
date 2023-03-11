import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';
import { ImprimeResearchResult } from '../utils/Types';
import ImageViewer from './ImageViewer';
import MetadataViewer from './metadata/MetadataViewer';

/* STYLED COMPONENTS */
const ResultDisplayContainer = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 20px;
`;

interface IProps {
  results: ImprimeResearchResult[];
  currentDataIndex: number;
  setCurrentDataIndex: Dispatch<SetStateAction<number>>;
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}
function ResultsViewer({
  results,
  currentDataIndex,
  setCurrentDataIndex,
  currentImageIndex,
  setCurrentImageIndex,
}: IProps) {
  // useEffect(() => {
  //   const newHash = `r${currentDataIndex + 1}-i${currentImageIndex + 1}`;
  //   window.location.hash = newHash;
  // }, [currentImageIndex, currentDataIndex]);

  if (results.length < 1) {
    return (
      <div>No results found for your request. Try different parameters</div>
    );
  }

  const currentResult = results[currentDataIndex];

  return (
    <ResultDisplayContainer>
      <ImageViewer
        images={currentResult.urls}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <MetadataViewer
        results={results}
        currentDataIndex={currentDataIndex}
        setCurrentDataIndex={setCurrentDataIndex}
      />
    </ResultDisplayContainer>
  );
}

export default ResultsViewer;
