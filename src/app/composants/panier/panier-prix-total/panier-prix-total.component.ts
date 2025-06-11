import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panier-prix-total',
  standalone: true,
  imports: [],
  templateUrl: './panier-prix-total.component.html',
  styles: '',
})
export class PanierPrixTotalComponent {
  @Input()
  prixTotal!: number;
  @Input()
  nombreLivresPanier!: number;
}
