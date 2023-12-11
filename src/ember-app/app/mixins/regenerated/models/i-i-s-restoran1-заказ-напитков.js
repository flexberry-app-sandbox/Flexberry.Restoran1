import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментраий: DS.attr('string'),
  напитки: DS.belongsTo('i-i-s-restoran1-напитки', { inverse: null, async: false }),
  бронь: DS.belongsTo('i-i-s-restoran1-бронь', { inverse: 'заказНапитков', async: false })
});

export let ValidationRules = {
  комментраий: {
    descriptionKey: 'models.i-i-s-restoran1-заказ-напитков.validations.комментраий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  напитки: {
    descriptionKey: 'models.i-i-s-restoran1-заказ-напитков.validations.напитки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  бронь: {
    descriptionKey: 'models.i-i-s-restoran1-заказ-напитков.validations.бронь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказНапитковE', 'i-i-s-restoran1-заказ-напитков', {
    комментраий: attr('Комментраий', { index: 0 }),
    напитки: belongsTo('i-i-s-restoran1-напитки', 'Напитки', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
