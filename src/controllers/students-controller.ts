import type { Request, Response } from "express";
import { prisma } from "../../prisma/db";

export default class StudentsController {
	async getStudents(req: Request, res: Response) {
		const alunos = await prisma.alunos.findMany();
		return res.send(alunos);
	}

	async createStudent(req: Request, res: Response) {
		const { nome, email, matricula } = req.body;
		if (!nome || !email || !matricula) {
			return res.status(400).json({
				message: "Missing parameters",
			});
		}
		const aluno = await prisma.alunos.create({
			data: {
				nome,
				email,
				matricula,
			},
		});
		return res.send(aluno);
	}

	async updateStudent(req: Request, res: Response) {
		const { id } = req.params;
		const { nome, email, matricula } = req.body;
		if (!id) {
			return res.status(400).json({
				message: "Missing parameters",
			});
		}
		if (!nome || !email || !matricula) {
			return res.status(400).json({
				message: "Missing parameters",
			});
		}

		const alunoExists = await prisma.alunos.findUnique({
			where: {
				id: Number.parseInt(id),
			},
		});
		if (!alunoExists) {
			return res.status(404).json({
				message: "Aluno not found",
			});
		}

		const aluno = await prisma.alunos.update({
			where: {
				id: Number.parseInt(id),
			},
			data: {
				nome,
				email,
				matricula,
			},
		});
		return res.send(aluno);
	}

	async deleteStudent(req: Request, res: Response) {
		const { id } = req.params;
		if (!id) {
			return res.status(400).json({
				message: "Missing parameters",
			});
		}

		const alunoExists = await prisma.alunos.findUnique({
			where: {
				id: Number.parseInt(id),
			},
		});
		if (!alunoExists) {
			return res.status(404).json({
				message: "Aluno not found",
			});
		}

		const aluno = await prisma.alunos.delete({
			where: {
				id: Number.parseInt(id),
			},
		});
		return res.send(aluno);
	}
}
