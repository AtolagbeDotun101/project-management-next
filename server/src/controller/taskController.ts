const express = require("express");
import type { Request, Response } from "express";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


const getTasks = async (
    req: any,
    res: any
): Promise<void> => {
   

    
    const {projectId} = req.query;

    // console.log({projectId});
    
  
    try {
        const task = await prisma.task.findMany({
            where: {
                projectId: Number(projectId),
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true
            }

        })
        res.json(task);
    } catch (error: any) {
        res.status(500)
        .json({ message: `Error getting task : ${error.message}` })
    }

}


const createTask = async (
    req: any,
    res: any
): Promise<void> => {
    const {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points,
        projectId,
        authorUserId,
        assignedUserId, } = req.body;
    try {
        const newTask = await prisma.task.create({
            data: {
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId,
            }
        });
        res.status(201).json(newTask);
    } catch (error: any) {
        res
            .status(500)
            .json({ message: `Error creating projects: ${error.message}` });
    }
}



const updateTaskStatus = async (
    res: any,
    req: any
): Promise<void> => {
    const taskId = req.param;
    const status = req.body;
    try {
        const updatedTask = await prisma.task.update({
            where: {
                id: Number(taskId),
            },
            data:{
                status:status
            }

        })
        res.json(updatedTask);
    } catch (error: any) {
        res.status(500).json({ message: `Error getting task : ${error.message}` })
    }

}
const getUserTasks = async (
    req: Request,
    res: Response
): Promise<void> => {
    const { userId } = req.params;
    try {
        const tasks = await prisma.task.findMany({
            where: {
                OR: [
                    { authorUserId: Number(userId) },
                    { assignedUserId: Number(userId) },
                ],
            },
            include: {
                author: true,
                assignee: true,
            },
        });
        res.json(tasks);
    } catch (error: any) {
        res
            .status(500)
            .json({ message: `Error retrieving user's tasks: ${error.message}` });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTaskStatus,
    getUserTasks
}