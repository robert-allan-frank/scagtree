import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('profile', { path: 'profile/:userid' }, function() {
    this.route('cats');
  });
});

export default Router;
