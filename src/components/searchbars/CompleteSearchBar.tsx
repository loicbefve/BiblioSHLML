import { InputGroup, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { Form as RouterForm } from 'react-router-dom';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { Stats } from '../../api/generated-client';

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

const IntroductionText = styled.div`
  padding: 10px;
`;

interface IProps {
  onSearch: (title: string, author: string, keywords: string) => void;
  titleState: string;
  setTitleState: Dispatch<SetStateAction<string>>;
  authorState: string;
  setAuthorState: Dispatch<SetStateAction<string>>;
  keywordsState: string;
  setKeywordsState: Dispatch<SetStateAction<string>>;
  statsFunction: () => Promise<Stats>;
}

function CompleteSearchBar({
  onSearch,
  titleState,
  setTitleState,
  authorState,
  setAuthorState,
  keywordsState,
  setKeywordsState,
  statsFunction,
}: IProps) {
  const [count, setCount] = useState<number>(0);

  const getStats = useCallback(async () => {
    // setPageState(PageState.Loading);
    try {
      const data = await statsFunction();
      setCount(data.count ?? 0);
      // setPageState(PageState.Data);
    } catch (error) {
      // setError(error.message);
      // setPageState(PageState.Error);
    }
  }, [statsFunction]);

  useEffect(() => {
    getStats();
  }, []);

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
            value={titleState}
            onChange={(e) => setTitleState(e.target.value)}
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
            value={authorState}
            onChange={(e) => setAuthorState(e.target.value)}
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
            value={keywordsState}
            onChange={(e) => setKeywordsState(e.target.value)}
          />
        </StyledInputGroup>
        <StyledInputGroup>
          <Button
            variant="secondary"
            type="submit"
            onClick={(e) => onSearch(titleState, authorState, keywordsState)}
          >
            Rechercher dans
          </Button>
          <Form.Control
            disabled
            id="basic-url"
            aria-describedby="number_of_fiches"
            placeholder={`${count} fiches`}
          />
        </StyledInputGroup>
      </InputsWrapper>
    </SearchBarWrapper>
  );
}

export default CompleteSearchBar;
