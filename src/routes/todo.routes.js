import express from "express";
import Todo from "./../models/todo.model.js";
import { responseSuccess, responseFailed } from "./../utilities/response.formatter.js";
import { validateTodo } from "./../utilities/request.validator.js";

const router = express.Router();

// Get todos
router.get("/", async (req, res) => {
	try {
		const todos = await Todo.find();
		return res.status(200).json(responseSuccess("success", todos.reverse()));
	} catch (error) {
		return res.status(500).json(responseFailed("failed", error));
	}
});

// Get todo
router.get("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findById(id);
		return res.status(200).json(responseSuccess("success", todo));
	} catch (error) {
		return res.status(500).json(responseFailed("failed", error));
	}
});

// Create todo
router.post("/", async (req, res) => {
	try {
		// Validate the request body
		const todo = validateTodo(req.body);
		if (todo.error) {
			return res.status(400).json(responseFailed("failed", todo.error));
		}
		const result = await Todo.create(todo.value);
		return res.status(200).json(responseSuccess("success", result));
	} catch (error) {
		return res.status(500).json(responseFailed("failed", error));
	}
});

// Update todo
router.put("/:id", async (req, res) => {
	const id = req.params.id;
	const value = req.body;

	try {
		const result = await Todo.findByIdAndUpdate(id, value);
		return res.status(200).json(responseSuccess("success", result));
	} catch (error) {
		return res.status(400).json(responseFailed("failed", error));
	}
});

// Delete todo
router.delete("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		const result = await Todo.findByIdAndDelete(id);
		return res.status(200).json(responseSuccess("success", result));
	} catch (error) {
		return res.status(400).json(responseFailed("failed", error));
	}
});

// Set todos status
router.post("/set-status", async (req, res) => {
	try {
		const status = req.body.status;
		const result = await Todo.updateMany({ isDone: !status }, { isDone: status });
		return res.status(200).json(responseSuccess("success", result));
	} catch (error) {
		return res.status(500).json(responseFailed("failed", error));
	}
});

export default router;
