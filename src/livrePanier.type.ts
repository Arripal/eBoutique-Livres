import { Livre } from './livre.type';

export type LivrePanierType = {
  id: number;
  livre: Livre;
  quantite: number;
};

export type ListeLivresPanierType = LivrePanierType[];
