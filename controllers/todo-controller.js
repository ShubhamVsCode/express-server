// Import the Todo model
const Todo = require("../models/todo-model");

// Controller logic for getting all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller logic for creating a new todo
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTodo = new Todo({
      title,
      description,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller logic for getting a single todo by ID
const getTodoById = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).json({ error: "Todo not found" });
    } else {
      res.status(200).json(todo);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller logic for updating a todo
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!updatedTodo) {
      res.status(404).json({ error: "Todo not found" });
    } else {
      res.status(200).json(updatedTodo);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Controller logic for deleting a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);
    if (!deletedTodo) {
      res.status(404).json({ error: "Todo not found" });
    } else {
      res.status(200).json({ message: "Todo deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Export the controller functions
module.exports = {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
};
