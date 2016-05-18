import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import startMirage from '../../helpers/setup-mirage-for-integration';

moduleForComponent('meow-list', 'Integration | Component | meow list', {
  integration: true,
  beforeEach() {
    startMirage(this.container);
  },
  afterEach() {
    window.server.shutdown();
  }
});

test('it renders', function(assert) {
  this.render(hbs`{{meow-list}}`);
  assert.ok(true);
});
