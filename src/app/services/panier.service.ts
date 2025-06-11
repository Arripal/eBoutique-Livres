import { Injectable, signal } from '@angular/core';
import { Livre } from '../../livre.type';
import { ListeLivresPanierType, LivrePanierType } from '../../livrePanier.type';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private livresPanier = signal<ListeLivresPanierType>([]);
  private prixTotalPanier = signal<number>(0);

  constructor() {
    this.recupererLivresDuLocalStorage();
    this.calculerPrixTotalDuPanier();
  }

  private recupererLivresDuLocalStorage() {
    const livres = localStorage.getItem('livres');

    if (livres) {
      this.livresPanier.set(JSON.parse(livres));
    }
  }

  private sauvegarderLivresDansLocalStorage() {
    localStorage.setItem('livres', JSON.stringify(this.livresPanier()));
  }

  obtenirLivreDuPanierParId(livreId: number): LivrePanierType | undefined {
    const livreExistant = this.livresPanier().find((livre: LivrePanierType) => {
      return livre.livre.id === livreId;
    });

    return livreExistant;
  }

  ajouterLivreAuPanier(livre: Livre): void {
    const livreExistant = this.obtenirLivreDuPanierParId(livre.id);

    if (livreExistant == undefined) {
      // Création du nouveau produit du panier
      const livrePanier = { livre, id: Date.now(), quantite: 1 };

      this.livresPanier.update((livres) => [...livres, livrePanier]);
    } else {
      // Mise à jour du produit existant avec la quantité à jour
      let nouvelleQuantite = livreExistant.quantite + 1;
      this.supprimerLivreDuPanier(livreExistant.id);
      this.livresPanier.update((livres) => [
        ...livres,
        { ...livreExistant, quantite: nouvelleQuantite },
      ]);
    }
    this.sauvegarderLivresDansLocalStorage();
  }

  augmenterQuantiteLivrePanier(livreId: number) {
    const livrePanier = this.livresPanier().find((livre: LivrePanierType) => {
      return livre.id === livreId;
    });

    if (livrePanier) {
      let nouvelleQuantite = livrePanier.quantite + 1;
      this.supprimerLivreDuPanier(livrePanier.id);
      this.livresPanier.update((livres) => [
        ...livres,
        { ...livrePanier, quantite: nouvelleQuantite },
      ]);
    }
    this.sauvegarderLivresDansLocalStorage();
  }

  diminuerQuantiteLivrePanier(livreId: number) {
    const livrePanier = this.livresPanier().find((livre: LivrePanierType) => {
      return livre.id === livreId;
    });
    if (livrePanier) {
      let nouvelleQuantite = livrePanier.quantite - 1;
      this.supprimerLivreDuPanier(livrePanier.id);
      this.livresPanier.update((livres) => [
        ...livres,
        { ...livrePanier, quantite: nouvelleQuantite },
      ]);
    }
    this.sauvegarderLivresDansLocalStorage();
  }

  obtenirLivresDuPanier() {
    return this.livresPanier;
  }

  obtenirPrixTotalPanier() {
    return this.prixTotalPanier;
  }

  supprimerLivreDuPanier(livreId: number) {
    this.livresPanier.update((livres) =>
      livres.filter((livre: LivrePanierType) => livre.id !== livreId)
    );
    this.sauvegarderLivresDansLocalStorage();
  }

  calculerPrixTotalDuPanier() {
    const prix = this.livresPanier()
      .map((livre: LivrePanierType) => {
        return livre.quantite * livre.livre.prix;
      })
      .reduce((prixTotal, prix) => {
        return (prixTotal += prix);
      }, 0);

    this.prixTotalPanier.set(prix);
  }

  calculerNombreLivresDuPanier() {
    const nombreLivres = this.livresPanier().reduce((nbLivres, livre) => {
      return (nbLivres += livre.quantite);
    }, 0);

    return nombreLivres;
  }
}
