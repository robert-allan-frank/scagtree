import Ember from 'ember';
import SessionMixin from '../mixins/session';

export default Ember.Route.extend(SessionMixin, {

  classNames: ['home-bg'],

  model: function() {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', this.get('authenticatedUserid')),
      meows: this.store.findAll('meow')
    });
  }

});
