import { CandidateService } from './candidate.service';

export class AnalyticsService {
  static summary() {
    const data = CandidateService.findAll();
    return {
      totalCandidates: data.length,
      skills: [...new Set(data.map(c => c.skill))]
    };
  }
}
