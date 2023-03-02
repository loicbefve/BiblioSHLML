import { InputGroup, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const StyledInputGroup = styled(InputGroup)`
  margin-left: 5px;
  margin-right: 5px;
  flex-wrap: nowrap;
  min-width: 300px;
  flex: 1;
  overflow: hidden;
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroductionText = styled.p`
  padding: 10px;
`;

function SearchBar() {
  return (
    <SearchBarWrapper>
      <IntroductionText>
        Vous pouvez utiliser les champs de données suivants pour votre
        recherche:
      </IntroductionText>
      <InputsWrapper>
        <StyledInputGroup>
          <InputGroup.Text id="title-text">Titre</InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="title-text" />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup.Text id="writer-text">Auteur</InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="writer-text" />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup.Text id="keywords-text">Mots clés</InputGroup.Text>
          <Form.Control id="basic-url" aria-describedby="keywords-text" />
        </StyledInputGroup>
        <StyledInputGroup>
          <Button variant="secondary">Rechercher dans</Button>
          <Form.Control
            disabled
            id="basic-url"
            aria-describedby="writer-text"
            placeholder="xxxxxx fiches au jj/mm/aaaa"
          />
        </StyledInputGroup>
      </InputsWrapper>
    </SearchBarWrapper>
  );
}

export default SearchBar;
