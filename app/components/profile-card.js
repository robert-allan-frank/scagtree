import Ember from 'ember';

export default Ember.Component.extend({

  avatarUrl: Ember.computed('user', {
    get() {
      return this.get('user.avatar');
    }
  }),

  coverStyle: Ember.computed('user', {
    get() {
      return Ember.String.htmlSafe('background-image: url(' + this.get('user.cover') + ');');
    }
  }),

  classNames: ['card', 'profile-card']

});
