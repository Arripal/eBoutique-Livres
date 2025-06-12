import { Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { InscriptionComponent } from './composants/authentification/inscription/inscription.component';
import { CompteComponent } from './composants/compte/compte.component';
import { CatalogueComponent } from './composants/livres/catalogue/catalogue.component';
import { LivreDetailsComponent } from './composants/livres/livre-details/livre-details.component';
import { PageErreurComponent } from './composants/page-erreur/page-erreur.component';
import { PaiementComponent } from './composants/paiement/paiement.component';
import { PanierComponent } from './composants/panier/panier.component';
import { authentificationGuard } from './guards/authentification.guard';
import { connexionRequiseGuard } from './guards/connexion-requise.guard';

export const routes: Routes = [
  {
    path: 'catalogue/livre/:id',
    component: LivreDetailsComponent,
    title: 'Livre',
  },
  {
    path: 'catalogue',
    component: CatalogueComponent,
    title: 'Dupont Editions - Catalogue',
  },
  {
    path: 'panier',
    component: PanierComponent,
    title: 'Dupont Editions - Panier',
  },
  {
    path: 'auth/inscription',
    component: InscriptionComponent,
    title: 'Dupont Editions - Inscription',
    canActivate: [authentificationGuard],
  },
  {
    path: 'auth',
    component: AuthentificationComponent,
    title: 'Dupont Editions - Authentification',
    canActivate: [authentificationGuard],
  },
  {
    path: 'compte',
    component: CompteComponent,
    canActivate: [connexionRequiseGuard],
  },
  {
    path: 'paiement',
    component: PaiementComponent,
    canActivate: [connexionRequiseGuard],
  },
  { path: '', component: AccueilComponent, title: 'Dupont Editions' },
  { path: '**', component: PageErreurComponent, title: 'Page introuvable' },
];
