/* import mongoose from 'mongoose';
import { Schema } from 'mongoose';

export const PhotoDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost/pcat2-test');
    console.log('Veri tabanı oluşturuldu');

    //şema oluşturduk
    const PhotoSchema = new Schema({
      title: String,
      description: String,
      image: String,
      dateCreated: {
        type: Date,
        default: Date.now,
      },
    });

    //Model oluşturduk
    const Photo = mongoose.model('Photo', PhotoSchema);

    
  } catch (error) {
    console.error('HATA', error);
  } finally {
    // İşimiz bitince bağlantıyı kapatmak istersen (Opsiyonel):
    // await mongoose.disconnect();
    // console.log('🔌 Bağlantı sonlandırıldı.');
  }
}; */


import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

// Modeli oluştur ve dışa aktar
const Photo = mongoose.model('Photo', PhotoSchema);
export default Photo;
