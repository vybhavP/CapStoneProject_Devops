/*const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
app.listen(3001, () => console.log('Example app listening on port 3000!'))
*/



const express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express app.js' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));