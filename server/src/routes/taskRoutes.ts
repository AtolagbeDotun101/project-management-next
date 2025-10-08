const express = require("express");
const {getTasks, createTask, updateTaskStatus, getUserTasks} = require("../controller/taskController")

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTaskStatus);
router.get('/user/:userId', getUserTasks)

module.exports =router;
