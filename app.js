import express from 'express';
import conn from './config/db.js'
import path from 'node:path';
import ejs from 'ejs';
import Photo from './models/Photo.js';

const app = express();
//Db bağlantısı
conn();

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

app.get('/', async(req, res) => {
  const photos =await Photo.find({})
  res.render('index',{
    photos:photos
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

/* app.get('/photos/:id', (req, res) => {
  console.log(req.params.id)
  //res.render('about');
}); */

app.get('/photos/:id', async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render('photo', { photo });
});

app.get('/add', (req, res) => {
  res.render('add');
});


app.post('/photos', async(req, res) => {
  await Photo.create(req.body)
  res.redirect('/');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(` Sunucu http://localhost:${PORT} da başlatıldı..`);
});

