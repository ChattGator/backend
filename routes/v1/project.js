import express from 'express'
import { createProject, fetchAllProjects, fetchProjectById, updateProject, deleteProject } from '../../controllers/v1/project';
import schemaValidator from '../../middlewares/schemaValidator';
import { createProjectSchema } from '../../validationSchema/v1/project';
const router = express.Router();




router.get('/', fetchAllProjects)   // fetch all projects
router.get('/:id', fetchProjectById)  // fetch project by id
router.post('/', schemaValidator(createProjectSchema), createProject)       // create a new project
router.patch('/:id', updateProject);   // update the project with id
router.delete('/:id', deleteProject)   // delete project with id

export default router