import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return this.modelFor('profile').user.get('meows');
  }

});
