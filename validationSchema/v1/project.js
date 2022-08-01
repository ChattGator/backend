import Joi from "joi";

const createProjectSchema = Joi.object({

    name: Joi.string().alphanum().min(3).max(20).required(),
    description: Joi.string().alphanum().max(200),

})

const projectUpdateSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(20),
    description: Joi.string().alphanum().max(200)

})


export { createProjectSchema }