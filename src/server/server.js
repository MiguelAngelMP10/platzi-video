import express from 'express';

const app = express();

app.get('*', (req, res) => {
  res.send({
    hello: 'express',
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('App listening on port 3000!');
  }
});
