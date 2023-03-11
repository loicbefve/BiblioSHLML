export interface ImprimeResearchResult {
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

export enum PageState {
  NoData = 'nodata',
  Loading = 'loading',
  Loaded = 'loaded',
}
