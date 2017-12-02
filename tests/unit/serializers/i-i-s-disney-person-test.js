import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-disney-person', 'Unit | Serializer | i-i-s-disney-person', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-disney-person',
    'transform:file',
    'transform:decimal',

    'model:i-i-s-disney-person',
    'model:i-i-s-disney-ticket'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
