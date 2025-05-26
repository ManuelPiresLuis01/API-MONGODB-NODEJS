import express from 'express';

const app = express();


app.get('/', (req, res) => {
    console.log("hello world")
  res.send('Hello, World!');
}
);


export default app;