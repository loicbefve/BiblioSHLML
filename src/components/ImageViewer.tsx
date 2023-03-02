import styled from 'styled-components';
import logo_shlml from '../assets/shlml_logo.jpg';
import ResultNavigation from './ResultNavigation';

const ImageViewerWrapper = styled.div`
  flex: 1;
  border: solid 1px red;
  text-align: center;
`;

const ResultImg = styled.img`
  padding: 20px;
  border: solid 1px pink;
`;

interface IProps {
  imageIndex: number;
}
function ImageViewer({ imageIndex }: IProps) {
  return (
    <ImageViewerWrapper>
      <ResultNavigation resultType="Image" resultIndex={imageIndex} />
      <ResultImg src={logo_shlml} alt="Result of the research" />
    </ImageViewerWrapper>
  );
}

export default ImageViewer;
