import React from 'react';
import { MapIcon, PhoneIcon, InboxIcon } from '@heroicons/react/20/solid';
import Navbar from './Navbar';
import Footer from './Footer';

const features = [
  {
    name: 'Address.',
    description:
      'Jl. Yos Sudarso No.47, Wonokriyo, Kec. Gombong, Kabupaten Kebumen, Jawa Tengah 54412.',
    icon: MapIcon,
  },
  {
    name: 'Telephone.',
    description: '+62-892-2222-2222.',
    icon: PhoneIcon,
  },
  {
    name: 'Email.',
    description: 'iniemail123@gmail.com.',
    icon: InboxIcon,
  },
];

export default function Example() {
  return (
    <div className="relative bg-black overflow-hidden">
      <header className="absolute inset-x-0 top-0 z-50">
        <Navbar />
      </header>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-8 mt-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-300">About Us</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight">
                <span className="text-blue-300">RESTO</span> <span className="text-white">SEBELAH</span>
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              Resto Sebelah adalah destinasi kuliner yang memanjakan lidah Anda dengan berbagai hidangan lezat dan cita rasa otentik. Terletak di pusat kota, kami menawarkan pengalaman bersantap yang unik dengan menu pilihan dari berbagai masakan kreatif. Didukung oleh tim koki berbakat, Resto Sebelah mengundang Anda untuk menikmati suasana santai dan kenikmatan kuliner di setiap kunjungan. Selamat datang di Resto Sebelah, tempat di mana setiap hidangan adalah sebuah perjalanan rasa yang menggoda selera Anda.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-300" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://img.freepik.com/free-photo/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_140725-8504.jpg?w=1380&t=st=1698321333~exp=1698321933~hmac=5af681b5af2f970e260e9affa74d87495b95d33c2241dc798bb9365ae095d58c"
            alt="Product screenshot"
            className="w-98 h-auto max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={800}
          />
        </div>
      </div>
      <footer className="bg-gray-100 py-0 text-center h-block">
        <Footer />
      </footer>
    </div>
  );
}
