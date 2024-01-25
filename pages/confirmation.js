import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Fireworks from 'fireworks-js';
import '../styles/globals.css';

export default function Confirmation() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const container = document.getElementById('fireworks');
    const options = {
      // vos options de feux d'artifice...
    };
    const fireworks = new Fireworks(container, options);
    fireworks.start();

    return () => fireworks.stop();
  }, []);

  useEffect(() => {
    const audio = document.getElementById('background-music');
    if (audio) {
      audio.play().catch(error => console.log("Audio playback failed:", error));
    }
  }, []);

  const toggleSound = () => {
    const audio = document.getElementById('background-music');
    if (audio) {
      isMuted ? audio.muted = false : audio.muted = true;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-pink-200 to-pink-300">
      <Head>
        <title>Confirmation</title>
      </Head>
      <div id="fireworks" className="absolute top-0 left-0 w-full h-full"></div>
      <audio id="background-music" src="/musique.mp3" loop autoPlay></audio>
      <button 
        onClick={toggleSound} 
        className={`absolute top-4 left-4 z-50 text-xl text-white p-2 rounded-full shadow-md focus:outline-none focus:ring-2 ${isMuted ? 'bg-green-500 focus:ring-green-400' : 'bg-red-500 focus:ring-red-400'}`}
      >
        {isMuted ? 'Activer le son' : 'Couper le son'}
      </button>
      <div className="text-center z-10">
        <h1 className="text-6xl text-red-600 font-bold mb-4">
          TROP BIEN WOULA
        </h1>
        <Link href="/">
          <button className="text-xl text-pink-500 hover:text-pink-600 hover:underline">
            Retourner à l accueil
          </button>
        </Link>
      </div>
    </div>
  );
}
