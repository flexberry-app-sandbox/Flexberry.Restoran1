import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-restoran1-стол', 'Unit | Serializer | i-i-s-restoran1-стол', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-restoran1-стол',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-restoran1-единицы',
    'transform:i-i-s-restoran1-статусы',
    'transform:i-i-s-restoran1-тип-оплаты',

    'model:i-i-s-restoran1-блюда',
    'model:i-i-s-restoran1-бронь',
    'model:i-i-s-restoran1-гости',
    'model:i-i-s-restoran1-должность',
    'model:i-i-s-restoran1-заказ-блюда',
    'model:i-i-s-restoran1-заказ-напитков',
    'model:i-i-s-restoran1-запись',
    'model:i-i-s-restoran1-напитки',
    'model:i-i-s-restoran1-продукты',
    'model:i-i-s-restoran1-ресторан',
    'model:i-i-s-restoran1-состав-блюда',
    'model:i-i-s-restoran1-состав-напитков',
    'model:i-i-s-restoran1-сотрудники',
    'model:i-i-s-restoran1-стол',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
