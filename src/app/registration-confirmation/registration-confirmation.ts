import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-registration-confirmation',
  imports: [RouterLink],
  template: `<main class="page"><h1>Inscription confirmée</h1>
    <p>Merci{{ name ? ', ' + name : '' }}. Votre demande a bien été enregistrée.</p>
    <a routerLink="/conferences">Découvrir les conférences</a>
  </main>`,
  styles: ['.page{max-width:38rem;margin:3rem auto;padding:2rem;background:white;border-radius:1rem}'],
})
export class RegistrationConfirmation {
  name = (inject(Router).getCurrentNavigation()?.extras.state?.['name'] as string | undefined) ?? history.state?.name ?? '';
}
