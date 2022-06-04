import express from 'express';

const app = express();

app.get('/api/user/all',(req,res,next)=>{
  res.send('Hello world!!!')
})

app.listen(4000, () => console.log('Listen ton port 4000'));
