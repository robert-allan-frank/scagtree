import Ember from 'ember';

export default Ember.Mixin.create({

  authenticatedUserid: Ember.computed.alias('sessionService.userid'),
  authenticatedUsername: Ember.computed.alias('sessionService.username'),

  isAuthenticated: Ember.computed('sessionService.username', {
    get() {
      let sessionService = this.get('sessionService');
      return !Ember.isEmpty(sessionService.get('username'));
    }
  }),

  sessionService: Ember.inject.service('session')

});
