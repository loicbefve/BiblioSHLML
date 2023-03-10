import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import ResultsViewer from '../components/ResultsViewer';
import { ImprimeResearchResult } from '../utils/Types';
import mockData from '../utils/MockData';

/* STYLED COMPONENTS */
const Title = styled.h3`
  text-align: center;
  margin-top: 10px;
`;

/* FUNCTIONS */
function simulateAsyncRequest(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Response from server');
      console.log('loading data');
    }, 300);
  });
}

/* INTERFACES TYPES AND ENUMS */
enum AppState {
  NoData = 'nodata',
  Loading = 'loading',
  Loaded = 'loaded',
}

/* COMPONENT */
function Imprimes() {
  /* STATES */
  const [searchResult, setSearchResult] = useState<ImprimeResearchResult[]>([]);
  const [appState, setAppState] = useState(AppState.NoData);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = async () => {
    console.log('Enter inside handleSearch');
    setAppState(AppState.Loading);
    // TODO : Real backend call
    await simulateAsyncRequest();
    setSearchResult(mockData.data);
    setAppState(AppState.Loaded);
  };

  /* HOOKS */
  /**
   * This hook will launch a search at the first component render if the URL
   * contains title, author or keywords parameters.
   */
  useEffect(() => {
    console.log('Enter inside useEffect');
    const title = searchParams.get('title');
    const author = searchParams.get('author');
    const keywords = searchParams.get('keywords');
    if (title || author || keywords) {
      handleSearch();
    }
  }, []);

  const renderResults = () => {
    switch (appState) {
      case AppState.NoData:
        return <div>Nothing to display mke your first research</div>;
      case AppState.Loading:
        return <div>Loading the data</div>;
      case AppState.Loaded:
        return <ResultsViewer results={searchResult} />;
      default:
        return <div>Unknown application state</div>;
    }
  };

  /* TSX */
  return (
    <>
      <Title>Recherche dans la liste des imprimés</Title>
      <hr />
      <SearchBar onSearch={handleSearch} />
      {renderResults()}
    </>
  );
}

export default Imprimes;
