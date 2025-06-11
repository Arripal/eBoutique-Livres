import { Component, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    this.gererAuthMessage();
  }

  estMenuOuvert = signal<boolean>(false);

  authMessage = signal('Se connecter');

  gererAuthMessage() {
    let jetonExistant = localStorage.getItem('auth');

    if (!jetonExistant) {
      return;
    }

    this.authMessage.set('Mon Compte');
  }
  gererMenuNavigation() {
    this.estMenuOuvert.set(!this.estMenuOuvert());
  }
}
