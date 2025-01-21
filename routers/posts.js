const express = require('express');
const router = express.Router();

const posts = 
        [
            {
              id: 1,  
              titolo: "I Benefici dell'Allenamento a Circuito",
              contenuto: "Scopri come l'allenamento a circuito può migliorare la tua forza e resistenza.",
              immagine: "/img/pasta_barbabietola.jpeg",
              tags: ["allenamento", "fitness", "salute"]
            },
            {
              id: 2,  
              titolo: "Ricetta di Smoothie Proteico",
              contenuto: "Una ricetta semplice e veloce per un delizioso smoothie proteico post-allenamento.",
              immagine: "/img/ciambellone.jpeg",
              tags: ["ricetta", "nutrizione", "proteine"]
            },
            {
              id: 3,  
              titolo: "Guida all'HTML per Principianti",
              contenuto: "Impara le basi di HTML per creare il tuo primo sito web.",
              immagine: "/img/pane_fritto_dolce.jpeg",
              tags: ["programmazione", "HTML", "web development"]
            },
            {
              id: 4,  
              titolo: "I Migliori Esercizi per i Bicipiti",
              contenuto: "Una selezione dei migliori esercizi per sviluppare bicipiti forti e definiti.",
              immagine: "/img/cracker_barbabietola.jpeg",
              tags: ["allenamento", "bicipiti", "muscoli"]
            },
            {
              id: 5,  
              titolo: "5 Consigli per Dormire Meglio",
              contenuto: "Suggerimenti pratici per migliorare la qualità del sonno e sentirsi più energici.",
              immagine: "/img/torta_paesana.jpegpost",
              tags: ["salute", "benessere", "sonno"]
            }
          ]

          router.get('/', (req, res) => {
            res.json(posts);
            });
            // show
            router.get('/:id', (req, res) => {
                if(isNaN(req.params.id)) {
                    return res.sendStatus(400)
                }
                    if(posts){
                        res.json(posts)
                    } else {
                        res.sendStatus(404)
                    }
            });
            // store
            router.post('/', (req, res) => {
                res.send('Creazione di un nuovo post');
            });
            // update
            router.put('/:id', (req, res) => {
              const postId = req.params.id
                res.send(`Modifica integrale del post ${postId}`);
            });
            // modify
            router.patch('/:id', (req, res) => {
              const postId = req.params.id
                res.send(`Modifica parziale del post ${postId}`)
            });
            // destroy
            router.delete('/:id', (req, res) => {
              const postId = req.params.id
                res.send(`Eliminazione del post ${postId}`);
        });
module.exports = router;