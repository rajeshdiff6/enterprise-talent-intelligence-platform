import { Request, Response } from 'express';
import { AnalyticsService } from '../services/analytics.service';

export class AnalyticsController {
  static summary(_: Request, res: Response) {
    res.json(AnalyticsService.summary());
  }
}
