import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const products = [
  {
    id: 1,
    name: "Kebab",
    href: "#",
    price: "Rp.250.000",
    imageSrc:
      "https://img.freepik.com/free-photo/frihttps://img.freepik.com/free-photo/delicious-arabic-fast-food-kebab-flat-lay_23-2148651113.jpg?w=740&t=st=1700048825~exp=1700049425~hmac=1ab791c1490b5b59676ed3902de56a2af5552666a5629487a019c1a0867d2ab2",
    Description:
      "Nikmati kelezatan oriental dengan Kebab kami yang lezat! Terbuat dari daging sapi pilihan, dipadu dengan rempah-rempah eksklusif, Kebab kami menawarkan pengalaman kuliner yang memikat. Dibungkus dengan tekun dalam lapisan tortilla yang lembut, Kebab ini memberikan sentuhan cita rasa yang khas dan kenikmatan tiada tara. Sajikan kelezatan ini untuk pengalaman makan yang luar biasa!",
  },
  {
    id: 2,
    name: "Sosis",
    href: "#",
    price: "Rp.170.000",
    imageSrc:
      "https://img.freepik.com/free-photo/fried-sausages-vegetables_140725-3404.jpg?w=740&t=st=1700047874~exp=1700048474~hmac=f8116c551c95d695ae0b36c4d2ed4bac4763e3cb228590ae88cd558d88f667aa",
    Description:
      "Rasakan kenikmatan cita rasa istimewa dengan Sosis kami! Terbuat dari daging pilihan berkualitas tinggi, setiap sosis merupakan perpaduan sempurna antara kelezatan dan kualitas. Dengan proses pembuatan yang teliti, Sosis kami hadir untuk memuaskan selera Anda. Sajikan kelezatan yang tak terlupakan dalam setiap hidangan bersama Sosis kami yang istimewa!",
  },
  {
    id: 3,
    name: "salad",
    href: "#",
    price: "Rp.100.000",
    imageSrc:
      "https://img.freepik.com/free-photo/steak-served-with-potatoes-grilled-vegetable-salad-sauce_140725-8060.jpg?w=740&t=st=1700047988~exp=1700048588~hmac=4e456e61f1adf5e104704f1e7d2b87c887b25cf988eec712c006bb1fb99a64cd",
    Description:
      "Selami kelezatan sehat dengan Salad kami! Dibuat dari sayuran segar, buah-buahan pilihan, dan bahan berkualitas tinggi, setiap gigitan salad kami adalah keharmonisan rasa dan kesehatan. Rasakan nikmatnya dalam setiap sajian, dan berikan kebaikan nutrisi kepada tubuh Anda. Pilih Salad kami, pilihan yang lezat dan sehat!",
  },
  {
    id: 4,
    name: "daging sapi panggang",
    href: "#",
    price: "Rp.490.000",
    imageSrc:
      "https://img.freepik.com/free-photo/top-view-lule-kebab-with-red-onions-wooden-board_141793-1487.jpg?t=st=1700047459~exp=1700048059~hmac=2a2443334907ca3e3fb471cfa17fde0d3376fb29a0e53c0af9a07ffd5d8a6afa",
    Description:
      "Daging sapi panggang adalah hidangan lezat yang dihasilkan dari proses pemanggangan daging sapi. Dengan bumbu dan rempah pilihan, hidangan ini menawarkan rasa gurih dan tekstur garing di luar, tetapi tetap lembut di dalam. Cocok dinikmati dalam berbagai kesempatan, daging sapi panggang adalah pilihan yang memuaskan untuk pencinta daging sapi.",
  },
];

export default function Example() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailClick = (productId) => {
    setSelectedProduct(products.find((product) => product.id === productId));
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  const handleBuyProduct = () => {
    // Add logic to handle the buying process
    console.log("Buying product...");
  };

  return (
    <div
      style={{
        backgroundColor: "black", // Mengganti backgroundImage dengan backgroundColor
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <header className="fixed top-0 left-0 right-0 z-10 shadow-md">
        <Navbar />
      </header>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center border-2 border-teal-400"
                />
              </div>
              <h3 className="mt-4 text-sm text-blue-300">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-white">
                {product.price}
              </p>

              {/* Added buttons */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="bg-teal-500 text-white px-4 py-2 mr-2 rounded hover:bg-teal-600 focus:outline-none"
                  onClick={() => handleDetailClick(product.id)}
                >
                  Lihat Detail / Beli
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Tampilkan detail produk jika ada yang dipilih */}
        {selectedProduct && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                {selectedProduct.name}
              </h2>
              <div className="flex items-center justify-center mb-4">
                <img
                  src={selectedProduct.imageSrc}
                  alt={selectedProduct.imageAlt}
                  className="rounded-lg w-64 h-96 object-cover"
                />
                <div className="ml-4">
                  <p className="mb-4 max-w-prose text-justify">
                    <header className="font-bold">Deskripsi</header>
                    {selectedProduct.Description}
                  </p>
                  <p className="text-lg mb-2">
                  <header className="font-bold">Harga</header>
                    {selectedProduct.price}</p>
                  

                  <button
                    className="bg-gray-500 text-white px-4 py-2 mt-1 rounded hover:bg-gray-600"
                    onClick={handleCloseDetail}
                  >
                    Tutup Detail
                  </button>
                  <button
                    className="bg-blue-500 text-white px-4 py-2 mt-1 ml-2 rounded hover:bg-blue-600"
                    onClick={handleBuyProduct} // Gantilah dengan fungsi yang sesuai untuk memproses pembelian
                  >
                    Beli
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="h-2 py-20">
        <Footer />
      </footer>
    </div>
  );
}