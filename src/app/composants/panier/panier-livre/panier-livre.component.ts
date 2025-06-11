import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QUANTITE_REGLES } from '../../../../quantite.validation';
import { LivrePanierType } from '../../../../livrePanier.type';

@Component({
  selector: 'app-panier-livre',
  standalone: true,
  imports: [],
  templateUrl: './panier-livre.component.html',
})
export class PanierLivreComponent {
  @Input() livre!: LivrePanierType;

  @Output() livreIdEmetteur = new EventEmitter<number>();
  @Output() incrementerQuantite = new EventEmitter<number>();
  @Output() decrementerQuantite = new EventEmitter<number>();

  emettreLivreId() {
    this.livreIdEmetteur.emit(this.livre.id);
  }

  emettreAugmenterQuantite() {
    this.incrementerQuantite.emit(this.livre.id);
  }
  emettreDiminuerQuantite() {
    this.decrementerQuantite.emit(this.livre.id);
  }

  quantiteMinimum = QUANTITE_REGLES.QUANTITE_MIN;
  quantiteMaximum = QUANTITE_REGLES.QUANTITE_MAX;
}
