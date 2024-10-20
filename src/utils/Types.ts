import {
  Factum,
  FondsDocumentaire,
  FondsJohannique,
  Imprime,
  SearchFactumsGetRequest,
  SearchFondsDocumentaireGetRequest,
  SearchFondsJohanniqueGetRequest,
  SearchImprimesGetRequest,
} from '../api/generated-client';

// FIXME: We use directly types from the generated api client. It could be better
// to create our own types for less coupling. However the api should not change
// in a while.

export type ResearchResult =
  | Factum
  | FondsJohannique
  | Imprime
  | FondsDocumentaire;

export interface SimpleResearchResult {
  metadatas: {
    commentaires: string;
  };
}

export type FullSearchParams =
  | SearchFactumsGetRequest
  | SearchFondsJohanniqueGetRequest
  | SearchImprimesGetRequest
  | SearchFondsDocumentaireGetRequest;

export enum PageState {
  NoData = 'nodata',
  Loading = 'loading',
  Loaded = 'loaded',
  Error = 'error',
}
