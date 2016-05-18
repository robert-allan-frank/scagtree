import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    onRevive: function(cat) {
      cat.set('dead', false);
      return cat.save();
    },

    onTrash: function(cat) {
      cat.setProperties({
        lives: cat.get('lives') - 1,
        dead: true
      });
      return cat.save();
    }

  }

});
