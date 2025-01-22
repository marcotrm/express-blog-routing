const express = require('express');
const router = express.Router();
const posts = require("posts")

// index
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
  })

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