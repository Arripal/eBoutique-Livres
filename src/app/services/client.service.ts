import { Injectable } from '@angular/core';
import { Client } from '../../client.type';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor() {}

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
}
