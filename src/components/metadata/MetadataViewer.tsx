import styled from 'styled-components';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { Dispatch, SetStateAction } from 'react';
import MetadataItem from './MetadataItem';
import { ResearchResult } from '../../utils/Types';

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

const Title = styled.h2`
  margin-top: 1rem;
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

  const handlePreviousClick = () => {
    setCurrentDataIndex(currentDataIndex - 1);
    setCurrentImageIndex(0);
  };

  const handleNextClick = () => {
    setCurrentDataIndex(currentDataIndex + 1);
    setCurrentImageIndex(0);
  };

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
      <Title>{currentResult.metadatas.titre}</Title>
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

export default MetadataViewer;
