import mongoose from 'mongoose';

const conn = async () => {
  try {
    await mongoose.connect('mongodb://localhost/pcat2');
    console.log('✅ Veritabanı bağlantısı başarılı');
  } catch (error) {
    console.error('❌ Bağlantı hatası:', error);
  }finally {
    // İşimiz bitince bağlantıyı kapatmak istersen (Opsiyonel):
    // await mongoose.disconnect();
    // console.log('🔌 Bağlantı sonlandırıldı.');
  }
};

// Yeni nesil export yöntemi
export default conn;