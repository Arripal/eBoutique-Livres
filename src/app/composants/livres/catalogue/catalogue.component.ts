import { Component, inject, signal } from '@angular/core';
import { LivresService } from '../../../services/livres.service';
import { PanierService } from '../../../services/panier.service';
import { Livre } from '../../../../livre.type';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './catalogue.component.html',
  styles: '',
  providers: [LivresService, PanierService],
})
export class CatalogueComponent {
  private readonly livresService = inject(LivresService);
  private readonly panierService = inject(PanierService);
  readonly livres = signal(this.livresService.obtenirToutLesLivres());

  ajouterLivreAuPanier(livre: Livre) {
    this.panierService.ajouterLivreAuPanier(livre);
  }
}
