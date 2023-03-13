const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(express.static(path.join(__dirname, '/public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
    })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    })