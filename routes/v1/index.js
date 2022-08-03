import express from 'express'
import project from './project'
import developer from './developer'
const router = express.Router();

router.use('/project', project);
router.use('/developer', developer);

export default router