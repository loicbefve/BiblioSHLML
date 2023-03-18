import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { SimpleResearchResult } from '../../utils/Types';
import { parseSimpleHash } from '../../utils/UtilsFunctions';
import MetadataItem from '../metadata/MetadataItem';

const MetadataViewerWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const MetadatasWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 50% 50%;
  padding: 20px;
`;

const NavigationWrapper = styled.div``;

interface IProps {
  results: SimpleResearchResult[];
}
function SimpleResultsViewer({ results }: IProps) {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const { hash } = useLocation();

  const numberOfResults = results.length;
  const currentResult = results[currentDataIndex];
  const metadatas = Object.entries(currentResult.metadatas);

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
      const { parsedDataIndex } = parseSimpleHash(hash, results);
      setCurrentDataIndex(parsedDataIndex - 1);
    }
  }, []);

  const handlePreviousClick = useCallback(() => {
    setCurrentDataIndex(currentDataIndex - 1);
  }, [currentDataIndex, setCurrentDataIndex]);

  const handleNextClick = useCallback(() => {
    setCurrentDataIndex(currentDataIndex + 1);
  }, [currentDataIndex, setCurrentDataIndex]);

  if (results.length < 1) {
    return (
      <div>No results found for your request. Try different parameters</div>
    );
  }

  return (
    <MetadataViewerWrapper>
      <NavigationWrapper>
        <ButtonGroup role="group" aria-label="Image navigation">
          <Button
            variant="secondary"
            disabled={currentDataIndex <= 0}
            active={currentDataIndex > 0}
            onClick={handlePreviousClick}
          >
            Image précédente
          </Button>
          <Button
            variant="secondary"
            disabled={currentDataIndex + 1 >= numberOfResults}
            active={currentDataIndex + 1 < numberOfResults}
            onClick={handleNextClick}
          >
            Image suivante{' '}
          </Button>
          <InputGroup.Text id="title-text">
            Resultat {currentDataIndex + 1} de {numberOfResults}
          </InputGroup.Text>
        </ButtonGroup>
      </NavigationWrapper>
      <MetadatasWrapper>
        {metadatas.map(([key, value]) => (
          <MetadataItem
            key={`${key}-${value}`}
            metadataName={key}
            metadataValue={value}
          />
        ))}
      </MetadatasWrapper>
    </MetadataViewerWrapper>
  );
}

export default SimpleResultsViewer;
