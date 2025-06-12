import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-page-erreur',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './page-erreur.component.html',
  styles: [],
})
export class PageErreurComponent {}
