import { CandidateService } from './candidate.service';
import { score } from '../utils/scoring.util';

export class MatchingService {
  static match(jobSkill: string) {
    return CandidateService.findAll()
      .map(c => ({
        ...c,
        score: score(c.skill === jobSkill, c.experience)
      }))
      .sort((a, b) => b.score - a.score);
  }
}
