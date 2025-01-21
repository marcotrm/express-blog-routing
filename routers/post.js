const express = require('express');
const router = express.Router();

const posts = 
        [
            {
              titolo: "I Benefici dell'Allenamento a Circuito",
              contenuto: "Scopri come l'allenamento a circuito può migliorare la tua forza e resistenza.",
              immagine: "/img/pasta_barbabietola.jpeg",
              tags: ["allenamento", "fitness", "salute"]
            },
            {
              titolo: "Ricetta di Smoothie Proteico",
              contenuto: "Una ricetta semplice e veloce per un delizioso smoothie proteico post-allenamento.",
              immagine: "/img/ciambellone.jpeg",
              tags: ["ricetta", "nutrizione", "proteine"]
            },
            {
              titolo: "Guida all'HTML per Principianti",
              contenuto: "Impara le basi di HTML per creare il tuo primo sito web.",
              immagine: "/img/pane_fritto_dolce.jpeg",
              tags: ["programmazione", "HTML", "web development"]
            },
            {
              titolo: "I Migliori Esercizi per i Bicipiti",
              contenuto: "Una selezione dei migliori esercizi per sviluppare bicipiti forti e definiti.",
              immagine: "/img/cracker_barbabietola.jpeg",
              tags: ["allenamento", "bicipiti", "muscoli"]
            },
            {
              titolo: "5 Consigli per Dormire Meglio",
              contenuto: "Suggerimenti pratici per migliorare la qualità del sonno e sentirsi più energici.",
              immagine: "/img/torta_paesana.jpegpost",
              tags: ["salute", "benessere", "sonno"]
            }
          ]