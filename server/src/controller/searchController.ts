const express = require("express");
import type { Request, Response } from "express";
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

 const search = async (req: Request, res: Response): Promise<void> => {
    const { query } = req.query;
    try {
        const tasks = await prisma.task.findMany({
            where: {
                OR: [
                    { title: { contains: query as string } },
                    { description: { contains: query as string } },
                ],
            },
        });

        const projects = await prisma.project.findMany({
            where: {
                OR: [
                    { name: { contains: query as string } },
                    { description: { contains: query as string } },
                ],
            },
        });

        const users = await prisma.user.findMany({
            where: {
                OR: [{ username: { contains: query as string } }],
            },
        });
        res.json({ tasks, projects, users });
    } catch (error: any) {
        res
            .status(500)
            .json({ message: `Error performing search: ${error.message}` });
    }
};

module.exports = {
    search
};