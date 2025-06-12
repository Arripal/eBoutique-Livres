import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PanierService } from '../../services/panier.service';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.css',
})
export class PaiementComponent {
  constructor(private panierService: PanierService) {}

  readonly formulairePaiement = new FormGroup({
    nomCompletCarte: new FormControl('', [Validators.required]),
    numeroCarte: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{16}$/),
    ]),
    expirationDate: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/),
    ]),
    cvvCode: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{3}$/),
    ]),
  });

  nombreDeLivresPanier = this.panierService.calculerNombreLivresDuPanier();

  prixTotalCommande = this.panierService.obtenirPrixTotalPanier();

  public payerCommande() {
    //Appeler une plateforme de paiement
    console.log('Paiement effectué !');
  }
}
