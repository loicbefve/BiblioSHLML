import { InputGroup, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
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

function SearchBar() {
  return (
    <SearchBarWrapper>
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
          placeholder="xxxxxx documents au jj/mm/aaaa"
        />
      </StyledInputGroup>
    </SearchBarWrapper>
  );
}

export default SearchBar;
