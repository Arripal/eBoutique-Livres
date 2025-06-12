import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-panier-prix-total',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './panier-prix-total.component.html',
  styles: '',
})
export class PanierPrixTotalComponent {
  @Input()
  prixTotal!: number;
  @Input()
  nombreLivresPanier!: number;
}
