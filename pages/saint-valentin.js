import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import '../styles/globals.css';

export default function SaintValentin() {
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const router = useRouter();

  const handleNoClick = () => {
    setShowPopup(true);
    let seconds = 5;
    const interval = setInterval(() => {
      seconds -= 1;
      setCountdown(seconds);
      if (seconds <= 0) {
        clearInterval(interval);
        setShowPopup(false);
      }
    }, 1000);
  };

  const handleYesClick = () => {
    router.push('/confirmation'); // Redirection to the confirmation page
  };

  return (
    <div className="smiley-background flex items-center justify-center h-screen overflow-hidden">
      <Head>
        <title>Veux-tu être ma Valentine ?</title>
      </Head>
      <div className="text-center">
        <h1 className="text-4xl text-red-600 font-bold mb-4">
          Chère [Nom de votre copine],
        </h1>
        <p className="text-xl mb-8">
          Veux-tu être ma Valentine pour la Saint-Valentin ?
        </p>
        <button 
          onClick={handleYesClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Oui, je le veux !
        </button>
        <button 
          onClick={handleNoClick}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Non, flemme
        </button>
      </div>
      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" aria-hidden="true"></div>
          <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded shadow-lg max-w-lg mx-auto text-center">
              <p className="text-red-500 text-xl font-bold">Mauvaise réponse !</p>
              <p className="mb-4">Nouvel essai dans : {countdown}s</p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
