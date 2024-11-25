import * as express from "express";

declare global {
	namespace Express {
		interface Request {
			body: {
				nome: string;
				email: string;
				matricula: string;
			};
		}
	}
}
