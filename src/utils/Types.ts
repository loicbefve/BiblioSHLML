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

export interface SimpleResearchResult {
  metadatas: {
    commentaires: string;
  };
}

export enum PageState {
  NoData = 'nodata',
  Loading = 'loading',
  Loaded = 'loaded',
}
