import { InputGroup, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Form as RouterForm } from 'react-router-dom';

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
      <InputsWrapper as={RouterForm} id="search-form" role="search">
        <StyledInputGroup>
          <InputGroup.Text id="title-text">Titre</InputGroup.Text>
          <Form.Control
            id="title-input"
            aria-describedby="title-input"
            aria-label="title-input"
            type="Search"
            name="title"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup.Text id="writer-text">Auteur</InputGroup.Text>
          <Form.Control
            id="writer-input"
            aria-describedby="writer-input"
            aria-label="writer-input"
            type="Search"
            name="writer"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup.Text id="keywords-text">Mots clés</InputGroup.Text>
          <Form.Control
            id="keywords-input"
            aria-describedby="keywords-input"
            aria-label="keywords-input"
            type="Search"
            name="keywords"
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <Button variant="secondary" type="submit">
            Rechercher dans
          </Button>
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
