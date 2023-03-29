import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { PageState, ResearchResult } from '../../utils/Types';
import CompleteResultsViewer from '../results_viewers/CompleteResultsViewer';
import CompleteSearchBar from '../searchbars/CompleteSearchBar';
import SearchInvitation from './SearchInvitation';
import SearchLoading from './SearchLoading';

const SearchComponentWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ResultDisplayContainer = styled.div`
  background-color: rgba(211, 211, 211, 0.35);
  border-radius: 5px;
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 10px;
  margin: 20px;
`;

interface IProps {
  searchInvitationMessage: string;

  // TODO: Later make it the real API URI
  apiEndpoint: string;
}

/**
 * Component
 */
function CompleteSearchComponent({
  searchInvitationMessage,
  apiEndpoint,
}: IProps) {
  /* STATES */
  const [searchResult, setSearchResult] = useState<ResearchResult[]>([]);
  const [pageState, setPageState] = useState(PageState.NoData);
  const [searchParams] = useSearchParams();

  /**
   * This function will handle a research by calling the API endpoint used to
   * the research.
   */
  const handleSearch = useCallback(async () => {
    setPageState(PageState.Loading);
    const title = searchParams.get('title') || '';
    const author = searchParams.get('author') || '';
    const keywords = searchParams.get('keywords') || '';

    const apiURI = `${
      import.meta.env.VITE_API_URL
    }/${apiEndpoint}?title=${title}&author=${author}&keywords=${keywords}`;

    const res = await fetch(apiURI);

    if (!res.ok) {
      // TODO: May be better to handle the error at the component level for better UX
      throw new Error(`HTTP error: ${res.status}`);
    }

    const jsonResponse = await res.json();
    setSearchResult(jsonResponse);
    setPageState(PageState.Loaded);
  }, [apiEndpoint, searchParams]);

  const firstLoadFromURL = useCallback(async () => {
    const title = searchParams.get('title');
    const author = searchParams.get('author');
    const keywords = searchParams.get('keywords');

    if (title || author || keywords) {
      handleSearch();
    }
  }, [handleSearch, searchParams]);

  /* HOOKS */
  /**
   * This hook will launch a search at the first component render if the URL
   * contains title, author or keywords parameters.
   */
  useEffect(() => {
    firstLoadFromURL();
  }, []);

  const renderResults = () => {
    switch (pageState) {
      case PageState.NoData:
        return (
          <SearchInvitation searchInvitationMessage={searchInvitationMessage} />
        );
      case PageState.Loading:
        return <SearchLoading />;
      case PageState.Loaded:
        return <CompleteResultsViewer results={searchResult} />;
      default:
        return <div>Unknown application state</div>;
    }
  };

  /* TSX */
  return (
    <SearchComponentWrapper>
      <CompleteSearchBar onSearch={handleSearch} />
      <ResultDisplayContainer>{renderResults()}</ResultDisplayContainer>
    </SearchComponentWrapper>
  );
}

export default CompleteSearchComponent;
