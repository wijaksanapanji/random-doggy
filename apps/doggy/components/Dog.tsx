import { getRandomDog } from '@nx-next/dog-api';
import { useEffect, useState } from 'react';

const Dog = () => {
  const [dog, setDog] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getDog = async () => {
    setLoading(true);

    const { status, message } = await getRandomDog();
    if (status !== 'success') {
      getDog();
    }
    setDog(message);

    setLoading(false);
  };

  useEffect(() => {
    getDog();
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h1 className="font-bold text-2xl">Random Doggies 🐶!</h1>
      <p className="text-sm">Nothing more and nothing less.</p>
      <div className="my-8 mx-4">
        <img
          className={` w-96 h-96 object-cover rounded-lg transition-opacity ${
            loading ? 'opacity-50' : 'opacity-100'
          }`}
          src={dog}
        />
      </div>
      <button
        className=" text-gray-900 rounded px-4 py-2 font-semibold hover:bg-blue-400 transition-colors bg-blue-300 text-sm border-2 border-blue-100 "
        onClick={getDog}
        disabled={loading}
      >
        {loading ? 'Loading ⏳' : 'Doggy 👉'}
      </button>
    </div>
  );
};

export default Dog;
