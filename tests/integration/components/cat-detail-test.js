import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('cat-detail', 'Integration | Component | cat detail', {
  integration: true,
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders a cat', function(assert) {
  let cat = server.create('cat');

  this.set('cat', cat);
  this.set('onRevive', () => {});
  this.set('onTrash', () => {});

  this.render(hbs`{{cat-detail cat=cat onTrash=(action onTrash) onRevive=(action onRevive)}}`);

  assert.equal(this.$('.cat-detail').length, 1, 'Found cat');
  assert.ok(this.$('.picture').attr('src').indexOf('.jpg') > -1, 'Found cat picture');
});

test('it kills and revives a cat', function(assert) {
  let cat = server.create('cat');

  this.set('cat', cat);
  this.set('onRevive', (cat) => {
    Ember.set(cat, 'dead', false);
  });
  this.set('onTrash', (cat) => {
    Ember.setProperties(cat, {
      dead: true,
      lives: Ember.get(cat, 'lives') - 1
    });
  });

  this.render(hbs`{{cat-detail cat=cat onTrash=(action onTrash) onRevive=(action onRevive)}}`);

  for (let i = 9; i > 0; i--) {
    assert.ok(this.$().text().indexOf('Dead: Yes') === -1, 'Found alive cat');
    assert.equal(this.$().find('.trash').length, 1, 'Trash is visible');
    assert.equal(this.$().find('.revive').length, 0, 'Revive is hidden');
    this.$().find('.trash').click();

    if (i > 1) {
      assert.ok(this.$().text().indexOf('Dead: Yes') > -1, 'Found dead cat');
      assert.equal(this.$().find('.trash').length, 0, 'Trash is hidden');
      assert.equal(this.$().find('.revive').length, 1, 'Revive is visible');
      this.$().find('.revive').click();
    }
  }

  assert.equal(this.$().find('.trash').length, 0, 'Trash is hidden');
  assert.equal(this.$().find('.revive').length, 0, 'Revive is hidden');
});
