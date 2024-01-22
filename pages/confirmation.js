// pages/confirmation.js
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Fireworks from 'fireworks-js';
import '../styles/globals.css';

export default function Confirmation() {
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

    // Nettoyage en cas de démontage du composant
    return () => fireworks.stop();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-red-100">
      <Head>
        <title>Confirmation</title>
      </Head>
      <div id="fireworks" className="absolute top-0 left-0 w-full h-full" />
      <div className="text-center z-10">
        <h1 className="text-4xl text-red-600 font-bold mb-4">
          TROP BIEN WOULA
        </h1>
        <h1 className="text-4xl text-red-600 font-bold mb-4">
          TON COPAIN EST TRES TRES TRES HAPPY
        </h1>
      </div>
    </div>
  );
}
