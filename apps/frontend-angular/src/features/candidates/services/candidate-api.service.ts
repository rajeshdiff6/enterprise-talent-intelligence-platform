import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Candidate } from '../state/candidate.store';

@Injectable({ providedIn: 'root' })
export class CandidateApiService {
  constructor(private http: HttpClient) {}

  getCandidates(): Observable<Candidate[]> {
    // Mocked for now
    return of([
      { id: 1, name: 'Rajesh Kumar', skill: 'Angular' },
      { id: 2, name: 'Anita Sharma', skill: 'React' },
      { id: 3, name: 'Mohit Verma', skill: 'Node.js' }
    ]);
  }
}
