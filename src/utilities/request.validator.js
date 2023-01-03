import Joi from "joi";

const validateTodo = (todo) => {
	// Define schema validator
	const schema = Joi.object({
		title: Joi.string().max(255).required(),
		description: Joi.string().max(255),
		isDone: Joi.boolean().default(false),
	});

	// Validate the request body
	const validated = schema.validate(todo);
	return validated;
};

export { validateTodo };
