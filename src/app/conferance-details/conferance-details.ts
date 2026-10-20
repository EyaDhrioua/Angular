import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONFERANCES } from '../conferances';

@Component({
  selector: 'app-conferance-details',
  imports: [RouterLink],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConferanceDetails {
  id = input.required<string>();
  conferance = computed(() =>
    CONFERANCES.find((item) => item.id === Number(this.id())),
  );
}
