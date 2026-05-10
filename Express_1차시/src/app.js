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

// JSON 응답 예시
app.get('/api/status', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: Date.now() });
});

// 실습 과제 (선택)
app.get('/hello', (req, res) => {
  res.send('안녕하세요, Express!');
});
app.get('/api/time', (req, res) => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  res.json({ time: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}` })
});