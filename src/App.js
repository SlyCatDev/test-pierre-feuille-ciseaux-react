import React, { useState } from 'react';
import './App.css'; // Assure-toi de créer ce fichier CSS pour le style
import confetti from 'canvas-confetti'; // Importer la bibliothèque de confettis

function App() {
  // État pour stocker les scores et le résultat
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState('');

  // Fonction pour générer le choix de l'ordinateur
  const computerChoice = () => {
    const choices = ['Pierre', 'Feuille', 'Ciseaux'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  };

  // Fonction pour déterminer le gagnant
  const determineWinner = (playerSelection) => {
    const computerSelection = computerChoice();
    let message;

    if (playerSelection === computerSelection) {
      message = "C'est une égalité !";
    } else if (
      (playerSelection === 'Pierre' && computerSelection === 'Ciseaux') ||
      (playerSelection === 'Feuille' && computerSelection === 'Pierre') ||
      (playerSelection === 'Ciseaux' && computerSelection === 'Feuille')
    ) {
      setPlayerScore(playerScore + 1);
      message = "Vous avez gagné !";
      triggerConfetti();
    } else {
      setComputerScore(computerScore + 1);
      message = "L'ordinateur a gagné !";
    }

    setResult(`Vous avez choisi : ${playerSelection}. L'ordinateur a choisi : ${computerSelection}. ${message}`);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="game-container">
      <h1>Pierre, Feuille, Ciseaux</h1>
      <p>Faites votre choix :</p>
      <div className="choices">
        <button onClick={() => determineWinner('Pierre')}>Pierre</button>
        <button onClick={() => determineWinner('Feuille')}>Feuille</button>
        <button onClick={() => determineWinner('Ciseaux')}>Ciseaux</button>
      </div>
      <div className="result">{result}</div>
      <div className="score">
        <p>Score Joueur: {playerScore}</p>
        <p>Score Ordinateur: {computerScore}</p>
      </div>
    </div>
  );
}

export default App;
