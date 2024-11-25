import { type Request, type Response, Router } from "express";
import { prisma } from "../../prisma/db";
import StudentsController from "../controllers/students-controller";

const router = Router();
const studentsController = new StudentsController();

//@ts-ignore
router.get("/", studentsController.getStudents.bind(studentsController));

router.post(
	"/create",
	//@ts-ignore
	studentsController.createStudent.bind(studentsController),
);

router.patch(
	"/update/:id",
	//@ts-ignore
	studentsController.updateStudent.bind(studentsController),
);

router.delete(
	"/delete/:id",
	//@ts-ignore
	studentsController.deleteStudent.bind(studentsController),
);

export default router;
