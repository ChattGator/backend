import express from 'express'
import project from './project'
const router = express.Router();

router.use('/project', project)

export default router