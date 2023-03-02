import styled from 'styled-components';
import ResultNavigation from '../ResultNavigation';
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

interface IProps {
  metadataPageIndex: number;
  metadatas: Record<string, string>;
}
function MetadataViewer({ metadataPageIndex, metadatas }: IProps) {
  return (
    <MetadataViewerWrapper>
      <ResultNavigation resultType="Fiche" resultIndex={metadataPageIndex} />
      <MetadatasWrapper>
        {Object.entries(metadatas).map(([key, value]) => (
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
