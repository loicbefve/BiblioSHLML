import styled from 'styled-components';
import { useState } from 'react';
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
}
function ResultsViewer({ results }: IProps) {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
