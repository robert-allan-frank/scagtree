import Ember from 'ember';
import SessionMixin from '../mixins/session';

export default Ember.Controller.extend(SessionMixin, {

  avatarUrl: Ember.computed('model', {
    get() {
      return this.get('model.user.avatar');
    }
  }),

  coverStyle: Ember.computed('model', {
    get() {
      return Ember.String.htmlSafe('background-image: url(' + this.get('model.user.cover') + ');');
    }
  }),

  isFollowing: Ember.computed('model', 'model.user.followers', 'sessionService.authenticatedUserid', function() {
    return this.get('model.user.followers').isAny('id', this.get('sessionService.authenticatedUserid'));
  })

});
