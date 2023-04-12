import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { PageState, SimpleResearchResult } from '../../utils/Types';
import SimpleSearchBar from '../searchbars/SimpleSearchBar';
import SearchInvitation from './SearchInvitation';
import SearchLoading from './SearchLoading';
import SimpleResultsViewer from '../results_viewers/SimpleResultsViewer';
import SearchError from './SearchError';

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
function SimpleSearchComponent({
  searchInvitationMessage,
  apiEndpoint,
}: IProps) {
  /* STATES */
  const [searchResult, setSearchResult] = useState<SimpleResearchResult[]>([]);
  const [pageState, setPageState] = useState(PageState.NoData);
  const [error, setError] = useState('');
  const [keywordsState, setKeywordsState] = useState('');
  const [searchParams] = useSearchParams();

  /**
   * This function will handle a research by calling the API endpoint used to
   * the research.
   */
  const handleSearch = useCallback(
    async (keywords: string) => {
      setPageState(PageState.Loading);

      const apiURI = `${
        import.meta.env.VITE_API_URL
      }/${apiEndpoint}?keywords=${encodeURIComponent(keywords)}`;

      try {
        const response = await fetch(apiURI);

        if (!response.ok) {
          const errorText = `Http error ${response.status} : ${response.statusText}`;
          setError(errorText);
          setPageState(PageState.Error);
          return response;
        }

        const data: SimpleResearchResult[] = await response.json();
        setSearchResult(data);
        setPageState(PageState.Loaded);
        return response;
      } catch (e: any) {
        setError(e.message);
        setPageState(PageState.Error);
        return new Response(null);
      }
    },
    [apiEndpoint]
  );

  const firstLoadFromURL = useCallback(async () => {
    const keywords = searchParams.get('keywords') || '';

    setKeywordsState(keywords);

    if (keywords) {
      handleSearch(keywords);
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
      case PageState.Error:
        return <SearchError error={error} />;
      case PageState.Loaded:
        return <SimpleResultsViewer results={searchResult} />;
      default:
        return <div>Unknown application state</div>;
    }
  };

  /* TSX */
  return (
    <SearchComponentWrapper>
      <SimpleSearchBar
        onSearch={handleSearch}
        keywords={keywordsState}
        setKeywords={setKeywordsState}
      />
      <ResultDisplayContainer>{renderResults()}</ResultDisplayContainer>
    </SearchComponentWrapper>
  );
}

export default SimpleSearchComponent;
