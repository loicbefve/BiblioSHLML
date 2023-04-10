import styled from 'styled-components';
import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { PageState } from '../../utils/Types';
import default_fiche from '../../../public/default_fiche.png';

const ImageViewerWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const ImageContainer = styled.div`
  flex-grow: 0;
`;

const ResultImg = styled.img`
  padding: 20px;
  max-height: 600px;
  height: 100%;
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
  const [img, setImg] = useState('');
  const [pageState, setPageState] = useState(PageState.NoData);

  const handlePreviousClick = useCallback(() => {
    setCurrentImageIndex(currentImageIndex - 1);
  }, [currentImageIndex, setCurrentImageIndex]);

  const handleNextClick = useCallback(() => {
    setCurrentImageIndex(currentImageIndex + 1);
  }, [currentImageIndex, setCurrentImageIndex]);

  const handleSearch = useCallback(async () => {
    setPageState(PageState.Loading);

    const apiURI = `${import.meta.env.VITE_API_URL}/fiches/${currentSource}`;

    const res = await fetch(apiURI);

    if (!res.ok) {
      setImg(default_fiche);
      // TODO : Handle error
    }

    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setImg(imageObjectURL);

    // setPageState(PageState.Loaded);
  }, [currentSource]);

  useEffect(() => {
    if (currentSource) {
      handleSearch();
    } else {
      setImg(default_fiche);
    }
  }, [currentSource]);

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
      <ImageContainer>
        <ResultImg
          src={img}
          alt="Result of the research"
          crossOrigin="anonymous"
        />
      </ImageContainer>
    </ImageViewerWrapper>
  );
}

export default ImageViewer;
