import { Request, Response } from 'express';
import { JobService } from '../services/job.service';

export class JobController {
  static create(req: Request, res: Response) {
    res.json(JobService.create(req.body));
  }

  static findAll(_: Request, res: Response) {
    res.json(JobService.findAll());
  }
}
