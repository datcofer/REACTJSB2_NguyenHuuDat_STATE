import React, { useState } from 'react';

const GlassesLayout = () => {
  const [selectedGlasses, setSelectedGlasses] = useState(null);

  const arrGlasses = [
    {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "/glasses/glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 2,
      "price": 50,
      "name": "GUCCI G8759H",
      "url": "/glasses/glassesImage/v2.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 3,
      "price": 30,
      "name": "DIOR D6700HQ",
      "url": "/glasses/glassesImage/v3.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 4,
      "price": 70,
      "name": "DIOR D6005U",
      "url": "/glasses/glassesImage/v4.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 5,
      "price": 40,
      "name": "PRADA P8750",
      "url": "/glasses/glassesImage/v5.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 6,
      "price": 60,
      "name": "PRADA P9700",
      "url": "/glasses/glassesImage/v6.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 7,
      "price": 80,
      "name": "FENDI F8750",
      "url": "/glasses/glassesImage/v7.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 8,
      "price": 100,
      "name": "FENDI F8500",
      "url": "/glasses/glassesImage/v8.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
      "id": 9,
      "price": 60,
      "name": "FENDI F4300",
      "url": "/glasses/glassesImage/v9.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-center text-2xl font-bold mb-4">Bài Tập: Cho mảng dữ liệu xây dựng ứng dụng chọn kính.</h2>
      <div className="flex justify-center mb-8">
        <div className='relative'>
          <img src="/glasses/glassesImage/model.jpg" alt="Model" className="w-96 h-96" />
          {selectedGlasses && (
            <div className='absolute top-12 left-0 w-full h-full flex flex-col items-center justify-around'>
              <img src={selectedGlasses.url} alt="Selected Glasses" className="w-44 h-auto mb-4" />
              <div className='bg-orange-300 bg-opacity-75 p-2 rounded w-full text-center'>
                <h3 className="text-xl font-bold text-blue-600">{selectedGlasses.name}</h3>
                <p className='text-white'>{selectedGlasses.desc}</p>
                <span className="font-bold text-green-800">Price: ${selectedGlasses.price}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {arrGlasses.map((glasses) => (
          <img
            key={glasses.id}
            src={glasses.url}
            alt={glasses.name}
            className="w-24 h-24 object-contain cursor-pointer"
            onClick={() => setSelectedGlasses(glasses)}
          />
        ))}
      </div>
    </div>
  );
}

export default GlassesLayout;
