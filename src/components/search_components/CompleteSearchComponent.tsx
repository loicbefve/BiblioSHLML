import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import PageState from '../../utils/Types';
import CompleteResultsViewer from '../results_viewers/CompleteResultsViewer';
import CompleteSearchBar from '../searchbars/CompleteSearchBar';
import SearchInvitation from './SearchInvitation';
import SearchLoading from './SearchLoading';
import SearchError from './SearchError';
import { FullSearchParams, ResearchResult } from '../../api/apiService';
import { Stats } from '../../api/generated-client';

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

  apiEndpointFunction: (params: FullSearchParams) => Promise<ResearchResult[]>;

  statsFunction: () => Promise<Stats>;
}

/**
 * Component
 */
function CompleteSearchComponent({
  searchInvitationMessage,
  apiEndpointFunction,
  statsFunction,
}: IProps) {
  /* STATES */
  const [searchResult, setSearchResult] = useState<ResearchResult[]>([]);
  const [pageState, setPageState] = useState(PageState.NoData);
  const [error, setError] = useState<string | null>(null);
  const [titleState, setTitleState] = useState('');
  const [authorState, setAuthorState] = useState('');
  const [keywordsState, setKeywordsState] = useState('');
  const [searchParams] = useSearchParams();

  /**
   * This function will handle research by calling the API endpoint used to
   * the research.
   */
  const handleSearch = useCallback(
    async (title: string, author: string, keywords: string) => {
      setPageState(PageState.Loading);
      try {
        const data = await apiEndpointFunction({
          author,
          title,
          keywords,
        });
        setSearchResult(data);
        setPageState(PageState.Loaded);
      } catch (e: any) {
        setError(e.message);
        setPageState(PageState.Error);
      }
    },
    [apiEndpointFunction]
  );

  const firstLoadFromURL = useCallback(async () => {
    const title = searchParams.get('title') || '';
    const author = searchParams.get('author') || '';
    const keywords = searchParams.get('keywords') || '';

    setTitleState(title);
    setAuthorState(author);
    setKeywordsState(keywords);

    if (title || author || keywords) {
      handleSearch(title, author, keywords);
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
        return <SearchError error={error || ''} />;
      case PageState.Loaded:
        return <CompleteResultsViewer results={searchResult} />;
      default:
        return <div>Unknown application state</div>;
    }
  };

  /* TSX */
  return (
    <SearchComponentWrapper>
      <CompleteSearchBar
        onSearch={handleSearch}
        titleState={titleState}
        setTitleState={setTitleState}
        authorState={authorState}
        setAuthorState={setAuthorState}
        keywordsState={keywordsState}
        setKeywordsState={setKeywordsState}
        statsFunction={statsFunction}
      />
      <ResultDisplayContainer>{renderResults()}</ResultDisplayContainer>
    </SearchComponentWrapper>
  );
}

export default CompleteSearchComponent;
