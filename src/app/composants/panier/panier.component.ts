import { Component, computed, inject } from '@angular/core';
import { PanierService } from '../../services/panier.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PanierVideComponent } from './panier-vide/panier-vide.component';
import { PanierPrixTotalComponent } from './panier-prix-total/panier-prix-total.component';
import { PanierLivreComponent } from './panier-livre/panier-livre.component';
import { Livre } from '../../../livre.type';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    PanierVideComponent,
    PanierPrixTotalComponent,
    PanierLivreComponent,
  ],
  templateUrl: './panier.component.html',
  styles: `
.scrollbar-modifiee {
  scrollbar-width: thin;
  scrollbar-color: #9ca3af #e5e7eb;
}

.scrollbar-modifiee::-webkit-scrollbar {
  width: 8px;
}

.scrollbar-modifiee::-webkit-scrollbar-track {
  background: #e5e7eb;
  border-radius: 4px;
}

.scrollbar-modifiee::-webkit-scrollbar-thumb {
  background-color: #9ca3af;
  border-radius: 4px;
  border: 2px solid #e5e7eb;
}

.scrollbar-modifiee::-webkit-scrollbar-thumb:hover {
  background-color: #6b7280;
}

  @media (min-width: 1024px) {
  .panier-scrollable {
    max-height: calc(100vh - 400px);
  }
}`,
  providers: [PanierService],
})
export class PanierComponent {
  private readonly panierService = inject(PanierService);
  livresPanier = this.panierService.obtenirLivresDuPanier();
  readonly prixTotalPanier = this.panierService.obtenirPrixTotalPanier();

  readonly nombreDeLivresPanier = computed(() => {
    return this.panierService.calculerNombreLivresDuPanier();
  });

  supprimerLivreDuPanier(livreId: number) {
    this.panierService.supprimerLivreDuPanier(livreId);
  }

  suppressionLivreEtMiseAJourDuPanier(livreId: number) {
    this.supprimerLivreDuPanier(livreId);
    this.panierService.calculerPrixTotalDuPanier();
    this.livresPanier = this.panierService.obtenirLivresDuPanier();
  }

  augmenterQuantiteLivrePanier(livreId: number) {
    this.panierService.augmenterQuantiteLivrePanier(livreId);
    this.panierService.calculerPrixTotalDuPanier();
  }

  diminuerQuantiteLivrePanier(livreId: number) {
    this.panierService.diminuerQuantiteLivrePanier(livreId);
    this.panierService.calculerPrixTotalDuPanier();
  }
}
