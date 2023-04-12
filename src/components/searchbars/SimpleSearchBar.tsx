import { InputGroup, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Form as RouterForm } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';

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

  &.searchInput {
    flex: 3;
  }

  &.submitInput {
    flex: 1;
  }
`;

const SearchBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IntroductionText = styled.div`
  padding: 10px;
`;

interface IProps {
  onSearch: (keywords: string) => void;
  keywords: string;
  setKeywords: Dispatch<SetStateAction<string>>;
}

function SimpleSearchBar({ onSearch, keywords, setKeywords }: IProps) {
  return (
    <SearchBarWrapper>
      <IntroductionText>
        Vous pouvez utiliser les champs de données suivants pour votre
        recherche:
      </IntroductionText>
      <InputsWrapper as={RouterForm} id="search-form" role="search">
        <StyledInputGroup className="searchInput">
          <InputGroup.Text id="keywords-text">Mots clés</InputGroup.Text>
          <Form.Control
            id="keywords-input"
            aria-describedby="keywords-input"
            aria-label="keywords-input"
            type="Search"
            name="keywords"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </StyledInputGroup>
        <StyledInputGroup className="submitInput">
          <Button
            variant="secondary"
            type="submit"
            onClick={(e) => onSearch(keywords)}
          >
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

export default SimpleSearchBar;
