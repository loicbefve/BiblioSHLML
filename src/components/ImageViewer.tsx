import styled from 'styled-components';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import { Dispatch, SetStateAction, useEffect } from 'react';
import logo_shlml from '../assets/shlml_logo.jpg';

const ImageViewerWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

const ResultImg = styled.img`
  padding: 20px;
  height: 600px;
`;

const ResultNavigationWrapper = styled.div``;

interface IProps {
  images: string[];
  currentImageIndex: number;
  setCurrentImageIndex: Dispatch<SetStateAction<number>>;
}
function ImageViewer({
  images,
  currentImageIndex,
  setCurrentImageIndex,
}: IProps) {
  const numberOfImages = images.length;
  const currentSource = images[currentImageIndex];
  const handlePreviousClick = () => {
    setCurrentImageIndex(currentImageIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentImageIndex(currentImageIndex + 1);
  };

  return (
    <ImageViewerWrapper>
      <ResultNavigationWrapper>
        <ButtonGroup role="group" aria-label="Image navigation">
          <Button
            type="button"
            variant="secondary"
            disabled={currentImageIndex <= 0}
            active={currentImageIndex > 0}
            onClick={handlePreviousClick}
          >
            Image précédente
          </Button>
          <Button
            type="button"
            variant="secondary"
            disabled={currentImageIndex + 1 >= numberOfImages}
            active={currentImageIndex + 1 < numberOfImages}
            onClick={handleNextClick}
          >
            Image suivante{' '}
          </Button>
          <InputGroup.Text id="title-text">
            Resultat {currentImageIndex + 1} de {numberOfImages}
          </InputGroup.Text>
        </ButtonGroup>
      </ResultNavigationWrapper>
      <ResultImg
        src={currentSource}
        alt="Result of the research"
        crossOrigin="anonymous"
      />
    </ImageViewerWrapper>
  );
}

export default ImageViewer;
