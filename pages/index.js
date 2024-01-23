// pages/saint-valentin.js
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
    router.push('/confirmation'); // Redirection vers la page de confirmation
  };

  const playMusic = () => {
    const audio = document.getElementById('background-music');
    if (audio) {
      audio.play().catch(error => console.log("Audio playback failed:", error));
    }
  };

  const stopMusic = () => {
    const audio = document.getElementById('background-music');
    if (audio) {
      audio.pause();
    }
  };

  return (
    <div className="smiley-background flex items-center justify-center h-screen overflow-hidden">
      <Head>
        <title>Veux-tu être ma Valentine ?</title>
      </Head>
      <button 
        onClick={playMusic} 
        className="absolute top-2 left-4 z-50 text-l text-white bg-green-500 p-2 rounded"
      >
        Lancer la musique
      </button>
      <button 
        onClick={stopMusic} 
        className="absolute top-14 left-4 z-50 text-l text-white bg-red-500 p-2 rounded"
      >
        Couper le son
      </button>
      <div className="text-center">
        <h1 className="text-4xl text-red-600 font-bold mb-4">
          Chère Canelle,
        </h1>
        <h1 className="text-4xl text-red-600 font-bold mb-4">
          Veux-tu être ma Valentine pour la Saint-Valentin ?
        </h1>
        <button 
          onClick={handleYesClick}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 text-2xl rounded"
        >
          Oui, je le veux !
        </button>
        <button 
          onClick={handleNoClick}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 text-2xl rounded ml-4"
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
      <audio id="background-music" src="/test.mp3" loop></audio>
    </div>
  );
}
