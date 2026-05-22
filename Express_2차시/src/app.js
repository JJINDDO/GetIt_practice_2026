import express from 'express';
import { Router } from 'express';

import router from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

// json을 해독할 수 있게 함. 이걸 써줘야 post 가능.
app.use(express.json());

// 라우팅을 관리하는 index.js의 router라는 변수를 갖고 온다.
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});