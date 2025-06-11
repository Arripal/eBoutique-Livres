import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Client, ClientListe } from '../../../client.type';
import { MOTDEPASSE_REGLES } from '../../../formulaire.validation';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, FooterComponent],
  templateUrl: './authentification.component.html',
  styles: [],
})
export class AuthentificationComponent {
  readonly router = inject(Router);

  readonly formulaireConnexion = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    motdepasse: new FormControl('', [
      Validators.required,
      Validators.minLength(MOTDEPASSE_REGLES.LONGUEUR_MIN),
      Validators.maxLength(MOTDEPASSE_REGLES.LONGUEUR_MAX),
      Validators.pattern(MOTDEPASSE_REGLES.REGEX),
    ]),
  });

  erreurConnexion: string | null = null;

  get adresseEmail() {
    return this.formulaireConnexion.get('email') as FormControl;
  }

  get motdepasse() {
    return this.formulaireConnexion.get('motdepasse') as FormControl;
  }

  envoieFormulaire(): any {
    this.erreurConnexion = null;

    const formulaireValide = this.formulaireConnexion.valid;

    if (formulaireValide) {
      const clients = localStorage.getItem('clients');

      if (!clients) {
        return (this.erreurConnexion = 'Aucun utilisateur correspondant.');
      }

      let clientsListe: ClientListe = JSON.parse(clients);

      const client = clientsListe.find(
        (client: Client) => client.email === this.adresseEmail.value
      );

      if (!client) {
        return (this.erreurConnexion = 'Les identifiants sont invalides.');
      }

      const motsDePasseValides = this.motdepasse.value === client.motdepasse;

      if (!motsDePasseValides) {
        return (this.erreurConnexion = 'Les identifiants sont invalides.');
      }

      localStorage.setItem(
        'auth',
        JSON.stringify({
          token: 'vevkiejvioze~~~]o¤¤jezjep',
          client: client.prenom,
        })
      );

      this.router.navigate(['/']);
    }
  }
}
