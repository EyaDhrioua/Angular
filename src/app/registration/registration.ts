import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  imports: [FormsModule],
  template: `<main class="page"><h1>Inscription</h1>
    <form (ngSubmit)="submit()">
      <label>Nom complet <input name="name" [(ngModel)]="name" required /></label>
      <label>Adresse e-mail <input name="email" type="email" [(ngModel)]="email" required /></label>
      <button type="submit">Confirmer l’inscription</button>
    </form>
  </main>`,
  styles: ['.page{max-width:38rem;margin:3rem auto;padding:2rem;background:white;border-radius:1rem}form,label{display:grid;gap:.75rem}form{gap:1.25rem}input,button{font:inherit;padding:.7rem}button{cursor:pointer}'],
})
export class Registration {
  private readonly router = inject(Router);
  name = '';
  email = '';

  submit(): void {
    void this.router.navigate(['/registration/confirmation'], { state: { name: this.name } });
  }
}
