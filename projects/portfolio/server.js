let 
  express = require('express'),
  app = express(),
  port = 8000;

// app.set
app.set('view engine', 'ejs');
app.set('views', __dirname + `/views`);

// app.use
app.use(express.static(__dirname + `/static`));

// app routes
app.get('/', (request, response) => {
  let users = [
    { name: 'Cody' },
    { name: 'Bob' },
    { name: 'Francis' },
  ];
  response.render('index', { users: users });
});

app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})