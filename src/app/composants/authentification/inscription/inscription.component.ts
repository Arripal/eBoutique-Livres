import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Client } from '../../../../client.type';
import { MOTDEPASSE_REGLES } from '../../../../formulaire.validation';
import { ClientService } from '../../../services/client.service';
import { FooterComponent } from '../../footer/footer.component';
@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, FooterComponent],
  templateUrl: './inscription.component.html',
  styles: [],
})
export class InscriptionComponent {
  constructor(private clientService: ClientService) {}

  readonly router = inject(Router);
  readonly formulaireInscription = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    prenom: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    motdepasse: new FormControl('', [
      Validators.required,
      Validators.pattern(MOTDEPASSE_REGLES.REGEX),
      Validators.minLength(MOTDEPASSE_REGLES.LONGUEUR_MIN),
      Validators.maxLength(MOTDEPASSE_REGLES.LONGUEUR_MAX),
    ]),
  });

  get adresseEmail() {
    return this.formulaireInscription.get('email') as FormControl;
  }

  get motdepasse() {
    return this.formulaireInscription.get('motdepasse') as FormControl;
  }
  get prenom() {
    return this.formulaireInscription.get('prenom') as FormControl;
  }

  get nom() {
    return this.formulaireInscription.get('nom') as FormControl;
  }

  clientExistant: string | null = null;

  envoieFormulaire() {
    this.clientExistant = null;
    const formValide = this.formulaireInscription.valid;

    if (formValide) {
      const client = this.clientService.recupererClient(
        this.adresseEmail.value
      );

      if (client) {
        this.clientExistant = 'Cet email est déjà utilisé par un autre client.';
        return;
      }

      const nouveauClient: Client = {
        nom: this.nom.value,
        prenom: this.prenom.value,
        email: this.adresseEmail.value,
        motdepasse: this.motdepasse.value,
      };

      this.clientService.enregistrerClient(nouveauClient);

      this.router.navigate(['/auth']);
    }
  }
}
