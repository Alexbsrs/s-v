import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
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
    <>
      <div className="fixed bottom-40 right-40">
        <Image
          src="/smiley_bg.jpg" 
          alt="Smiley Background"
          width={100}  // Spécifiez une largeur
          height={100} // Spécifiez une hauteur
        />
      </div>
      <div className="fixed top-20 right-20">
        <Image
          src="/smiley_bg.jpg" 
          alt="Smiley Background"
          width={100}  // Spécifiez une largeur
          height={100} // Spécifiez une hauteur
        />
      </div>
      <div className="fixed top-40 left-40">
        <Image
          src="/smiley_bg.jpg" 
          alt="Smiley Background"
          width={100}  // Spécifiez une largeur
          height={100} // Spécifiez une hauteur
        />
      </div>
      <div className="fixed top-20 left-80">
        <Image
          src="/smiley_bg.jpg" 
          alt="Smiley Background"
          width={100}  // Spécifiez une largeur
          height={100} // Spécifiez une hauteur
        />
      </div>
      <div className="fixed top-10 right-80">
        <Image
          src="/smiley_bg.jpg" 
          alt="Smiley Background"
          width={100}  // Spécifiez une largeur
          height={100} // Spécifiez une hauteur
        />
      </div>
      <div className="fixed bottom-20 left-40">
        <Image
          src="/smiley_bg.jpg" 
          alt="Smiley Background"
          width={100}  // Spécifiez une largeur
          height={100} // Spécifiez une hauteur
        />
      </div>
      <div className="fixed bottom-10 left-80">
        <Image
          src="/smiley_bg.jpg" 
          alt="Smiley Background"
          width={100}  // Spécifiez une largeur
          height={100} // Spécifiez une hauteur
        />
      </div>
      <div className="fixed bottom-10 right-80">
        <Image
          src="/smiley_bg.jpg" 
          alt="Smiley Background"
          width={100}  // Spécifiez une largeur
          height={100} // Spécifiez une hauteur
        />
      </div>
      <div className="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
        <Head>
          <title>Veux-tu être ma Valentine ?</title>
        </Head>
        <button 
          onClick={playMusic} 
          className="absolute top-2 left-4 z-50 text-l text-white bg-green-500 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        >
          Lancer la musique
        </button>
        <button 
          onClick={stopMusic} 
          className="absolute top-14 left-4 z-50 text-l text-white bg-red-500 p-2 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
        >
          Couper le son
        </button>
        <div className="text-center">
          <h1 className="text-pink-600 font-bold text-5xl mb-4">
            Chère Canelle,
          </h1>
          <h1 className="text-red-600 font-bold text-5xl mb-6">
            Veux-tu être ma Valentine pour la Saint-Valentin ?
          </h1>
          <button 
            onClick={handleYesClick}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 text-2xl transition duration-300 ease-in-out"
          >
            Oui, je le veux !
          </button>
          <button 
            onClick={handleNoClick}
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 text-2xl transition duration-300 ease-in-out ml-4"
          >
            Non, flemme
          </button>
        </div>
        {showPopup && (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10" aria-hidden="true"></div>
            <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto text-center">
                <p className="text-red-500 text-xl font-bold">Mauvaise réponse !</p>
                <p className="mb-4">Nouvel essai dans : {countdown}s</p>
              </div>
            </div>
          </>
        )}
        <audio id="background-music" src="/test.mp3" loop></audio>
      </div>
    </>
  );
}
