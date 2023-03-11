import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageState, ImprimeResearchResult } from '../utils/Types';
import mockData from '../utils/MockData';
import ResultsViewer from './ResultsViewer';
import SearchBar from './SearchBar';

/* FUNCTIONS */
function simulateAsyncRequest(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from server');
    }, 2000);
  });
}

/**
 * Component
 */
function SearchComponent() {
  /* STATES */
  const [searchResult, setSearchResult] = useState<ImprimeResearchResult[]>([]);
  const [pageState, setPageState] = useState(PageState.NoData);
  const [searchParams] = useSearchParams();

  /**
   * This function will handle a research by calling the API endpoint used to
   * the research.
   */
  const handleSearch = useCallback(async () => {
    setPageState(PageState.Loading);
    // TODO : Real backend call
    await simulateAsyncRequest();
    setSearchResult(mockData.data);
    clearInterval(undefined);
    setPageState(PageState.Loaded);
  }, []);

  const firstLoadFromURL = useCallback(async () => {
    const title = searchParams.get('title');
    const author = searchParams.get('author');
    const keywords = searchParams.get('keywords');

    if (title || author || keywords) {
      handleSearch();
    }
  }, []);

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
        return <div>Nothing to display make your first research</div>;
      case PageState.Loading:
        return <div>Loading the data</div>;
      case PageState.Loaded:
        return <ResultsViewer results={searchResult} />;
      default:
        return <div>Unknown application state</div>;
    }
  };

  /* TSX */
  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {renderResults()}
    </>
  );
}

export default SearchComponent;
