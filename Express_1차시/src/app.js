import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

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
  res.json({ time: `${year}-${month}-${day} ${hours}:${minutes}:${seconds}` })
});