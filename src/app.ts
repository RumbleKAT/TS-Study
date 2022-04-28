import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

const app = express();
app.set('view engine', 'pug');
app.set('views',path.join(__dirname,'template'));
app.use(express.static(path.join(__dirname,'template')));

const port = 8081;

app.get('/',(req:Request, res:Response,next:NextFunction)=>{
    res.render('index');
});

app.listen(port,()=>{
    console.log(`server is running on port : ${port}`);
});