import { Component } from '@angular/core';
import { ConferanceDetails } from '../conferance-details/conferance-details';

@Component({
  selector: 'app-conferance-list',
  imports: [ConferanceDetails],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  conferances = [
    { name: 'Angular', date: '2023-01-15', location: 'New York' },
    { name: 'React', date: '2023-02-20', location: 'San Francisco' },
    { name: 'Vue.js', date: '2023-03-10', location: 'Los Angeles' },
  ];

  inc(){alert('increment');}
}
