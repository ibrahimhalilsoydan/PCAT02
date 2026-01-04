import express from 'express';
import path from 'node:path';

const app = express();

//bizim yazdığımız MIDDLEWARES
/* const myLogger =(req,res,next)=>{
    console.log("Middleware Log1");
    next();
} */

//MIDDLEWARES
app.use(express.static('public'));

//burada yukarıda yazdıgmız myLogger Middlewareyi çağırıyoruz
//app.use(myLogger)

app.get('/', (req, res) => {
  //res.sendFile("/home/ibrahimsoydan/js-World/PCAT02/temp/index.html")
  res.sendFile(path.resolve('temp', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Sunucu http://localhost:${PORT} da başlatıldı..`);
});
