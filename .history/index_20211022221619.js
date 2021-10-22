import express from 'express';
import ssr from './src/ssr';

const app = express();

// 3000番ポートでWebサーバを立てる
app.listen(3000);

// https://localhost:3000 にアクセスがあったら ssr() を返す
app.get('/', (_, res) => {
  res.send(ssr());
});