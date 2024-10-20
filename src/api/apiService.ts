import { Configuration, SearchApi } from './generated-client';

// Create and configure the API instance once
const apiConfig = new Configuration({
  basePath: import.meta.env.VITE_API_URL,
});

// Instantiate the API client
const searchApi = new SearchApi(apiConfig);

export interface ResearchResult {
  metadatas: {
    titre: string;
    [key: string]: string;
  };
  urls: string[];
}

export interface ImprimeResearchResult extends ResearchResult {
  metadatas: {
    epi: string;
    travee: string;
    tablette: string;
    format: string;
    auteur: string;
    titre: string;
    annee: string;
    cote: string;
    tome: string;
    etat: string;
    commentaire: string;
  };
  urls: string[];
}

export interface FactumsResearchResult extends ResearchResult {
  metadatas: {
    cote: string;
    tome: string;
    type: string;
    auteur: string;
    titre: string;
    couverture: string;
    langue: string;
    edition: string;
    datation: string;
    contenu: string;
    etat: string;
    note: string;
    emplacement: string;
  };
  urls: string[];
}

export interface FondsDocumentaireResearchResult extends ResearchResult {
  metadatas: {
    carton: string;
    fonds: string;
    type_de_document: string;
    auteur: string;
    auteur_bis: string;
    titre: string;
    couverture: string;
    langue: string;
    edition: string;
    datation: string;
    contenu: string;
    etat: string;
    ancien_proprietaire: string;
    notes: string;
    don: string;
    emplacement_initiale_dans_la_bibliotheque: string;
  };
  urls: string[];
}

export interface FondsJohanniquesResearchResult extends ResearchResult {
  metadatas: {
    epi: string;
    travee: string;
    tablette: string;
    auteur: string;
    titre: string;
    annee: string;
    cote: string;
    etat: string;
    metrage_ou_commentaire: string;
    carton: string;
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
};

export default ApiService;
