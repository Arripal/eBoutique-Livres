export type Livre = {
  id: number;
  titre: string;
  auteur: string;
  annee: number;
  imageLien: string;
  prix: number;
};

export type LivresListe = Livre[];
