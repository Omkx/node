var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarPost = function(){
  var randomId = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomContent = faker.lorem.sentence();
  var randomDate = faker.date.recent();
  var randomImage = faker.image.avatar();
  return {
    id: randomId,
    nombre: randomName,
    contenido: randomContent,
    fecha: randomDate,
    imagen: randomImage
  };
};

app.get('/', function (req, res) {
  res.send('Servidor!');
});

app.get('/posts', function (req, res) {
  var cantidad = _.random(5,10);
  var posts = _.times(cantidad, generarPost);
  res.json(posts);
});

app.get('/post', function (req, res) {
  res.send('post');
});

app.listen(3000);
