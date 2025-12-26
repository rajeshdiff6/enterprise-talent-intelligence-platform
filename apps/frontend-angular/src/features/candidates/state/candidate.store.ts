import { Injectable, signal, computed, inject } from '@angular/core';
import { CandidateApiService } from '../services/candidate-api.service';

export interface Candidate {
  id: number;
  name: string;
  skill: string;
}

@Injectable({ providedIn: 'root' })
export class CandidateStore {
  private candidates = signal<Candidate[]>([]);
  private searchTerm = signal('');
  private api = inject(CandidateApiService);

  filtered = computed(() => {
    const term = this.searchTerm().toLowerCase();
    return this.candidates().filter(c =>
      c.name.toLowerCase().includes(term)
    );
  });

  constructor() {}

  load() {
    this.api.getCandidates().subscribe(data =>
      this.candidates.set(data)
    );
  }

  search(term: string) {
    this.searchTerm.set(term);
  }
}
