import { Request, Response } from 'express';
import { MatchingService } from '../services/matching.service';

export class MatchingController {
  static match(req: Request, res: Response) {
    res.json(MatchingService.match(req.params.skill));
  }
}
