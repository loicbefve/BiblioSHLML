import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';

const ResultNavigationWrapper = styled.div`
  border: solid 1px violet;
`;

interface IProps {
  resultType: string;
  resultIndex: number;
}
function ResultNavigation({ resultType, resultIndex }: IProps) {
  return (
    <ResultNavigationWrapper>
      <ButtonGroup role="group" aria-label={`Result navigation ${resultType}`}>
        <Button variant="secondary">{resultType} précédente</Button>
        <Button variant="secondary">{resultType} suivante </Button>{' '}
        <InputGroup.Text id="title-text">
          Resultat {resultIndex} de X
        </InputGroup.Text>
      </ButtonGroup>
    </ResultNavigationWrapper>
  );
}

export default ResultNavigation;
