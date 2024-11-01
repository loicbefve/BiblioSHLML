import styled from 'styled-components';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { Dispatch, SetStateAction, useCallback } from 'react';
import MetadataItem from './MetadataItem';
import { ResearchResult } from '../../api/apiService';

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

const TitleContainer = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border: solid 1px grey;
  background-color: white;
  border-radius: 10px;
  margin: 1rem;
  min-height: 100px;
`;

interface IProps {
  results: ResearchResult[];
  currentDataIndex: number;
  setCurrentDataIndex: Dispatch<SetStateAction<number>>;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}
function MetadataViewer({
  results,
  currentDataIndex,
  setCurrentDataIndex,
  setCurrentImageIndex,
}: IProps) {
  const numberOfResults = results.length;
  const currentResult = results[currentDataIndex];
  const metadatas = Object.entries(currentResult.metadatas);

  const handlePreviousClick = useCallback(() => {
    setCurrentDataIndex(currentDataIndex - 1);
    setCurrentImageIndex(0);
  }, [currentDataIndex, setCurrentDataIndex, setCurrentImageIndex]);

  const handleNextClick = useCallback(() => {
    setCurrentDataIndex(currentDataIndex + 1);
    setCurrentImageIndex(0);
  }, [currentDataIndex, setCurrentDataIndex, setCurrentImageIndex]);

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
      <TitleContainer>
        <div>{currentResult.metadatas.titre}</div>
      </TitleContainer>
      <MetadatasWrapper>
        {metadatas.map(
          ([key, value]) =>
            key === 'titre' || (
              <MetadataItem
                key={`${key}-${value}`}
                metadataName={key}
                metadataValue={value}
              />
            )
        )}
      </MetadatasWrapper>
    </MetadataViewerWrapper>
  );
}

export default MetadataViewer;
