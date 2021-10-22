import express from 'express';
import ssr from './views/ssr';

const app = express();

// 3000番ポートでWebサーバを立てる
app.listen(3000);

app.use(express.static('assets'));

// https://localhost:3000 にアクセスがあったら ssr() を返す
app.get('/', (_, res) => {
  const response = ssr();
  res.send(response);
});