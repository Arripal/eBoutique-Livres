import { Routes } from '@angular/router';
import { AccueilComponent } from './composants/accueil/accueil.component';
import { PageErreurComponent } from './composants/page-erreur/page-erreur.component';
import { LivreDetailsComponent } from './composants/livres/livre-details/livre-details.component';
import { CatalogueComponent } from './composants/livres/catalogue/catalogue.component';
import { AuthentificationComponent } from './composants/authentification/authentification.component';
import { PanierComponent } from './composants/panier/panier.component';
import { InscriptionComponent } from './composants/authentification/inscription/inscription.component';

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
  },
  {
    path: 'auth',
    component: AuthentificationComponent,
    title: 'Dupont Editions - Authentification',
  },
  { path: '', component: AccueilComponent, title: 'Dupont Editions' },
  { path: '**', component: PageErreurComponent, title: 'Page introuvable' },
];
