import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ImageViewer from './ImageViewer';
import MetadataViewer from '../metadata/MetadataViewer';
import { parseHash } from '../../utils/UtilsFunctions';
import { ResearchResult } from '../../api/apiService';

const VerticalSeparator = styled.div`
  border: none;
  border-left: 1px solid lightgrey;
  width: 1px;
`;

interface IProps {
  results: ResearchResult[];
}
function CompleteResultsViewer({ results }: IProps) {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { hash } = useLocation();

  /**
   * This hook will write in the URL the currently navigated result
   * allowing the user to copy/paste the link and come back to the exact same displayed result.
   */
  useEffect(() => {
    window.location.hash = `r${currentDataIndex + 1}-i${currentImageIndex + 1}`;
  }, [currentImageIndex, currentDataIndex]);

  /**
   * This hook will at first render of the result page set the current data and
   * image index as contained inside the hash part of the URL
   */
  useEffect(() => {
    if (hash) {
      const { parsedDataIndex, parsedImageIndex } = parseHash(hash, results);
      setCurrentDataIndex(parsedDataIndex - 1);
      setCurrentImageIndex(parsedImageIndex - 1);
    }
  }, []);

  if (results.length < 1) {
    return (
      <div>No results found for your request. Try different parameters</div>
    );
  }

  const currentResult = results[currentDataIndex];

  return (
    <>
      <ImageViewer
        images={currentResult.urls}
        currentImageIndex={currentImageIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
      <VerticalSeparator />
      <MetadataViewer
        results={results}
        currentDataIndex={currentDataIndex}
        setCurrentDataIndex={setCurrentDataIndex}
        setCurrentImageIndex={setCurrentImageIndex}
      />
    </>
  );
}

export default CompleteResultsViewer;
