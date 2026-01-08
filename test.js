import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const main = async () => {
  try {
    await mongoose.connect('mongodb://localhost/pcat2-test');
    console.log('Veri tabanı oluşturuldu');

    //şema oluşturduk
    const PhotoSchema = new Schema({
      title: String,
      description: String,
    });

    //Model oluşturduk
    const Photo = mongoose.model('Photo', PhotoSchema);

    // veri ekleme
    /*  const newPhoto = await Photo.create({
      title: 'Photo mongo deneme',
      description: 'mongoso ilk deneme photo des',
    });
 */

    //Tüm verileri getirme
    /*   const allPhotos = await Photo.find({});
    console.log('\n--- TÜM FOTOGRAFLAR---')
    console.log(allPhotos) */

    //Update veri
    const id = '695c8fcd296e3111613770b2';
  /*   const updateID = await Photo.findByIdAndUpdate(
      id,
      {
        title: 'değişiğen içerik',
        description: 'yeni açıklama',
      },
      { new: true }
    );
 */
    await Photo.findByIdAndDelete(id)
    console.log(' Veri başarıyla silindi!');


  } catch (error) {
    console.error('HATA', error);
  } finally {
    // İşimiz bitince bağlantıyı kapatmak istersen (Opsiyonel):
    // await mongoose.disconnect();
    // console.log('🔌 Bağlantı sonlandırıldı.');
  }
};

main();
