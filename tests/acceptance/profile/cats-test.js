import { test } from 'qunit';
import moduleForAcceptance from 'scagtree/tests/helpers/module-for-acceptance';
import scenario from 'scagtree/mirage/scenarios/default';

moduleForAcceptance('Acceptance | profile/cats');

test('visiting /profile/cats', function(assert) {
  scenario(server, false);

  visit('/profile/1/cats');

  andThen(function() {
    assert.equal(currentURL(), '/profile/1/cats');
  });
});
