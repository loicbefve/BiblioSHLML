import styled from 'styled-components';

const MetadataWrapper = styled.div`
  padding: 0 10px;
  border: solid 1px grey;
  background-color: white;
  border-radius: 10px;
`;

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const MetadataName = styled.div`
  font-weight: bold;
`;

const MetadataValue = styled.div`
  margin-left: 10px;
  flex: 1;
  text-align: left;
`;

function cleanMetadataName(metadataName: string): string {
  const capitalized =
    metadataName.charAt(0).toUpperCase() + metadataName.slice(1);

  return capitalized.replaceAll('_', ' ');
}

interface IProps {
  metadataName: string;
  metadataValue: string;
}
function MetadataItem({ metadataName, metadataValue }: IProps) {
  return (
    <MetadataWrapper>
      <MetadataContainer>
        <MetadataName>{cleanMetadataName(metadataName)} :</MetadataName>
        <MetadataValue>{metadataValue}</MetadataValue>
      </MetadataContainer>
    </MetadataWrapper>
  );
}

export default MetadataItem;
