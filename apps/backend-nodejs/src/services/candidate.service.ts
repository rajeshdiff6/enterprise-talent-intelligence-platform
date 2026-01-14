import { Candidate } from '../models/candidate.model';

const candidates: Candidate[] = [
  { id: 1, name: 'Rajesh Kumar', skill: 'Angular', experience: 6 },
  { id: 2, name: 'Anita Sharma', skill: 'React', experience: 5 }
];

export class CandidateService {
  static findAll(search?: string) {
    if (!search) return candidates;
    return candidates.filter(c =>
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }
}
