import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-page',
  standalone: true,
  template: '<main class="page"><h1>{{ title() }}</h1><p>{{ description() }}</p></main>',
  styles: ['.page{max-width:52rem;margin:3rem auto;padding:2rem;background:white;border-radius:1rem}'],
})
export class InfoPage {
  title = input('');
  description = input('');
}
