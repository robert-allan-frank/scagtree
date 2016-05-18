import Ember from 'ember';
import SessionMixin from '../mixins/session';

export default Ember.Controller.extend(SessionMixin, {

  valuesObserver: Ember.observer('username', 'password', function() {
    this.set('errorMessage', false);
  }),

  actions: {
    onLogin: function() {
      var username = this.get('username');
      var password = this.get('password');

      if (!Ember.isEmpty(username) && !Ember.isEmpty(password)) {
        this.get('sessionService').setProperties({
          username: 'robertdotfrank',
          userid: 1
        });
        this.transitionToRoute('home');
      } else {
        this.set('errorMessage', 'Wrong username or password!');
      }
    }
  }

});
