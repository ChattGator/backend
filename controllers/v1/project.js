import project from '../../models/project.schema'

const createProject = async (req, res) => {

    const { email } = req;
    const { name, description } = req.body;



    try {
        await project.create({ name, developerId: email, description });
        res.status(201).json({ status: 'success', code: '201', message: 'The project created successfully' })
    } catch (error) {
        res.status(500).json({ status: 'error', code: '500', message: error.message })
    }


}

const fetchAllProjects = async (req, res) => {

    const { email } = req;

    try {
        const results = await project.find({ developerId: email }).exec();

        if (results.length > 0) {
            return res.status(200).json({ status: 'success', code: '200', data: results, status: 'success', message: 'Project fetched successfully' })
        }
        res.status(200).json({ status: 'success', code: '200', data: [], message: 'No result found' })
    } catch (error) {
        res.status(500).json({ status: 'error', code: '500', message: error.message })
    }



}

const fetchProjectById = async (req, res) => {
    const { email } = req;
    const { id } = req.params;

    try {
        const result = await project.findOne({ id }).exec();
        if (result) {
            return res.status(200).json({ status: 'success', code: '200', data: result, message: 'project fetched successfully' })
        }
        res.status(200).json({ status: 'success', code: '200', data: {}, message: 'No project found' })

    } catch (error) {
        res.status(500).json({ status: 'error', code: '500', message: error.message })
    }
}

const updateProject = async (req, res) => {

    const { email } = req;
    const { id } = req.params;

    try {

    } catch (error) {

    }

}

const deleteProject = async (req, res) => {

    const { email } = req;
    const { id } = req.params;

    try {
        const result = await project.deleteOne({ developerId: email, id });
        if (result.deleteCount > 0) {
            return res.status(200).json({ status: 'success', code: '200', message: 'project deleted successfully' });
        }
        res.status(200).json({ status: 'error', code: '400', message: 'Invalid project Id' })
    } catch (error) {
        console.log(error)
        res.status(400).json({ status: 'error', code: '400', message: error.message })
    }

}

export { createProject, fetchAllProjects, fetchProjectById, updateProject, deleteProject }