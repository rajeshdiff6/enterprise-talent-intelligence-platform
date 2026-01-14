import { Request, Response } from 'express';
import { CandidateService } from '../services/candidate.service';

export class CandidateController {
  static getAll(req: Request, res: Response) {
    res.json(
      CandidateService.findAll(req.query.search as string)
    );
  }
}
