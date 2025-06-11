import { Injectable } from '@angular/core';
import { Livres } from '../../livres.fake';
import { Livre } from '../../livre.type';

@Injectable({
  providedIn: 'root',
})
export class LivresService {
  obtenirToutLesLivres() {
    return Livres;
  }

  obtenirLivreParId(livreId: number): Livre {
    const livre = Livres.find((livre) => livre.id === livreId);

    if (!livre) throw new Error(`Aucun livre ne correspond à votre demande.`);

    return livre;
  }
}
