import styled from 'styled-components';

const MetadataWrapper = styled.div`
  border: solid 1px silver;
  padding: 0 10px;
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
`;

interface IProps {
  metadataName: string;
  metadataValue: string;
}
function MetadataItem({ metadataName, metadataValue }: IProps) {
  return (
    <MetadataWrapper>
      <MetadataContainer>
        <MetadataName>{metadataName} :</MetadataName>
        <MetadataValue>{metadataValue}</MetadataValue>
      </MetadataContainer>
    </MetadataWrapper>
  );
}

export default MetadataItem;
