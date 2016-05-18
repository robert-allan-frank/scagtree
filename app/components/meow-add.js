import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['meow-add'],

  avatarUrl: Ember.computed('user', {
    get() {
      return this.get('user.avatar');
    }
  })

});
