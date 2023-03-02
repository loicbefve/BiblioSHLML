import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ImageViewer from './ImageViewer';
import MetadataViewer from './MetadataViewer';

const ResultDisplayContainer = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  padding: 10px;
  margin: 20px;
`;

type IRouteParams = {
  imgId: string;
  metadataId: string;
};
function ResultsDisplay() {
  const { imgId, metadataId } = useParams<IRouteParams>();
  return (
    <ResultDisplayContainer>
      <ImageViewer imageIndex={imgId ? parseInt(imgId, 10) : 0} />
      <MetadataViewer
        metadataIndex={metadataId ? parseInt(metadataId, 10) : 0}
      />
    </ResultDisplayContainer>
  );
}

export default ResultsDisplay;
