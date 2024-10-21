import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { parseSimpleHash } from '../../utils/UtilsFunctions';
import { SimpleResearchResult } from '../../api/apiService';

const ResultViewerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ResultWrapper = styled.div`
  margin: 20px;
  background-color: white;
  flex: 1;
  border-radius: 5px;
  text-align: center;
  padding: 150px;
`;

const NavigationWrapper = styled.div`
  text-align: center;
`;

interface IProps {
  results: SimpleResearchResult[];
}
function SimpleResultsViewer({ results }: IProps) {
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const { hash } = useLocation();

  const numberOfResults = results.length;
  const currentResult = results[currentDataIndex];

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
    if (hash && results.length > 0) {
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
      <div>
        Pas de résultats pour cette recherche. Essayez avec une recherche
        différente
      </div>
    );
  }

  return (
    <ResultViewerWrapper>
      <NavigationWrapper>
        <ButtonGroup role="group" aria-label="Image navigation">
          <Button
            variant="secondary"
            disabled={currentDataIndex <= 0}
            active={currentDataIndex > 0}
            onClick={handlePreviousClick}
          >
            Résultat précédent
          </Button>
          <Button
            variant="secondary"
            disabled={currentDataIndex + 1 >= numberOfResults}
            active={currentDataIndex + 1 < numberOfResults}
            onClick={handleNextClick}
          >
            Résultat suivant{' '}
          </Button>
          <InputGroup.Text id="title-text">
            Resultat {currentDataIndex + 1} de {numberOfResults}
          </InputGroup.Text>
        </ButtonGroup>
      </NavigationWrapper>
      <ResultWrapper>
        {currentResult.metadatas.commentaires.split('\n').map((el) => (
          <p key={el}>{el}</p>
        ))}
      </ResultWrapper>
    </ResultViewerWrapper>
  );
}

export default SimpleResultsViewer;
