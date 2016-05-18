import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'li',

  classNames: ['cat-detail'],

  cat: null,

  pictureUrl: Ember.computed('cat', {
    get() {
      return this.get('cat.picture');
    }
  })

});
