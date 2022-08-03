
const schemaValidator = (schema) => {

    return async (req, res, next) => {

        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error) {
            console.dir(error);
            res.status(400).json({ status: 'error', code: '400', message: error.message })
        }

    }

}

export default schemaValidator