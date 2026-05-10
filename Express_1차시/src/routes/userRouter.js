import { Router } from "express";
import { getUsers, createUser } from "../controllers/userController.js";    // 함수 불러오기

const userRouter = Router();

// 웹 위치 : localhost:3000/users/
// => index.js에서 use함수를 통해, '/users' 엔드포인트에서 동작하라고 임명받음.

// userController.js 파일에 있는 함수(getUsers, createUser)들을 users에 가져옴
userRouter.get('/', getUsers);
userRouter.post('/', createUser);

export default userRouter;