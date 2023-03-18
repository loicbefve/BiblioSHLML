import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ResearchResult } from '../../utils/Types';
import MetadataViewer from '../metadata/MetadataViewer';
import { parseHash } from '../../utils/UtilsFunctions';

interface IProps {
  results: ResearchResult[];
}
function SimpleResultsViewer({ results }: IProps) {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const { hash } = useLocation();

  /**
   * This hook will write in the URL the currently navigated result
   * allowing the user to copy/paste the link and come back to the exact same displayed result.
   */
  useEffect(() => {
    window.location.hash = `r${currentDataIndex + 1}`;
  }, [currentDataIndex]);

  /**
   * This hook will at first render of the result page set the current data and
   * image index as contained inside the hash part of the URL
   */
  useEffect(() => {
    if (hash) {
      const { parsedDataIndex } = parseHash(hash, results);
      setCurrentDataIndex(parsedDataIndex - 1);
    }
  }, []);

  if (results.length < 1) {
    return (
      <div>No results found for your request. Try different parameters</div>
    );
  }

  return (
    <MetadataViewer
      results={results}
      currentDataIndex={currentDataIndex}
      setCurrentDataIndex={setCurrentDataIndex}
    />
  );
}

export default SimpleResultsViewer;
