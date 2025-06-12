import { Injectable } from '@angular/core';
import { Client } from '../../client.type';
import { AuthentificationService } from './authentification.service';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private authService: AuthentificationService) {}

  public recupererClient(email: string): Client | undefined {
    const clients = JSON.parse(localStorage.getItem('clients') || '[]');
    return clients.find((c: Client) => c.email === email);
  }

  public enregistrerClient(client: Client): boolean {
    const clients = JSON.parse(localStorage.getItem('clients') || '[]');

    const existant = clients.find((c: Client) => c.email === client.email);
    if (existant) return false;

    clients.push(client);
    localStorage.setItem('clients', JSON.stringify(clients));

    return true;
  }

  public recupererClientLocalStorage() {
    const jeton = this.authService.recupererAuthJeton();

    if (!jeton) {
      return null;
    }
    const data = JSON.parse(jeton);

    const client = this.recupererClient(data?.email);

    return client ? client : null;
  }
}
