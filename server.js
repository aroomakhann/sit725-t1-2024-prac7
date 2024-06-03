const express = require('express');
const app = express();
const port = process.env.PORT || 3750;
const { runDBConnection } = require('./dbconnection');
const router = require('./routers/router');

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
});


app.listen(port, () => {
    console.log('Express server has started on port ' + port);
    runDBConnection(); 
});
