import { test } from 'qunit';
import moduleForAcceptance from 'scagtree/tests/helpers/module-for-acceptance';
import scenario from 'scagtree/mirage/scenarios/default';

moduleForAcceptance('Acceptance | profile');

test('visiting /profile meows', function(assert) {
  scenario(server, false);

  visit('/profile/1');

  andThen(function() {
    assert.equal(currentURL(), '/profile/1', 'Navigated to profile route');

    click('#link-meows');

    andThen(function() {
      assert.equal(currentURL(), '/profile/1', 'Navigated to profile/meows route');
      assert.equal(find('.meow-detail').length, 3, 'Found 3 meows');
    });
  });
});

test('visiting /profile cats', function(assert) {
  scenario(server, false);

  visit('/profile/1');

  andThen(function() {
    assert.equal(currentURL(), '/profile/1', 'Navigated to profile route');

    click('#link-cats');

    andThen(function() {
      assert.equal(currentURL(), '/profile/1/cats', 'Navigated to profile/cats route');
      assert.equal(find('.cat-detail').length, 5, 'Found 5 cats');
    });
  });
});
