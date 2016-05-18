import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('cat-list', 'Integration | Component | cat list', {
  integration: true,
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders cats', function(assert) {
  let cats = server.createList('cat', 3);

  this.set('cats', cats);
  this.set('onRevive', () => {});
  this.set('onTrash', () => {});

  this.render(hbs`{{cat-list cats=cats onTrash=(action onTrash) onRevive=(action onRevive)}}`);

  assert.equal(this.$('.cat-detail').length, 3, 'Found cats');
});

test('it renders no cats', function(assert) {
  this.set('cats', []);
  this.set('onRevive', () => {});
  this.set('onTrash', () => {});

  this.render(hbs`{{cat-list cats=cats onTrash=(action onTrash) onRevive=(action onRevive)}}`);

  assert.equal(this.$('.cat-detail').length, 0, 'Found no cats');
  assert.equal(this.$('.no-cats').length, 1, 'Found no cats');
});
