// pages/confirmation.js
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
      maxRockets: 3,            // trois fusées à la fois
      rocketSpawnInterval: 150, // nouvelle fusée toutes les 150 ms
      numParticles: 100,        // 100 particules pour chaque explosion
      explosionMinHeight: 0.2,  // hauteur minimale de l'explosion : 20%
      explosionMaxHeight: 0.9,  // hauteur maximale de l'explosion : 90%
      explosionChance: 0.08     // chance de 8 % pour chaque fusée d'exploser
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
      if (isMuted) {
        audio.muted = false;
        setIsMuted(false);
      } else {
        audio.muted = true;
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <Head>
        <title>Confirmation</title>
      </Head>
      <div id="fireworks" className="absolute top-0 left-0 w-full h-full"></div>
      <audio id="background-music" src="/musique.mp3" loop autoPlay></audio>
      <button 
        onClick={toggleSound} 
        className="absolute top-4 left-4 z-50 text-xl text-white bg-blue-500 p-2 rounded"
      >
        {isMuted ? 'Activer le son' : 'Couper le son'}
      </button>
      <div className="text-center z-10">
        <h1 className="text-4xl text-red-600 font-bold mb-4">
          TROP BIEN WOULA
        </h1>
        <Link href="/" passHref>
          <span className="text-xl text-blue-500 hover:underline cursor-pointer">
            Retourner à l'accueil
          </span>
        </Link>
      </div>
    </div>
  );
}
