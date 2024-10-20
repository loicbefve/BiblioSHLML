import { Configuration, SearchApi } from './generated-client';
import { FullSearchParams } from '../utils/Types';

// Create and configure the API instance once
const apiConfig = new Configuration({
  basePath: import.meta.env.VITE_API_URL,
});

// Instantiate the API client
const searchApi = new SearchApi(apiConfig);

// Export functions to interact with your API
const ApiService = {
  searchImprimes: (params: FullSearchParams) =>
    searchApi.searchImprimesGet(params),
  searchFactums: (params: FullSearchParams) =>
    searchApi.searchFactumsGet(params),
  searchFondsJohannique: (params: FullSearchParams) =>
    searchApi.searchFondsJohanniqueGet(params),
  searchFondsDocumentaire: (params: FullSearchParams) =>
    searchApi.searchFondsDocumentaireGet(params),
};

export default ApiService;
