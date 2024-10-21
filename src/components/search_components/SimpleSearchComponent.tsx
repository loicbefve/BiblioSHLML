import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import PageState from '../../utils/Types';
import SimpleSearchBar from '../searchbars/SimpleSearchBar';
import SearchInvitation from './SearchInvitation';
import SearchLoading from './SearchLoading';
import SimpleResultsViewer from '../results_viewers/SimpleResultsViewer';
import SearchError from './SearchError';
import { SimpleResearchResult } from '../../api/apiService';

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
  apiEndpointFunction: (keywords: string) => Promise<SimpleResearchResult[]>;
}

/**
 * Component
 */
function SimpleSearchComponent({
  searchInvitationMessage,
  apiEndpointFunction,
}: IProps) {
  /* STATES */
  const [searchResult, setSearchResult] = useState<SimpleResearchResult[]>([]);
  const [pageState, setPageState] = useState(PageState.NoData);
  const [error, setError] = useState('');
  const [keywordsState, setKeywordsState] = useState('');
  const [searchParams] = useSearchParams();

  /**
   * This function will handle research by calling the API endpoint used to
   * the research.
   */
  const handleSearch = useCallback(
    async (keywords: string) => {
      setPageState(PageState.Loading);
      try {
        const data = await apiEndpointFunction(keywords);
        setSearchResult(data);
        setPageState(PageState.Loaded);
      } catch (e: any) {
        if (e.response && e.response.status === 404) {
          setPageState(PageState.Loaded);
        } else {
          setError(e.message);
          setPageState(PageState.Error);
        }
      }
    },
    [apiEndpointFunction]
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
