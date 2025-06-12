import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthentificationService } from '../services/authentification.service';

export const connexionRequiseGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthentificationService);
  const router = inject(Router);

  if (!authService.estConnecte()) {
    router.navigate(['/auth']);
    return false;
  }

  return true;
};
