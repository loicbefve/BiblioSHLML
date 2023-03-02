import styled from 'styled-components';
import ResultNavigation from './ResultNavigation';

const MetadataViewerWrapper = styled.div`
  flex: 1;
  text-align: center;
  border: solid 1px green;
`;

interface IProps {
  metadataIndex: number;
}
function MetadataViewer({ metadataIndex }: IProps) {
  return (
    <MetadataViewerWrapper>
      <ResultNavigation resultType="Fiche" resultIndex={metadataIndex} />
      <div>Titre du résultat en cours</div>
      <div>Tableau de données</div>
    </MetadataViewerWrapper>
  );
}

export default MetadataViewer;
