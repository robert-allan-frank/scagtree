import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',
  classNames: ['meow-detail'],

  meow: null,

  avatarUrl: Ember.computed('meow', {
    get() {
      return this.get('meow.user.avatar') || `/images/users/${this.get('meow.user.id')}/avatar.jpg`;
    }
  })

});
