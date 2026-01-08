import express from 'express';
import path from 'node:path';
import ejs from 'ejs';

const app = express();

//TEMPLATE ENGINE
app.set('view engine', 'ejs'); // ejs klasör yapısında viwes klasörüne bakar  bu yüzden temp klasörünü views yapıyıyoruz .

//MIDDLEWARES
app.use(express.static('public'));

//Form verilerini okumak için (req.body'yi doldurur)
app.use(express.urlencoded({extended:true}))
//JSON verilerini okumak için (API yaparsan lazım olur)
app.use(express.json())


//bizim yazdığımız MIDDLEWARES
/* const myLogger =(req,res,next)=>{
    console.log("Middleware Log1");
    next();
} */

//burada yukarıda yazdıgmız myLogger Middlewareyi çağırıyoruz
//app.use(myLogger)

//ROUTES ögrenme aşaması
/* app.get('/', (req, res) => {
  //res.sendFile("/home/ibrahimsoydan/js-World/PCAT02/temp/index.html") altta yapılanın uzun hali ama sadecebenim makinada çalışır
  //res.sendFile(path.resolve('temp', 'index.html'));  ejs yapısından sonra bunu aşagıdaki gibi yapıyoruz .yollar ve yapılar degişti  temp views oldu vs.
  res.render('index')
}); */

//ROUTES

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.get('/video-page', (req, res) => {
  res.render('video-page');
});

app.post('/photos', (req, res) => {
  console.log(req.body)
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Sunucu http://localhost:${PORT} da başlatıldı..`);
});
