import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import ImageViewer from './ImageViewer';
import MetadataViewer from './metadata/MetadataViewer';

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

const mockRecord: Record<string, string> = {
  epi: '12',
  travee: '45',
  auteur: 'Calmet',
};
function ResultsDisplay() {
  const { imgId, metadataId } = useParams<IRouteParams>();
  return (
    <ResultDisplayContainer>
      <ImageViewer imageIndex={imgId ? parseInt(imgId, 10) : 0} />
      <MetadataViewer
        metadataPageIndex={metadataId ? parseInt(metadataId, 10) : 0}
        metadatas={mockRecord}
      />
    </ResultDisplayContainer>
  );
}

export default ResultsDisplay;
