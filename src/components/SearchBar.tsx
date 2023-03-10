import { InputGroup, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Form as RouterForm, Link, useSearchParams } from 'react-router-dom';

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

interface IProps {
  onSearch: () => void;
}

function SearchBar({ onSearch }: IProps) {
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
            // value={title || ''}
            // onChange={(e) => setSearchParams({ title: e.target.value })}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <InputGroup.Text id="author-text">Auteur</InputGroup.Text>
          <Form.Control
            id="author-input"
            aria-describedby="author-input"
            aria-label="author-input"
            type="Search"
            name="author"
            // value={author || ''}
            // onChange={(e) => setSearchParams({ author: e.target.value })}
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
            // value={keywords || ''}
            // onChange={(e) => setSearchParams({ keywords: e.target.value })}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <Button variant="secondary" type="submit" onClick={onSearch}>
            Rechercher dans
          </Button>
          <Form.Control
            disabled
            id="basic-url"
            aria-describedby="number_of_fiches"
            placeholder="xxxxxx fiches au jj/mm/aaaa"
          />
        </StyledInputGroup>
      </InputsWrapper>
    </SearchBarWrapper>
  );
}

export default SearchBar;
