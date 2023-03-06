import styled from 'styled-components';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ElementType } from 'react';
import logo_shlml from '../assets/shlml_logo.jpg';

const ImageViewerWrapper = styled.div`
  flex: 1;
  border: solid 1px red;
  text-align: center;
`;

const ResultImg = styled.img`
  padding: 20px;
  border: solid 1px pink;
  height: 600px;
`;

const ResultNavigationWrapper = styled.div`
  border: solid 1px violet;
`;

interface IProps {
  images: string[];
  currentImageId: number;
  currentFicheId: number;
}
function ImageViewer({ images, currentImageId, currentFicheId }: IProps) {
  const numberOfImages = images?.length;

  return (
    <ImageViewerWrapper>
      <ResultNavigationWrapper>
        <ButtonGroup role="group" aria-label="Image navigation">
          <Button
            as={Link as any}
            to={`fiche/${currentFicheId}/image/${currentImageId - 1}`}
            variant="secondary"
            disabled={currentImageId <= 1}
            active={currentImageId > 1}
          >
            Image précédente
          </Button>
          <Button
            as={Link as any}
            to={`fiche/${currentFicheId}/image/${currentImageId + 1}`}
            variant="secondary"
            disabled={currentImageId >= numberOfImages}
            active={currentImageId < numberOfImages}
          >
            Image suivante{' '}
          </Button>
          <InputGroup.Text id="title-text">
            Resultat {currentImageId} de {numberOfImages}
          </InputGroup.Text>
        </ButtonGroup>
      </ResultNavigationWrapper>
      <ResultImg src={logo_shlml} alt="Result of the research" />
    </ImageViewerWrapper>
  );
}

export default ImageViewer;
