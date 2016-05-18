import Ember from 'ember';
import SessionMixin from '../mixins/session';

export default Ember.Route.extend(SessionMixin, {

  beforeModel: function(transition) {
    let isAuthenticated = this.get('isAuthenticated');

    if (!isAuthenticated) {
      if (transition.targetName.indexOf('index') === -1) {
        this.transitionTo('index');
      }
    }

    // @todo temporary hard code
    this.get('sessionService').setProperties({
      username: 'robertdotfrank',
      userid: 1
    });
  }

});
