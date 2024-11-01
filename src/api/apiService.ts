import { Configuration, SearchApi, StatsApi } from './generated-client';

// Create and configure the API instance once
const apiConfig = new Configuration({
  basePath: import.meta.env.VITE_API_URL,
});

// Instantiate the API client
console.log(import.meta.env.VITE_API_URL);
console.log(apiConfig);
const searchApi = new SearchApi(apiConfig);
const statsApi = new StatsApi(apiConfig);

export interface ResearchResult {
  metadatas: {
    titre: string;
    [key: string]: string;
  };
  urls: string[];
}
export interface FullSearchParams {
  author: string;
  title: string;
  keywords: string;
}

export interface SimpleResearchResult {
  metadatas: {
    commentaires: string;
  };
}

// Export functions to interact with your API
const ApiService = {
  searchImprimes: (params: FullSearchParams) =>
    searchApi.searchImprimesGet(params) as Promise<ResearchResult[]>,
  searchFactums: (params: FullSearchParams) =>
    searchApi.searchFactumsGet(params) as Promise<ResearchResult[]>,
  searchFondsJohannique: (params: FullSearchParams) =>
    searchApi.searchFondsJohanniqueGet(params) as Promise<ResearchResult[]>,
  searchFondsDocumentaire: (params: FullSearchParams) =>
    searchApi.searchFondsDocumentaireGet(params) as Promise<ResearchResult[]>,
  searchIndexPaysLorrain: (keywords: string) =>
    searchApi.searchIndexPaysLorrainGet({ keywords }) as Promise<
      SimpleResearchResult[]
    >,
  searchManuscrits: (keywords: string) =>
    searchApi.searchManuscritsGet({ keywords }) as Promise<
      SimpleResearchResult[]
    >,
  statsImprimes: () => statsApi.statsImprimesGet(),
  statsFactums: () => statsApi.statsFactumsGet(),
  statsFondsDocumentaire: () => statsApi.statsFondsDocumentaireGet(),
  statsFondsJohannique: () => statsApi.statsFondsJohanniqueGet(),
  statsManuscrits: () => statsApi.statsManuscritsGet(),
  statsIndexPaysLorrain: () => statsApi.statsIndexPaysLorrainGet(),
};

export default ApiService;
