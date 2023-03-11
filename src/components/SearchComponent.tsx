import { useCallback, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
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

function parseHash(hashToParse: string, results: ImprimeResearchResult[]) {
  const maybeDataIndexFromHash = hashToParse.match(/(?<=r)[0-9]/);
  const maybeImageIndexFromHash = hashToParse.match(/(?<=i)[0-9]/);

  const dataIndexFromHash = maybeDataIndexFromHash
    ? parseInt(maybeDataIndexFromHash.toString(), 10)
    : 1;
  const imageIndexFromHash = maybeImageIndexFromHash
    ? parseInt(maybeImageIndexFromHash.toString(), 10)
    : 1;

  const parsedDataIndex =
    dataIndexFromHash <= results.length ? dataIndexFromHash : 1;
  const parsedImageIndex =
    imageIndexFromHash <= results[parsedDataIndex - 1].urls.length
      ? imageIndexFromHash
      : 1;

  return { parsedDataIndex, parsedImageIndex };
}

/**
 * Component
 */
function SearchComponent() {
  /* STATES */
  const [searchResult, setSearchResult] = useState<ImprimeResearchResult[]>([]);
  const [pageState, setPageState] = useState(PageState.NoData);
  const [searchParams] = useSearchParams();
  const { hash } = useLocation();

  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      await handleSearch();
      console.log(`Result in the then ${searchResult}`);
      if (hash) {
        console.log('hash');
        console.log(pageState);
        console.log(searchResult);
        const { parsedDataIndex, parsedImageIndex } = parseHash(
          hash,
          searchResult
        );
        setCurrentDataIndex(parsedDataIndex - 1);
        setCurrentImageIndex(parsedImageIndex - 1);
        console.log(
          `VARIABLES : currentData: ${parsedDataIndex - 1} ; currentImage: ${
            parsedImageIndex - 1
          }`
        );
        console.log(
          `STATES : currentData: ${currentDataIndex} ; currentImage: ${currentImageIndex}`
        );
      }
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
        return (
          <ResultsViewer
            results={searchResult}
            currentDataIndex={currentDataIndex}
            setCurrentDataIndex={setCurrentDataIndex}
            currentImageIndex={currentImageIndex}
            setCurrentImageIndex={setCurrentImageIndex}
          />
        );
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
