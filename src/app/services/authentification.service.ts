import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthentificationService {
  constructor() {}

  public estConnecte(): boolean {
    const jeton = this.recupererAuthJeton();

    return jeton ? true : false;
  }

  public recupererAuthJeton() {
    const jeton = localStorage.getItem('auth');

    return jeton ? jeton : null;
  }
}
