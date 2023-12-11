import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  комментарий: DS.attr('string'),
  блюда: DS.belongsTo('i-i-s-restoran1-блюда', { inverse: null, async: false }),
  бронь: DS.belongsTo('i-i-s-restoran1-бронь', { inverse: 'заказБлюда', async: false })
});

export let ValidationRules = {
  комментарий: {
    descriptionKey: 'models.i-i-s-restoran1-заказ-блюда.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  блюда: {
    descriptionKey: 'models.i-i-s-restoran1-заказ-блюда.validations.блюда.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  бронь: {
    descriptionKey: 'models.i-i-s-restoran1-заказ-блюда.validations.бронь.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаказБлюдаE', 'i-i-s-restoran1-заказ-блюда', {
    комментарий: attr('Комментарий', { index: 0 }),
    блюда: belongsTo('i-i-s-restoran1-блюда', 'Блюда', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
