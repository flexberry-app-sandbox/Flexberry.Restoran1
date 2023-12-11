import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-restoran1-напитки', 'Unit | Model | i-i-s-restoran1-напитки', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
