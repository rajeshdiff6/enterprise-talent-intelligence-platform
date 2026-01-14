import { Job } from '../models/job.model';

const jobs: Job[] = [];
let id = 1;

export class JobService {
  static create(job: Omit<Job, 'id'>) {
    const newJob = { id: id++, ...job };
    jobs.push(newJob);
    return newJob;
  }

  static findAll() {
    return jobs;
  }
}
