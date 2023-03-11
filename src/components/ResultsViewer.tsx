import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ImprimeResearchResult } from '../utils/Types';
import ImageViewer from './ImageViewer';
import MetadataViewer from './metadata/MetadataViewer';

function parseHash(hashToParse: string, results: ImprimeResearchResult[]) {
  console.log('parseHash called', results);
  const maybeDataIndexFromHash = hashToParse.match(/(?<=r)[0-9]/);
  const maybeImageIndexFromHash = hashToParse.match(/(?<=i)[0-9]/);

  const dataIndexFromHash = maybeDataIndexFromHash
    ? parseInt(maybeDataIndexFromHash.toString(), 10)
    : 1;
  const imageIndexFromHash = maybeImageIndexFromHash
    ? parseInt(maybeImageIndexFromHash.toString(), 10)
    : 1;

  const parsedDataIndex =
    dataIndexFromHash <= results.length ? dataIndexFromHash : 1;
  const parsedImageIndex =
    imageIndexFromHash <= results[parsedDataIndex - 1].urls.length
      ? imageIndexFromHash
      : 1;

  return { parsedDataIndex, parsedImageIndex };
}

interface IProps {
  results: ImprimeResearchResult[];
}
function ResultsViewer({ results }: IProps) {
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
      <MetadataViewer
        results={results}
        currentDataIndex={currentDataIndex}
        setCurrentDataIndex={setCurrentDataIndex}
      />
    </>
  );
}

export default ResultsViewer;
