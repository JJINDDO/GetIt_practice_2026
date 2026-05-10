import express from 'express';
import userRouter from './userRouter.js';
import productRouter from './productRouter.js';

// index.js : 라우팅 관리

const router = express.Router();

router.use('/users', userRouter);   // "/users" 로 시작하는 건 userRouter가 담당하여라!
router.use('/product', productRouter);
// 다른 라우터를 추가할 수 있습니다.

export default router;