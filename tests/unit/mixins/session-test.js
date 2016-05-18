import Ember from 'ember';
import SessionMixin from 'scagtree/mixins/session';
import { module, test } from 'qunit';

module('Unit | Mixin | session');

// Replace this with your real tests.
test('it works', function(assert) {
  let SessionObject = Ember.Object.extend(SessionMixin);
  let subject = SessionObject.create();
  assert.ok(subject);
});
