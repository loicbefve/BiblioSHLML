import styled from 'styled-components';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MetadataItem from './MetadataItem';

const MetadataViewerWrapper = styled.div`
  flex: 1;
  text-align: center;
  border: solid 1px green;
`;

const MetadatasWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: auto auto;
  padding: 20px;
`;

const NavigationWrapper = styled.div`
  border: solid 1px violet;
`;

interface IProps {
  results: [string, string][];
  currentFicheId: number;
  currentImageId: number;
}
function MetadataViewer({ results, currentFicheId, currentImageId }: IProps) {
  const numberOfResults = results.length;
  return (
    <MetadataViewerWrapper>
      <NavigationWrapper>
        <ButtonGroup role="group" aria-label="Image navigation">
          <Button
            as={Link as any}
            to={`fiche/${currentFicheId - 1}/image/${currentImageId}`}
            variant="secondary"
            disabled={currentFicheId <= 1}
            active={currentFicheId > 1}
          >
            Image précédente
          </Button>
          <Button
            as={Link as any}
            to={`fiche/${currentFicheId + 1}/image/${currentImageId}`}
            variant="secondary"
            disabled={currentFicheId >= numberOfResults}
            active={currentFicheId < numberOfResults}
          >
            Image suivante{' '}
          </Button>
          <InputGroup.Text id="title-text">
            Resultat {currentFicheId} de {numberOfResults}
          </InputGroup.Text>
        </ButtonGroup>
      </NavigationWrapper>
      <MetadatasWrapper>
        {results.map(([key, value]) => (
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
