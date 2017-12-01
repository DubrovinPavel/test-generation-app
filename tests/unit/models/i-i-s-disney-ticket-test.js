import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-disney-ticket', 'Unit | Model | i-i-s-disney-ticket', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-disney-person',
    'model:i-i-s-disney-ticket'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
