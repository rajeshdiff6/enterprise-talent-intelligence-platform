import { Component, OnInit, computed } from '@angular/core';
import { CandidateStore } from '../state/candidate.store';

@Component({
  standalone: true,
  selector: 'candidate-list-page',
  template: `
    <h2>Candidates</h2>

    <input
      placeholder="Search..."
      (input)="store.search($any($event.target).value)"
    />

    <ul>
        @for(candidate of filteredCandidates(); track candidate.id) {
            <li>{{ candidate.name }} – {{ candidate.skill }}</li>
        }
    </ul>
  `,
})
export class CandidateListPage implements OnInit {
  constructor(public store: CandidateStore) {}

  filteredCandidates = computed(() =>
    this.store.filtered()
  );

  ngOnInit() {
    this.store.load();
  }
}
