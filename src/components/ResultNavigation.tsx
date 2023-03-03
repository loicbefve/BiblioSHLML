import { Button, ButtonGroup, InputGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
        <Link to={`img/2/metadata/${resultIndex - 1}`}>
          <Button variant="secondary">{resultType} précédente</Button>
        </Link>
        <Link to={`img/2/metadata/${resultIndex + 1}`}>
          <Button variant="secondary">{resultType} suivante </Button>
        </Link>
        <InputGroup.Text id="title-text">
          Resultat {resultIndex} de X
        </InputGroup.Text>
      </ButtonGroup>
    </ResultNavigationWrapper>
  );
}

export default ResultNavigation;
