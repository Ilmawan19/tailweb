import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Example() {
  return (
    <div className="relative bg-black overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>

      {/* Foto background hanya berisi kata "RESTO SEBELAH" */}
      <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url("https://images5.alphacoders.com/132/1329978.png")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="text-blue-300">RESTO</span> <span className="text-white">SEBELAH</span>
          </h1>
        </div>
      </div>

      {/* Konten penjelasan produk di bawah foto */}
      <div className="relative px-6 py-16 sm:py-24 lg:py-32 flex justify-center items-center">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Temukan berbagai pilihan makanan dan minuman berkualitas tinggi di Resto Sebelah. Dari hidangan khas hingga kreasi baru yang memukau lidah Anda.
          </p>

          {/* Baris Keunggulan */}
          <div className="flex justify-between items-center mt-8">
            {/* Keunggulan Pertama */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold text-blue-300">Menu Variatif</div>
              <p className="text-gray-300 text-center">Nikmati berbagai pilihan menu dari masakan khas hingga hidangan internasional.</p>
            </div>

            {/* Garis Penghubung Vertikal */}
            <div className="border-l border-gray-500 h-12 mx-4"></div>

            {/* Keunggulan Kedua */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold text-blue-300">Suasana Nyaman</div>
              <p className="text-gray-300 text-center">Nikmati makanan Anda dalam suasana yang nyaman dan penuh kehangatan.</p>
            </div>

            {/* Garis Penghubung Vertikal */}
            <div className="border-l border-gray-500 h-12 mx-4"></div>

            {/* Keunggulan Ketiga */}
            <div className="flex flex-col items-center">
              <div className="text-lg font-bold text-blue-300">Pelayanan Prima</div>
              <p className="text-gray-300 text-center">Kami memberikan pelayanan terbaik untuk kenyamanan dan kepuasan Anda sebagai pelanggan.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Konten tentang makanan dan chef */}
      <div className="relative px-6 py-16 sm:py-24 lg:py-32 bg-black text-white text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-blue-300">Tentang Makanan Kami dan Chef</span>
          </h2>
          <p className="mt-6 text-lg leading-8">
            Rasakan kelezatan dan kualitas tinggi dalam setiap hidangan kami. Kami memiliki tim chef berbakat yang menggunakan bahan-bahan segar dan berkualitas untuk memastikan pengalaman kuliner yang tak terlupakan.
          </p>
          <p className="mt-6 text-lg leading-8">
            Saksikan video di bawah untuk melihat bagaimana chef kami dengan penuh dedikasi menciptakan setiap hidangan istimewa untuk Anda.
          </p>
        </div>
        {/* Video Placeholder */}
        <div className="mt-8 mx-auto max-w-2xl">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/MgXXclCbqqs?si=a6JxUf_mqier8XW4r"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
