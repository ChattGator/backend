import Joi from "joi";

const createProjectSchema = Joi.object({

    name: Joi.string().alphanum().min(3).max(20).required(),
    description: Joi.string().alphanum().max(200),

})

const updateProjectSchema = Joi.object({

    name: Joi.string().alphanum().min(3).max(20),
    description: Joi.string().alphanum().max(200),
    projectConfig: {
        isGroupEnabled: Joi.boolean(),
        chatLimit: Joi.number().max(500)
    }

})


export { createProjectSchema, updateProjectSchema }