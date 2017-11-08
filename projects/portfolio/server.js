let 
  express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  Users = require('./models/users'),
  app = express(),
  port = 8000;

// check for db errors
mongoose.connection.openUri('mongodb://localhost/myNewDatabase')
.once('open', () => console.log('Good to go !'))
.on('error', (error) => console.warn('Warning', error));

// app.set
app.set('view engine', 'ejs');
app.set('views', __dirname + `/views`);

// app.use
app.use(express.static(__dirname + `/static`));
app.use(bodyParser.urlencoded({ extended: true }));

// app routes
app.get('/', (request, response) => {
  Users.find({}, (error, users) => {
    if (!error) {
      response.render('index', { users: users });
    } else {
      console.log(error);
    }
  });
});

app.post('/users', (request, response) => {
  console.log(request.body);
  users.push({ name: request.body.name });
  response.redirect('/');
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`)
});