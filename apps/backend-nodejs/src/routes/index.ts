import { Router } from 'express';
// import auth from './auth.routes';
import candidates from './candidate.routes';
// import jobs from './job.routes';
// import matching from './matching.routes';
// import analytics from './analytics.routes';

const router = Router();

// router.use('/auth', auth);
router.use('/candidates', candidates);
// router.use('/jobs', jobs);
// router.use('/matching', matching);
// router.use('/analytics', analytics);

export default router;
