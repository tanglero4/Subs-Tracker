const express = require('express');
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Use GraphQL at http://localhost:${PORT}`);
  })
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);


  