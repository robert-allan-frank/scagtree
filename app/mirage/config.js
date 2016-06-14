export default function() {

  this.passthrough('*.csv');

  this.namespace = 'api';

  this.get('/cats/:id');
  this.put('/cats/:id');
  this.get('/meows');
  this.get('/meows/:id');
  this.post('/users');
  this.get('/users/:id');
}
